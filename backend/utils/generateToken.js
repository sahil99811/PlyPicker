const jwt = require('jsonwebtoken');

// Function to generate a JWT token
exports.generateToken = (user) => {
    // Create a JWT token with the user's ID and role
    return jwt.sign(
        {
            id: user._id.toString(), // Include the user's ID in the payload (convert to string)
            role: user.role          // Include the user's role in the payload
        },
        process.env.JWT_SECRET_KEY,  // Use the secret key from environment variables to sign the token
        {
            expiresIn: '24hr'        // Set the token to expire in 24 hours
        }
    );
}
