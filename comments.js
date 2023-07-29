// Create web server

// Import module
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import local file
const db = require('./db');
const commentRouter = require('./routes/comment-router');

// Create app
const app = express();
const apiPort = 8080;

// Use module
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

// Use local file
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use('/api', commentRouter);

// Listen port
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));