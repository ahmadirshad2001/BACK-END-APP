const express = require("express");
const userRoutes = require("./Routes/userRoutes");
const Donations = require("./Routes/DonationRoutes")
const AdminData = require('./Routes/AdminRoutes')

const app = express();
var cors = require("cors");


app.use(express.json());
app.use(cors());
require("./config/dbConnection")(); // db connection

app.use("/api/users", userRoutes);
app.use('/api/Donation', Donations )
app.use('/api/AdminData', AdminData)
const port = 5000;

app.listen(port, () => {
  console.log("Application is running..");
});
