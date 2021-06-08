const express = require('express');
const celebrities = require('../controllers/celebrities.controller');
const movies = require('../controllers/movies.controller')

const router = express.Router();

router.get('/celebrities/new', celebrities.create)
router.post('/celebrities', celebrities.doCreate)

module.exports = router;
