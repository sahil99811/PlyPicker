// Function to send an error response
// This function is used to standardize error responses in the application
exports.errorResponse = (err, req, res, next) => {
    const statusCode = err.status || 500;
    res.status(statusCode).json({
        success: false,
        message: err.message || 'Server Error',
    });
};