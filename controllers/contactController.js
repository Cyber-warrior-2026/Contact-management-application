const asyncHandler = require('express-async-handler');

const Contact = require('../models/contactModel');
//@desc Get all contacts
//@route GET /api/contacts
//@access Private
const getContacts = asyncHandler(async(req, res) => {
    const contacts = await Contact.find();
    //yaha par ham database se contacts ko fetch kar rahe hain
    res.status(200).json(contacts);
});

//@desc Get single contact
//@route GET /api/contacts/:id  
//@access Private
const getContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    //yaha par ham database se contact ko fetch kar rahe hain
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
}
);

//@desc Create New contact
//@route POST /api/contacts
//@access Private
const createContacts = asyncHandler(async(req, res) => {
    console.log("the body is:",req.body);
    //yaha par ham fields ko destructure kar sakte hain
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        // 400 status code means Bad Request
        // yaha par ham error throw kar sakte hain
        //alternatively, we can use a custom error handler
        throw new Error("Please fill all the fields");
    }
    const contact = await Contact.create({
        name,
        email,
        phone
    });
    res.status(201).json(contact);
    //201 status code means Created
});

//@desc UPDATE contact
//@route PUT /api/contacts/:id
//@access Private
const updateContacts = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    //yaha par ham database se contact ko fetch kar rahe hain
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
        new: true, // This option returns the modified document rather than the original
    }
);
    res.status(201).json(updatedContact);
});

//@desc Delete contact
//@route DELETE /api/contacts
//@access Private  
const deleteContacts = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    //yaha par ham database se contact ko fetch kar rahe hain
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.findByIdAndDelete(req.params.id);
    res.status(204).json(contact);
});

module.exports = {
    getContacts, getContact  ,createContacts,deleteContacts,updateContacts
} ;