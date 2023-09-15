const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    name:String,
    email:String,
    phonenumber:Number,
    date: String,Number,
   password:String,Number
  })
  
  const AdminData=mongoose.model("AdminData",AdminSchema);
  module.exports=AdminData