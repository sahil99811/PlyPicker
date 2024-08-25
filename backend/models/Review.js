const mongoose = require('mongoose');


const reviewSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    adminId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    changes: {
        type: Map,
        of: String,
        required: true 
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
    note: {
        type: String,
        required: false 
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('Review', reviewSchema);
