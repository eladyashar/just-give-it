const routes = require('express').Router();
const some = require('./users/users.js');

// Adds pages to the api
routes.use('/users', some);

module.exports = routes;