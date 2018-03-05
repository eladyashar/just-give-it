const routes = require('express').Router();
const users = require('./users/users.js');

// Adds pages to the api
routes.use('/users', users);

module.exports = routes;