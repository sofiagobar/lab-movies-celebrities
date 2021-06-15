const mongoose = require('mongoose');
const Movie = require('../models/movie.model');

module.exports.create = (req, res, next) => {
    res.render('movies/new-movie')
};

module.exports.doCreate = (req, res, next) => {
    Movie.create({
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot,
        cast: [req.body.cast]
    })
};

