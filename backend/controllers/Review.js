const Review = require('../models/Review');
const Product = require('../models/Product');
// Example function to create a review
const submitReview = async (req, res) => {
    try {
        const { productId, userId, changes } = req.body;

        // Create a new review document
        const newReview = await Review.create({
            productId,
            userId,
            changes,
            status: 'pending' // Default status when created
        });

        res.status(201).json({
            success: true,
            message: 'Review submitted successfully',
            review: newReview
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error submitting review',
            error: error.message
        });
    }
};
