const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
    // Name field: a string that is required
    name: {
        type: String,
        required: true,
    },
    // Email field: a string that is required
    email: {
        type: String,
        required: true,
    },
    // Role field: a string that must be either 'admin' or 'teammember'
    role: {
        type: String,
        enum: ['admin', 'teammember'], // Restricting role values to 'admin' and 'teammember'
    },
    // Password field: a string that is required
    password: {
        type: String,
        required: true
    }
});

// Export the User model based on the schema
module.exports = mongoose.model('User', userSchema);
