const mongoose = require("mongoose");

const dbConnect = async () => {

  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/admin", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      autoIndex: true,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect;
