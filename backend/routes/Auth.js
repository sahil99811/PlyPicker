const express = require('express');
const router = express.Router();
const {login,register}=require('../controllers/Auth')
// Define the route for user login
// This route will handle POST requests to '/login'
router.post('/login',login);

// Define the route for user registration
// This route will handle POST requests to '/register'
router.post('/register',register);

// Export the router to be used in other parts of the application
module.exports = router;
