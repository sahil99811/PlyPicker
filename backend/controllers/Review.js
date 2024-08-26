const Review = require('../models/Review');
const createError = require('http-errors');

const submitReview = async (req, res) => {
    try {
        const {productId}=req.params;
        const {changes,adminId } = req.body;
        const {id}=req.body;
        // Check if quizId is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(productId)) {
            return res.status(404).json({ success: false, message: 'Invalid product ID' });
        }
        if(!productId || !changes ||!adminId){
            return next(createError(400, 'All fields are required.'));
        }
        
        // Create a new review document
         await Review.create({
            productId,
            userId:id,
            adminId:adminId,
            changes,
            adminId,
            status: 'pending' 
        });

        res.status(201).json({
            success: true,
            message: 'Review submitted successfully'
        });
    } catch (error) {
        console.log(error)
        return next(error);
    }
};

const mySubmission=async (req, res) => {
    try {
        const {id}=req.user;
        const reviews=await Review.find({userId:id});
        res.status(201).json({
            success: true,
            message: 'Your Submmsion Fetched successfully',
            data:reviews
        });
    } catch (error) {
        console.log(error)
        return next(error);
    }
};

const pendingRequests=async (req,res)=>{
    try{
        const {id}=req.user;
        const requests=await Review.find({adminId:id,status:{eq:"pending"}});
        res.status(201).json({
            success: true,
            message: 'Your Pending Requests Fetched successfully',
            data:requests
        });
    }catch(error){
        console.log(error)
        return next(error);
    }
}
const pendingRequestDetails=async (req,res)=>{
    try{
        const {id}=req.user;
        const {reviewId}=req.params;
        // Check if quizId is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(reviewId)) {
            return next()
            return res.status(404).json({ success: false, message: 'Invalid Review ID' });
        }
        const requests=await Review.find({adminId:id,status:{eq:"pending"}});
        res.status(201).json({
            success: true,
            message: 'Your Pending Requests Fetched successfully',
            data:requests
        });
    }catch(error){
        console.log(error)
        return next(error);
    }
}
const changeStatus = async (req, res) => {
    try {
        const { reviewId } = req.params;
        const {status}=req.body;
        if(!reviewId || !status){
            return next(createError(400, 'All fields are required.'));
        } 
        await Review.findByIdAndUpdate(reviewId,{status});
        res.status(201).json({
            success: true,
            message: 'Review submitted successfully'
        });
    } catch (error) {
        console.log(error)
        return next(error);
    }
};

module.exports={submitReview,changeStatus};