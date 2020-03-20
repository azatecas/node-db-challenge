// bring in express
const express = require('express');

// bring in helmet & CORS
const helmet = require('helmet');
const CORS = require('cors');

//bring endpoints


//declare your server
const server = express();

//teach the server to read JSON

server.use(helmet());
server.use(CORS());
server.use(express.json());

//endpoint
// server.use('/api/characters', characterRouter);

server.get('/', (req, res) => {
    res.send('<h1>Server 🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️</h1>')
})

module.exports = server;


