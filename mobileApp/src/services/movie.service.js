import axios from 'axios';
import authHeader from './authHeader'

const getAllPrivateMovies = async () => {
    const headers = await authHeader()
    return axios.get(`https://flickfiction-app-c9bea273c5ae.herokuapp.com/v1/app/movies`, { headers })
}

const movieService = {
    getAllPrivateMovies
}

export default movieService;