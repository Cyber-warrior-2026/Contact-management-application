//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const getContacts = (req, res) => {
    res.status(200).json({message:"Get all contacts"});
};

//@desc Create New contact
//@route POST /api/contacts
//@access Public
const createContacts = (req, res) => {
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
    res.status(201).json({message:"Create Contact"});
};

//@desc UPDATE contact
//@route PUT /api/contacts/:id
//@access Public
const updateContacts = (req, res) => {
    res.status(201).json({message:`Update Contact with ID: ${req.params.id}`});
};

//@desc Delete contact
//@route DELETE /api/contacts
//@access Public
const deleteContacts = (req, res) => {
    res.status(201).json({message:`Delete Contact with ID: ${req.params.id}`});
};

module.exports = {
    getContacts,createContacts,deleteContacts,updateContacts};