const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  phonenumber: String,
  date: String,Number,
  Country: String,
  City: String,
  Address: String,
  TotalNeeds: String,
  WhatYouWant: String,
  Type: String,
  BankAccount: String,
  EasypaisaAccount: String
});



const User = mongoose.model("users", UserSchema);
module.exports = User;

