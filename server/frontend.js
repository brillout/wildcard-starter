const express = require('express');

const server = express();
const buildPath = __dirname+'/../frontend/dist/';
server.use(express.static(buildPath))

module.exports = server;
