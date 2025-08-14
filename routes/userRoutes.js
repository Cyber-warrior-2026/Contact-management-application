const express = require('express');
const { registerUser, loginUser, currentUser } = require('../controllers/userController');
const validateToken = require('../middlewares/validateTokenHandler');
const router = express.Router();

router.post('/register',registerUser );
router.post('/login',loginUser );
//seekh-order of middleware is important
//validateToken middleware will check the token before accessing the currentUser route
router.get("/current", validateToken,currentUser); // Protected route, requires token validation
module.exports = router;
