const express = require('express');
const router = express.Router();
const movieController = require('../controllers/moviesController');
const passport = require('passport');
const passportService = require('../services/passport');
const protectedRoute = passport.authenticate('jwt', { session: false });

router.get('/', protectedRoute, movieController.getAllMovies);
router.get('/:id', movieController.getMovieById);
router.post('/', movieController.createMovie);
router.put('/:id', movieController.updateMovie);
router.delete('/:id', movieController.deleteMovie);

module.exports = router;
