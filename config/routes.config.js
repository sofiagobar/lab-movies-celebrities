const express = require('express');
const common = require('../controllers/common.controller')
const celebrities = require('../controllers/celebrities.controller');
const movies = require('../controllers/movies.controller')

const router = express.Router();

router.get('/', common.home)
router.get('/celebrities/new-celebrity', celebrities.create)
router.post('/celebrities', celebrities.doCreate);
router.get('/celebrities', celebrities.list)

router.get('/movies/new', movies.create)
router.post('/movies', movies.doCreate)


module.exports = router;
