const asyncHandler = require('express-async-handler')
const Book = require("../models/bookingModel");

// POST dentalglow/appointment

const createAppointment = asyncHandler(async (req,res) => {
    const newAppointment = new Book(req.body);
    try {
      const savedAppointment = await newAppointment.save();
      res.status(200).json(savedAppointment);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = {createAppointment, }