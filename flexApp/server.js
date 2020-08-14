const express           = require('express');
const mongoose          = require("mongoose");
const bodyParser        = require('body-parser');
const passport          = require("passport");
const localStrategy     = require("passport-local");
const middleware         = require("./middleware");
const Tss               = require("./models/tss.js");
const Project           = require("./models/project.js");
const User              = require("./models/user.js");
const Operation         = require("./models/operation");

mongoose.connect("mongodb://localhost/flex-op-data");

const app = express();
const port = process.env.PORT || 5000;

// app.use(bodyParser.json());
// app.use(express.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json({ limit: '50mb' }))

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.post("/api/login", passport.authenticate("local", 
     {
        //successRedirect: "/",
        failureRedirect: "/loginFailed"
     }),  function(req, res) {
              User.find({username: req.body.username}, function(err, foundUser){
                  if (err) {
                    console.log(err);
                    res.json({
                      login: false,
                      error: err
                      })
                    }
                   res.json({
                   login: true,
                   foundUser: foundUser[0]
                  })
                console.log(foundUser);
            });
});
 
app.get("/loginFailed", function(req, res){
  res.json({
    login: false,
    error: "User Can not be authenticated"
  })
});

app.post("/registerUser", middleware.isManager, function(req, res){
  let username     = req.body.username;
  let password     = req.body.password;
  let firstName    = req.body.firstName;
  let lastName     = req.body.lastName;
  let phoneContact = req.body.phoneContact;
  let registrer    = req.body.registrer;
  let position     = req.body.position;
  
  let userDetail = {
       email:        username,
       password:     password,
       firstName:    firstName,
       lastName:     lastName,
       phoneContact: phoneContact,
       registrer:    registrer,
       position:     position
    };

    User.findOne({username: userDetail.registrer}, function(err, foundUser){
      // if (err) {
      //   console.log(err);
      //   res.json({
      //     register: false,
      //     error: err.message
      //     })
      //     return;
      //   }
       let registrerPosition = foundUser.position;
       
       console.log(userDetail);
       var newUser = new User({username: userDetail.email});
       console.log(newUser.username);
       if (registrerPosition === "countryManager"){
           console.log("User to be registered by Country Manager")
           User.register(newUser, userDetail.password, function(err, user) {
             if(err){
               console.log(">>>>>.....>>>>: " + err.message);
               res.json({
                 registered: false,
                 error: err.message
               })
           }   
         console.log("New User")
         console.log(user)
    //Note: the username and password must be used in the .ejs form for the paasport.authenticate to work
          passport.authenticate("local")(req, res, function(err){
            if (err){
                  console.log("error", "Failure to authicate user" + err.message);
                  res.json({
                    registered: false,
                    error: err.message
                  })
                }else {
                  console.log("success", "Success You have seccessfully register a user");
                  res.json({
                   registered: true,
                   user: user
                 })
               }
              });
          });
           
       } else if (registrerPosition === "manager" && userDetail.position === "adhocStaff"){
        console.log("User to be registered by manager")
        User.register(newUser, userDetail.password, function(err, user) {
          if(err){
            console.log(">>>>>.....>>>>: " + err.message);
            res.json({
              registered: false,
              error: err.message
            })
          }   
      console.log("New User")
      console.log(user)
 //Note: the username and password must be used in the .ejs form for the paasport.authenticate to work
       passport.authenticate("local")(req, res, function(err){
         if (err){
               console.log("error", "Failure to authicate user" + err.message);
               res.json({
                 registered: false,
                 error: err.message
               })
            }else {
              console.log("success", "Success You have seccessfully register a user");
              res.json({
               registered: true,
               user: user
             })
           }
        });
      });
    }
  });
          
  
});

app.post("/api/tssSubmit", (req, res) => {
  
  Tss.create(req.body, function(err, createdTss){
    if (err){
        req.flash("error", "Failure to add device");
        console.log(">>>>>.....>>>>: " + err.message);
    } else {
        console.log("......New Tss Registered.........");
        // console.log(createdTss);
        Operation.find(function(err, foundOps){
          // console.log(foundOps)
          foundOps.map((Op) => {
              if(Op.operationCode === createdTss.validInfo.operationCode){
                Operation.findByIdAndUpdate({_id: Op._id}, {completed: true}, function(err, updatedTask){
                    // console.log("Updated Task")
                    // console.log(updatedTask);
                });
              }
          });
        });
    }
  });
  res.json("Form is submited");
});

