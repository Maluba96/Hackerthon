// server.js or app.js
const express = require('express');
const path = require('path');

const app = express();

// Serve static files like HTML, CSS, and JS from the "The Resource Blog" directory
app.use(express.static(path.join(__dirname, 'The Resource Blog')));

// Example Route for API (you'll add more)
app.use('/api', require('./routes/routes'));

// Start the server
app.listen(3006, () => {
    console.log('Server is running on port 3006');
});
