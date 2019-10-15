const assert = require('@brillout/reassert');
const express = require('express');
const {getApiResponse} = require('wildcard-api');
require('./api');

const app = express();

app.use(express.json());

app.use(express.static('../frontend'))

app.all('/wildcard/*' , async (req, res) => {
  assert.internal(req.url);
  assert.internal(req.method);
  assert.internal('body' in req);
  assert.internal(req.method!=='POST' || req.body.constructor===Array);
  assert.internal(req.headers.constructor===Object);

  const requestProps = {
    url: req.url,
    method: req.method,
    body: req.body,
    headers: req.headers,
  };

  const responseProps = await getApiResponse(requestProps);

  res.status(responseProps.statusCode);
  res.type(responseProps.contentType);
  res.send(responseProps.body);
});

// Serve our frontend
app.use(express.static('client/dist', {extensions: ['html']}));

app.listen(3000);

console.log('Server is running, go to http://localhost:3000')
