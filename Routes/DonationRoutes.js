const express = require("express");

const {
    getDonations,
    SaveDonations,
    
}= require('./../controllers/Dontion.Controller');

const router = express.Router();

router.post('/',SaveDonations)
router.get('/',getDonations)

module.exports = router;