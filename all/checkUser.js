var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/rap_2024")
var User = require("./models/user.js").User
var first_user = new User({
username: "enver_dj",
password: "enver7"
})
first_user.save();