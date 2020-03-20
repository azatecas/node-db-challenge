// bring in express
const express = require('express');

// bring in helmet & CORS
const helmet = require('helmet');
const CORS = require('cors');

//bring endpoints
const resRouter = require('../routers/resourcesRouter.js');
const projectRouter = require('../routers/projectRouter.js');

//declare your server
const server = express();

//teach the server to read JSON

server.use(helmet());
server.use(CORS());
server.use(express.json());


//endpoint
server.use('/api/projects', projectRouter);
server.use('/api/resources', resRouter);

//base endpoint to check if running
server.get('/', (req, res) => {
    res.send('<h1>Server 🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️</h1>')
})

module.exports = server;


