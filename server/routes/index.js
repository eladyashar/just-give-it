const routes = require('express').Router();
const users = require('./users/users.js');
const wanted = require('./wanted/wanted.js');

// Adds pages to the api
routes.use('/users', users);
routes.use('/wanted', wanted);

module.exports = routes;