const express = require("express");

const {
    SaveAdminData,
    AdminLogin,
}= require('./../controllers/Admin.Controller');

const router = express.Router();

router.post('/',SaveAdminData)
router.post("/AdminLogin", AdminLogin);
module.exports = router;