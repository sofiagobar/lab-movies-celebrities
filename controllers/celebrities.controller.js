const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model')

module.exports.create = (req, res, next) => {
    res.render('celebrities/new-celebrity', {celebrities})
}