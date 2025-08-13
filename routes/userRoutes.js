const express = require('express');
const { registerUser } = require('../controllers/userController');
const router = express.Router();

router.post('/register',registerUser );
router.post('/login', (req, res) => {
    // Logic for user login
    res.status(200).json({ message: 'Login the User' });
});
router.get("/current", (req, res) => {
    // Logic for getting current user
    res.status(200).json({ message: 'current User info.' });
});
module.exports = router;
