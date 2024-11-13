var mongoose = require('mongoose')
var Schema = mongoose.Schema

var rapperSchema = new Schema(
   {
   title: String,
   nick: 
   {
   type: String,
   unique: true,
   required: true
 },
   avatar: String,
   desc: String,
   created:{
        type:Date,
        default:Date.now
 }
 })

 module.exports.Rapper = mongoose.model("Rapper", rapperSchema)