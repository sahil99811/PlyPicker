const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    department:{
        type:String,
        required:true
    },
    createBy:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
