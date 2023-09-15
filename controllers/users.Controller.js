const User = require("../model/user");
const mongodb = require("mongodb");

const getAllUsers = async (req, res) => {
  var usr = await User.find();
  res.send(usr);
};

const saveUser = async (req, res) => {
  console.log(req.body);
  var obj = {};

  if (
    req.body?.name == "" ||
    req.body?.email == "" ||
    req.body?.password == "" ||
    req.body.phonenumber == ""

  ) {
    obj = {
      isSaved: false,
      message: "All feilds are required",
    };
  } else {
    let dt = await User.create(req.body);
    if (dt?.name != "") {
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

const getUserById = async (req, res) => {
  let id = new mongodb.ObjectId(req.params.id);
  let find = await User.findOne({ id: req.params.id });
  res.send(find);
};

const updateUser = async (req, res) => {
  var obj = {};

  try {
    console.log(req.params.id);
    if (
      req.params.id == "" ||
      req.params.id == undefined ||
      req.params.id == null
    ) {
      obj = {
        isSaved: false,
        message: "you are passing Incorrect Id",
      };
    }

    if (
      req.body?.name == "" ||
      req.body?.email == "" ||
      req.body?.password == "" ||
      req.body.phonenumber == ""
    ) {
      obj = {
        isSaved: false,
        message: "All feilds are required",
      };
    } else {
      let response = await User.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            phonenumber: req.body.phonenumber,
            Date: req.body.Date,
            Country: req.body.Country,
            City: req.body.City,
            Address: req.body.Address,
            TotalNeeds: req.body.TotalNeeds,
            WhatYouWant: req.body.WhatYouWant,
            BankAccount: req.body.BankAccount,
            EasypaisaAccount: req.body.EasypaisaAccount
          },
        },
        { new: true }
      );

      if (!response) {
        obj = {
          isSaved: false,
          message: "data has not been updated successfully ",
        };
      } else {
        obj = {
          isSaved: true,
          message: "data has been updated successfully ",
        };
      }
    }
  } catch (e) {
    obj = {
      isSaved: false,
      message: "something getting worng in server side ",
    };
  }
  res.send(obj);
};

const deleteUser = async (req, res) => {
  var obj = {};

  let result = await User?.findByIdAndDelete(req.params.id);
  console.log(result);
  if (!result) {
    obj = {
      isSaved: false,
      message: "data has not been deleted successfully ",
    };
  } else {
    obj = {
      isSaved: true,
      message: "data has been deleted successfully ",
    };
  }

  res.send(obj);
};

const loginUser = async (req, res) => {
  let findedValue = await User.find({
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
  getAllUsers,
  saveUser,
  getUserById,
  updateUser,
  deleteUser,
  loginUser,


};
