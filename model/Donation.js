const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReportSchema = new Schema({
    name:String,
    email:String,
    phonenumber:Number,
    date:String,Number,
    Address:String,
    Donation:Number
  })
  
  const Reports=mongoose.model("Reports",ReportSchema);
  module.exports=Reports