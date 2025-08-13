const express = require('express');
const dotenv = require('dotenv');
const errorHandler = require('./middlewares/errorHandler');
const connectDB = require('./config/dbConnection.js'); 
dotenv.config();
connectDB();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());//middleware to parse JSON bodies
app.use("/api/contacts", require('./routes/contactRoutes'));
app.use(errorHandler); // Custom error handler middleware
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});