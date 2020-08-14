var mongoose              = require("mongoose");
// var passportLocalMongoose = require("passport-local-mongoose");

var ProjectSchema = new mongoose.Schema({
    projectName: String,
    projectCode: String,
    projectClient: String,
    projectDescription: String,
    projectScope: String,
    numberOfSites: Number,
    projectLocation: String,
    projectManager: String,
    startDate: Date,
    estimatedEndDate: Date,
    tsss: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "tss"
        }
    ],
    commissionings: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "commissioning"
        }
    ],
    teams: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "team"
        }
    ],
    operations: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "operation"
        }
    ]
});
// UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Project", ProjectSchema);