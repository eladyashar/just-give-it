const models = require('express').Router();
const users = require('../../DB/user.js');

models.post('login', (req, res) => {

});

models.post('signup', (req, res) => {
    users.addNewObject({username: req.body.username, password: req.body.password}, (data) => {
        try {
            res.status(200).send(data);
        } catch (err) {
            res.status(500).send(err);
        }
    })
});

module.exports = models;