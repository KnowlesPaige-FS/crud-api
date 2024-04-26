import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { useParams } from 'react-router-dom';
import MovieHeader from '../components/MovieHeader';

const Movies = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`/movies/${id}`);
        const data = response.data;
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <section style={styles.container}>
      <MovieHeader
        backgroundImage={movie.backdrop_path}
      />
      <section style={styles.movieContent} className="d-flex flex-row justify-content-around align-items-center">
        <div style={styles.posterImg}>
          <div style={styles.overlay}></div>
          <img style={styles.img} src={movie.poster_path} alt='Movie Poster' />
        </div>
        <div style={styles.desc}>
            <div style={styles.headings}>
              <h2>{movie.title}</h2>
              <h5>{movie.release_date}</h5>
            </div>
            
            <div style={styles.overview}>
                <h3>Overview:</h3>
                <p style={styles.p}>{movie.overview}</p>  
                <h5>{movie.genre}</h5>
            </div>
            
        </div>
      </section>
    </section>
  );
}

export default Movies;
const styles = {
        movieContent: {
            padding: '2% 0',
            background: 'rgba(66, 69, 48, .50)',
            textAlign: 'center'
        },
        posterImg: {
            // width: '350px',
            width: '25%',
            height: '550px',
            position: 'relative',
            margin: '0 5%',

        },
        overlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(56, 50, 48, 0.7)',
            borderRadius: '4%'
        },
        img: {
            width: '100%',
            height: '100%',
            boxShadow: '0px 0px 10px rgba(56, 50, 48, 0.6)',
            borderRadius: '4%'
        },
        desc: {
            margin: '0 5%',
            width: '40%',
        },
        headings: {
            margin: '0 0 4%'
        },
        overview: {
            marign: '2% 0'
        }
    };