const Movie = require('../models/movies');
const axios = require('axios');
require('dotenv').config();

const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getMovieById = async (req, res) => {
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
    const { title, poster_path, genre, release_date, overview } = req.body;
    const movie = new Movie({
        title,
        poster_path,
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
        const movie = await Movie.findById(id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        await movie.remove();
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