app.post("/api/regproject", (req, res) => {  
  Project.create(req.body, function(err, createdProject){
    if (err){
        req.flash("error", "Failure to register project");
        console.log(">>>>>.....>>>>: " + err.message);
    } else {
        console.log("......New Project Registered.........");
        console.log(createdProject);
    }
  });
  res.json("Project Form is submited");
});

app.get("/api/regproject", (req, res) => { 
  Project.find(function(err, allProjects){
    if (err){
        console.log(">>>>>.....>>>>: " + err.message);
    } else {
        console.log("......Requesting all projects.........");
        console.log(allProjects);
        res.json(allProjects);
    }
  });
});

app.get("/api/regproject/:id", (req, res) => {
  
  Project.findById(req.params.id, function(err, project){
    if (err){
        console.log(">>>>>.....>>>>: " + err.message);
    } else {
        console.log("......Requesting a project.........");
        console.log(project);
        res.json(project);
    }
  });
});

app.post("/api/registeruser", (req, res) => {
  
  User.create(req.body, function(err, createdUser){
    if (err){
        req.flash("error", "Failure to register user");
        console.log(">>>>>.....>>>>: " + err.message);
    } else {
        console.log("......New User Registered.........");
        console.log(createdUser);
        res.json("User Form is submited");
    }
  });
});

app.get("/api/registeruser", (req, res) => {
  User.find(req.body, function(err, foundUsers){
    if (err){
        req.flash("error", "Failure to get users");
        console.log(">>>>>.....>>>>: " + err.message);
    } else {
        console.log("......User List.........");
        // console.log(foundUsers);
        res.json(foundUsers);
    }
  }); 
});

app.get("/api/registeruser/:id", (req, res) => {
  
  User.findById(req.params.id, function(err, foundUser){
    if (err){
        console.log(">>>>>.....>>>>: " + err.message);
    } else {
        console.log("......Requesting a project.........");
        console.log(foundUser);
        res.json(foundUser);
    }
  });
});

app.get("/api/registeruser/delete/:id", (req, res) => {
  console.log("User to delete: " +req.params.id)
  User.findByIdAndRemove(req.params.id, function(err){
    if (err){
        console.log("failed to delete: " +req.params.id);
    } else{
        res.json("User Deleted:" +req.params.id);
    }
  });
});

app.post("/api/addtask", (req, res) => {  
  Operation.create(req.body, function(err, createdTask){
    if (err){
        req.flash("error", "Failure to register task");
        console.log(">>>>>.....>>>>: " + err.message);
    } else {
        console.log("......New task registered.........");
        console.log(createdTask);
        res.json("Operation Form is submited");
    }
  });
});

app.get("/api/addtask", (req, res) => {
  Operation.find(req.body, function(err, foundTasks){
    if (err){
        req.flash("error", "Failure to get tasks");
        console.log(">>>>>.....>>>>: " + err.message);
    } else {
        console.log("......Tasks List.........");
        console.log(foundTasks);
        res.json(foundTasks);
    }
  }); 
});

app.get("/api/gettask/:id", (req, res) => {
  Operation.findById(req.params.id, function(err, foundTasks){
    if (err){
        req.flash("error", "Failure to get tasks");
        console.log(">>>>>.....>>>>: " + err.message);
    } else {
        console.log("......Tasks List.........");
        console.log(foundTask);
        res.json(foundTask);
    }
  }); 
});

app.post("/api/getTaskReport", (req, res) => {  
  console.log(req.body);
  console.log(`${req.body.operationType}  ${req.body.operationCode}`)
  let operationCode = req.body.operationCode
  if (req.body.operationType === "TSS"){
    Tss.find(function(err, foundTsss){
      console.log("Finding Tss submitted")
      console.log(foundTsss)
      if (err){
        console.log(err)
        res.json(err)
      }
      foundTsss.map((Tss) => {
        if(Tss.validInfo.operationCode === operationCode){
          console.log("I have found the Tss")
          console.log(Tss)
          res.json(Tss);
        }
      })
    });
  } 

});


app.listen(port, () => console.log(`Listening on port ${port}`))