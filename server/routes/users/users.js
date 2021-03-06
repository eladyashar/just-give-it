const models = require('express').Router();
const users = require('../../DB/user.js');
// const cookie = require('cookie');

models.post('/login', (req, res) => {
    users.getSpecific({username: req.body.username, password: req.body.password}, (data)=> {
        try {
            req.session.username = req.body.username;
            res.status(200).send(data);
        } catch(err) {
            res.status(400).send(err);
        }
    })

});

models.post('/signup', (req, res) => {
    users.addNewObject(req.body, (data) => {
        try {
            res.status(200).send(data);
        } catch (err) {
            res.status(500).send(err);
        }
    })
});

models.put('/:username', (req, res) => {
    users.updateObject({username: req.params.username}, req.body, (data) => {
        try {
            res.status(200).send(data);
        } catch (err) {
            res.status(400).send(err)
        }
    })
})

module.exports = models;