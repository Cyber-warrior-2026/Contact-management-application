const mognoose = require('mongoose');
const userSchema = new mognoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
  },
  email: {  
    type: String,
    required: [true, 'Email is required'],  
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long'],
        },
    },
  { timestamps: true },
);
module.exports = mognoose.model('User', userSchema);
// Exporting the User model to be used in other parts of the application