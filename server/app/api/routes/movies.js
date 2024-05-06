const express = require('express');
const router = express.Router();
const movieController = require('../controllers/moviesController');
const passport = require('passport');
const passportService = require('../services/passport');
const protectedRoute = passport.authenticate('jwt', { session: false });

router.get('/', protectedRoute, movieController.getAllMovies);
router.get('/:id', protectedRoute, movieController.getMovieById);
router.post('/', protectedRoute, movieController.createMovie);
router.put('/:id', protectedRoute, movieController.updateMovie);
router.delete('/:id', protectedRoute, movieController.deleteMovie);

module.exports = router;
