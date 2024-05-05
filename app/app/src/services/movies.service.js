import axios from 'axios';
import authHeader from './authHeader';

const API_BASE = process.env.NODE_ENV === 'development'
    ? `http://localhost:4003/v1/app`
    : process.env.REACT_APP_BASE_URL

const API_URL = '/movies';

const getAllPrivateMovies = () => {
    return axios.get(`${API_BASE}${API_URL}`, { headers: authHeader() });
};

const getMovieById = (id) => {
    return axios.get(`${API_BASE}${API_URL}/${id}`, { headers: authHeader() });
};

const createMovie = (newMovie) => {
    return axios.post(`${API_BASE}${API_URL}`, newMovie, { headers: authHeader() });
};

const updateMovie = (id, updatedMovie) => {
    return axios.put(`${API_BASE}${API_URL}/${id}`, updatedMovie, { headers: authHeader() });
};

const deleteMovie = (id) => {
    return axios.delete(`${API_BASE}${API_URL}/${id}`, { headers: authHeader() });
};

const movieService = {
    getAllPrivateMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
};

export default movieService;


