const {endpoints} = require('wildcard-api');

endpoints.getTodos = async function(name) {
  return [1,'a',23];
};
