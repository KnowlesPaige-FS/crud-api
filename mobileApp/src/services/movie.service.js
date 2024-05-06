import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE = process.env.NODE_ENV === 'development'
    ? 'http://localhost:4003/v1/app'
    : 'https://flickfiction-app-c9bea273c5ae.herokuapp.com/v1/app';

const API_URL = '/movies';

const authHeader = async () => {
    const user = await AsyncStorage.getItem('user');
    if (user && JSON.parse(user).token) {
        return { Authorization: JSON.parse(user).token };
    } else {
        return {};
    }
};

const fetchWithAuth = async (url, options) => {
    try {
        const headers = await authHeader();
        const response = await fetch(url, { ...options, headers });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Request failed:", error);
        throw error;
    }
};

const getAllPrivateMovies = () => {
    return fetchWithAuth(`${API_BASE}${API_URL}`, {
        method: 'GET'
    });
};

const getMovieById = (id) => {
    return fetchWithAuth(`${API_BASE}${API_URL}/${id}`, {
        method: 'GET'
    });
};

const createMovie = (newMovie) => {
    return fetchWithAuth(`${API_BASE}${API_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMovie)
    });
};

const updateMovie = (id, updatedMovie) => {
    return fetchWithAuth(`${API_BASE}${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedMovie)
    });
};

const deleteMovie = (id) => {
    return fetchWithAuth(`${API_BASE}${API_URL}/${id}`, {
        method: 'DELETE'
    });
};

const movieService = {
    getAllPrivateMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
};

export default movieService;
