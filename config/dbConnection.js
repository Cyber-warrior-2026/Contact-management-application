const mongoose = require('mongoose');

const connectDB = async () => {
    // Check if the CONNECTION_STRING is set in the environment variables
    try {
        // Connect to MongoDB using the connection string from environment variables
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(`MongoDB connected: ${connect.connection.host, connect.connection.name}`);

    }catch(err){
        console.log(err);
        process.exit(1); // Exit process with failure   
    }};
    module.exports = connectDB;