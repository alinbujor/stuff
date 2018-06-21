// Main starting point of the app
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');

const app = express();

const mongoose = require('mongoose');

// DB Setup
mongoose.connect('mongodb://localhost:27017/auth');


// App setup 
// morgan - loggind framework / express midleware
// bodyParser  express middleware
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);


// Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);