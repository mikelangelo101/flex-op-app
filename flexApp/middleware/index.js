//All middleware go here!
var User          = require("../models/user");
var middlewareObj = {};


middlewareObj.isLoggedIn = function (req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    console.log("error", "Permission denied, you are not logged in");
    res.json({
        error: "Permission denied, you are not logged in"
    });
};

middlewareObj.isManager = function (req, res, next) {
    if(req.isAuthenticated() && (req.user.position === "countryManager" || req.user.position === "manager")){
        return next();
    }
    console.log("error", "Permission denied, you are not admin");
    res.json({
        error: "Permission denied, you have no managerial right!!!"
    });
};

module.exports = middlewareObj;