const express = require('express');

const server = express();
const buildPath = __dirname+'/../dist/';
server.use(express.static(buildPath))

module.exports = server;
