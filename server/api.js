const {endpoints} = require('wildcard-api');

endpoints.hello = async function(name) {
  return 'Welcome '+name;
};
