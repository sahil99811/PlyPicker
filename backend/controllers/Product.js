const Product=require('../models/Product');
const createError = require('http-errors');
const mongoose=require('mongoose');
const createPost=async (req,res)=>{
    try{
       const {id}=req.user;
       const {productName,description,image,price,department}=req.body;
       if (!productName || !description || !image || !price || !department) {
        return next(createError(400, 'All fields are required.'));
       }
       await Product.create({productName,description,image,price,departmen,createdBy:id});
       return res.status(201).json({
        success:true,
        message:"Products Creted successfuly..."
       })

    }catch(error){
        console.log(error);
        next(error)
    }
}
const getAllProducts=async (req,res)=>{
    try{
        const {role}=req.query;
        const {id}=req.user;
        let query={};
        if(role==="admin"){
           query.createdBy=id
        }
        const products=await Product.find(query);
        return res.status(201).json({
            success:true,
            message:"Products fetched successfuly...",
            data:products
        })

    }catch(error){
       console.log(error);
       next(error)
    }
}

const productDetails=async (req,res)=>{
    try{
        const {productId}=req.params;
        const product=await Product.findById(productId);
        return res.status(201).json({
            success:true,
            message:"Products Details fetched successfuly...",
            data:product
        })

    }catch(error){
       console.log(error);
       next(error)
    }
}


const updateProduct=async (req,res)=>{
    try{
        const {productId}=req.params;
         // Check if quizId is a valid MongoDB ObjectId
         if (!mongoose.Types.ObjectId.isValid(productId)) {
            
            return res.status(404).json({ success: false, message: 'Invalid post ID' });
        }
        return res.status(201).json({
            success:true,
            message:"Products Details fetched successfuly...",
            data:product
        })

    }catch(error){
       console.log(error);
       next(error)
    }
}