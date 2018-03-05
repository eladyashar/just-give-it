const models = require('express').Router();
const wanted = require('../../DB/wanted.js');

models.get('/', (req,res) => {
    wanted.getSpecific({}, (data) => {
        res.status(200).send(data);
    })
})

module.exports = models