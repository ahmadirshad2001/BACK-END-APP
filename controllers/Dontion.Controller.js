const Donation = require("../model/Donation");
const mongodb = require("mongodb");



const getDonations = async (req, res) => {
    var Report = await Donation.find();
    res.send(Report);
  };
  
  const SaveDonations = async (req, res) => {
    console.log(req.body);
    var obj = {};
  
    if (
      req.body?.name == "" ||
      req.body?.email == "" ||
      req.body?.password == "" ||
      req.body?.Donation == "" ||
      req.body.phonenumber == ""
  
    ) {
      obj = {
        isSaved: false,
        message: "All feilds are required",
      };
    } else {
      let Rp = await Donation.create(req.body);
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

 



  module.exports = {
    getDonations,
    SaveDonations,
  
  };
  