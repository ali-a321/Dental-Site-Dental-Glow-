const express = require('express')
const router = express.Router()
const {createReview, getReview } = require("../controllers/reviewController")

router.get('/', getReview)
router.post('/', createReview)

module.exports = router