var mongoose  = require("mongoose");
// var passportLocalMongoose = require("passport-local-mongoose");

var TssSchema = new mongoose.Schema({
    validInfo: Object,
    siteDetails : Object,
    cableRequirement: Object,
    existingSolution: Object,
    tenantLoads: Array,
    gensetDetails: Array,
    additionalLoad: Array,
    categorisedTenants: Array,
    images:Array
});
// UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Tss", TssSchema);