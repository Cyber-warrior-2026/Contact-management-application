//mongoose object is used to interact with MongoDB
const mongoose = require('mongoose');
const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true,"Please enter your name"],
},
    email: {
        type: String,
        required: [true,"Please enter your email"],
        match: [/.+\@.+\..+/, "Please enter a valid email address"],
    },
    phone: {
        type: String,
        required: [true,"Please enter your phone number"],
        match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"],
    },
}, {
    timestamps: true,
});
//Cotanct is the name of the collection in the database
module.exports = mongoose.model('Contact', contactSchema);  