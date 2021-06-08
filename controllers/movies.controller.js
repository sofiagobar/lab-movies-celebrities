const mongoose = require('mongoose');

module.exports.create = (req, res, next) => {
    res.render('/celebrities/new-celebrity')
}