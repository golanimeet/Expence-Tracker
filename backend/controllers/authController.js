const User = require('../models/User')
const jwt = require("jsonwebtoken");

// generate JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {expiresIn : "1h"});
};

//register user
exports.registerUser = async (req, res) => {
    const {fullName, email, password, profileImageUrl } = req.body;
    if(!fullName || !email || !password ) {
        return res.status(400).json({message: "All fields are required"});
    }

    try {
        // Check if email already exists
        const existUser = await User.findOne({email});

        if(existUser){
            return res.status(400).json({message: "Email already exist"});
        }

        // Create the user
        const user = await User.create({
            fullName,
            email,
            password,
            profileImageUrl
        });

        res.status(201).json({
            id: user._id,
            user,
            token: generateToken(user._id),
        });

    } catch (error) {
        res.status(500).json({message:"Error registering user", error: error.message});
    }
};

//login user
exports.loginUser = async (req, res) => {}

//get user
exports.getUserInfo = async (req, res) => {}