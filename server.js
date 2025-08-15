const express = require('express');
const dotenv = require('dotenv');
const setupSwagger = require('./swagger'); 
const errorHandler = require('./middlewares/errorHandler');
const connectDB = require('./config/dbConnection.js'); 
const cors = require('cors');
dotenv.config();
connectDB();
const app = express();
const port = process.env.PORT || 5000;
setupSwagger(app);
app.use(cors({origin: '*'})); // Enable CORS for all origins 
app.use(express.json());//middleware to parse JSON bodies
app.use("/api/contacts", require('./routes/contactRoutes'));// Registering contact routes
app.use("/api/users", require('./routes/userRoutes'));// Registering contact routes
app.use(errorHandler); // Custom error handler middleware

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// Root route to check if the server is running
// This is useful for testing the server setup
app.get('/', (req, res) => {
  res.send('API is running! Visit /api-docs for Swagger documentation.');
});