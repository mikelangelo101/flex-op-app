var mongoose              = require("mongoose");
// var passportLocalMongoose = require("passport-local-mongoose");

var OperationSchema = new mongoose.Schema({
    projectName: String,
    projectCode: String,
    operationType: String,
    siteId: String,
    location: String,
    country: String,
    FSEName: String,
    FSEContact: String,
    assingedStaffPosition: String,
    assingedStaff: String,
    assingedStaffContact: String,
    assingedStaffName: String,
    operationDate: Date,
    operationCode: String,
    completed:  {
        type: Boolean,
        default: false
    }
});
// UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Operation", OperationSchema);