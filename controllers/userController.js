//@desc Register the user
//@route POST /api/users/register
//@access Public
const registerUser = asyncHandler(async(req, res) => {
    // Logic for user registration
    res.status(201).json({ message: 'Register the User' });
});
module.exports = {
    registerUser};