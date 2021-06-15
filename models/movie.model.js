const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: String, 
    genre: String,
    plot: String,
    cast: [String],
});

const Movie = mongoose.model('Movie', schema);

module.exports = Movie;