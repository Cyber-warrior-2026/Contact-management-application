const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');


const validateToken = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization; // yaa toh headers mein Authorization hoga ya directly Bearer token hoga
    if (authHeader && authHeader.startsWith('Bearer')) {
        token = authHeader.split(' ')[1]; // Bearer token se token ko alag kar rahe hain
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                res.status(401);
                 throw new Error('Not authorized, token failed');
            }
            req.user = decoded.user; // decoded user ko request object mein daal rahe hain kyuki humein user ki information chahiye hoti hai
            next(); // agla middleware ya route handler ko call kar rahe hain
        });
        if (!token) {
            res.status(401);
            throw new Error('Not authorized, no token');
        }  
    } 
});

module.exports = validateToken;