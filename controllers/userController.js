const asyncHandler = require('express-async-handler');  
//@desc Register the user
//@route POST /api/users/register
//@access Public
const registerUser = asyncHandler(async(req, res) => {
    // Logic for user registration
    res.status(201).json({ message: 'Register the User' });
});

//@desc Login the user
//@route POST /api/users/login 
//@access Public
const loginUser = asyncHandler(async(req, res) => {
    // Logic for user login
    res.status(200).json({ message: 'Login the User' });
});

//@desc Get current user
//@route GET /api/users/current
//@access Private
const currentUser = asyncHandler(async(req, res) => {
    // Logic for getting current user
    res.status(200).json({ message: 'current User info.' });
});
module.exports = {
    registerUser,loginUser, currentUser};