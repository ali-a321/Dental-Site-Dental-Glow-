const express = require('express')
const router = express.Router()
const {createAppointment, } = require("../controllers/bookingController")

router.post('/', createAppointment)

module.exports = router