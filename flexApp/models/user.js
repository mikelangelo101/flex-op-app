var mongoose              = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phoneContact: String,
    username: String,
    password: String,
    registrer:String,
    position: String
});
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);