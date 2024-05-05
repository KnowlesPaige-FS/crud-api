import authHeader from './authHeader';

const getAllPrivateMovies = async () => {
    try {
        const headers = await authHeader();
        const response = await fetch('https://flickfiction-app-c9bea273c5ae.herokuapp.com/v1/app/movies', {
            method: 'GET',
            headers: headers
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();  
    } catch (error) {
        console.error("Failed to fetch movies:", error);
        throw error; 
    }
}

const movieService = {
    getAllPrivateMovies
};

export default movieService;
