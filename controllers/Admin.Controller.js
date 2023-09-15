const AdminData = require("../model/Admin");
const mongodb = require("mongodb");

 
const SaveAdminData = async (req, res) => {
    console.log(req.body);
    var obj = {};
  
    if (
      req.body?.name == "" ||
      req.body?.email == "" ||
      req.body?.phonenumber == "" ||
      req.body?.password == "" 
    
  
    ) {
      obj = {
        isSaved: false,
        message: "All feilds are required",
      };
    } else {
      let Rp = await AdminData.create(req.body);
      if (Rp?.name != "") {
        obj = {
          isSaved: true,
          message: "data has been saved successfully ",
        };
      }
      obj = {
        isSaved: true,
        message: "data has been saved successfully ",
      };
    }
    res.send(obj);
  };



  const AdminLogin = async (req, res) => {
    let findedValue = await AdminData.find({
      email: req.body.email,
      password: req.body.password,
    });
  
    let response = {};
    if (findedValue?.length > 0) {
      response = {
        isAuthenticated: true,
        message: "Successfully LoggedIn",
        data: findedValue
      };
    } else {
      response = {
        isAuthenticated: false,
        message: "Please check Email and Password",
        data: null
      };
    }
    res.send(response);
  };



  module.exports = {
   SaveAdminData,
   AdminLogin
  };