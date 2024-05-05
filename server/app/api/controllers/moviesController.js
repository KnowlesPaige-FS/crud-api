const Movie = require('../models/movies');
const axios = require('axios');
require('dotenv').config();

const passport = require('passport');
const passportService = require('../services/passport');
const protectedRoute = passport.authenticate('jwt', { session: false });

const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getMovieById = async (req, res) => {
    if (!req.params.id) {
      return res.status(400).json({ message: "No ID provided" });
    }
    try {
      const movie = await Movie.findById(req.params.id);
      if (!movie) {
        return res.status(404).json({ message: 'Movie not found' });
      }
      res.json(movie);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};

const createMovie = async (req, res) => {
    const { title, poster_path, backdrop_path, genre_ids, genre, release_date, overview } = req.body;
    const movie = new Movie({
        title,
        poster_path,
        backdrop_path,
        genre_ids,
        genre,
        release_date,
        overview
    });

    try {
        const newMovie = await movie.save();
        res.status(201).json(newMovie);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updateMovie = async (req, res) => {
    const { id } = req.params;
    try {
        const movie = await Movie.findById(id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }

        movie.title = req.body.title || movie.title;
        movie.poster_path = req.body.poster_path || movie.poster_path;
        movie.backdrop_path = req.body.backdrop_path || movie.backdrop_path;
        movie.genre_ids = req.body.genre_ids || movie.genre_ids;
        movie.genre = req.body.genre || movie.genre;
        movie.release_date = req.body.release_date || movie.release_date;
        movie.overview = req.body.overview || movie.overview;

        const updatedMovie = await movie.save();
        res.json(updatedMovie);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteMovie = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Movie.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json({ message: 'Movie deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie,
};
