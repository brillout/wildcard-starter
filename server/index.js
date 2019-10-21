const express = require('express');
const frontend = require('./frontend');
const wildcard = require('./wildcard');

const server = express();

server.use(wildcard);
server.use(frontend);

start(server);

function start() {
  const port = process.env.PORT || 3000;
  server.listen(port);
  console.log('Server is running at http://localhost:'+port);
}
