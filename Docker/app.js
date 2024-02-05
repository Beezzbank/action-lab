// Import the express module
const express = require('express');

// Create an instance of the express application
const app = express();

// Define a route that responds with "Hello, World!" when accessed
app.get('/', (req, res) => {
  res.send('Hello, Ronnasit!');
});

// Set the application to listen on port 3000
const PORT = 80;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});