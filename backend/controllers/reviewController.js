const asyncHandler = require('express-async-handler')
const Review = require("../models/reviewModel");

// POST dentalglow/reviews
const createReview = asyncHandler(async (req,res) => {
    const newReview = await Review.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      comment: req.body.comment,
      datePosted: Date.now()
    })  
    try {
      const savedReview = await newReview.save();
      res.status(200).json(savedReview);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
//GET dentalglow/reviews
const getReview = asyncHandler(async (req,res) => {
    const reviews = await Review.find().sort({datePosted: 1}).limit(5)
    res.status(200).json(reviews)
})

module.exports = {createReview, getReview}