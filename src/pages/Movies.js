/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import axios from '../axios.config'; 
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import background from '../images/img-01.jpg';

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
      <Header
        title={movie.title}
        desc={movie.overview}
        backgroundImage={background}
      />
      <section style={styles.movieContent}>
        <div style={styles.posterImg}>
          <div style={styles.overlay}></div>
          <img style={styles.img} src={movie.poster_path} alt='Photo placeholder' />
        </div>
        <div></div>
      </section>
    </section>
  );
}

export default Movies;
const styles = {
        movieContent: {
            background: 'rgba(66, 69, 48, .60)'
        },
        posterImg: {
            width: '350px',
            height: '550px',
            position: 'relative'
        },
        overlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(56, 50, 48, 0.7)',
        },
        img: {
            width: '100%',
            height: '100%',
            boxShadow: '0px 0px 10px rgba(56, 50, 48, 0.6)'
        },
    };