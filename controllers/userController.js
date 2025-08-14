const asyncHandler = require('express-async-handler');  
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');    
//@desc Register the user
//@route POST /api/users/register
//@access Public
const registerUser = asyncHandler(async(req, res) => {
    // Logic for user registration
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error('Please fill all the fields');
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error('User already exists');
    }
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("the hashed password is:", hashedPassword);
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    });// Create a new user with hashed password
    console.log(`User created : ${user}`);
    if (user) {
        res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email,
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
    res.status(201).json({ message: 'Register the User' });
});

//@desc Login the user
//@route POST /api/users/login 
//@access Public
const loginUser = asyncHandler(async(req, res) => {
    // Logic for user login
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error('Please fill all the fields');
    }
    const user = await User.findOne({ email });
    //compare the password with the hashed password in the database
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            },

        },process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '1m',
        });
        res.status(200).json({ accessToken });
    }
        // Return the access token if login is successful
        else {
            res.status(401);
            throw new Error('Invalid credentials');
        }   
        res.status(200).json({accessToken});

});


//@desc Get current user
//@route GET /api/users/current
//@access Private
const currentUser = asyncHandler(async(req, res) => {
    // Logic for getting current user
    res.status(200).json(req.user); // req.user is set by the validateToken middleware
    // This will return the user information of the currently logged-in user
});
module.exports = {
    registerUser,loginUser, currentUser};