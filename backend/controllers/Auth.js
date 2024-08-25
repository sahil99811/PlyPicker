const User = require('../models/User');
const { generateToken } = require('../utils/generateToken');
const bcrypt = require('bcrypt');

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user) {
            return next(createError(401, 'User not registered. Please sign up.'));
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return next(createError(401, 'Invalid credentials.'));
        }

        const token = generateToken(user);
        res.status(201).json({
            success: true,
            token,
            message: 'Login successful',
            role: user.role
        });
    } catch (error) {
        next(error); 
    }
};

const register = async (req, res, next) => {
    try {
        const { name, email, password, role } = req.body;
        if (!name || !email || !password || !role) {
            return next(createError(400, 'All fields are required.'));
        }

        const existingUser = await User.findOne({ email: email.toLowerCase() });
        if (existingUser) {
            return next(createError(409, 'User already exists.'));
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            name,
            email: email.toLowerCase(),
            password: hashedPassword,
            role
        });

        res.status(201).json({
            success: true,
            message: 'Signup successful',
        });
    } catch (error) {
        next(error); 
    }
};


module.exports={login,register};