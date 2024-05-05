// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; 
// import movieService from '../services/movies.service';
// import { useParams, useNavigate } from 'react-router-dom';
// import MovieHeader from '../components/MovieHeader';
// import MovieModal from '../components/MovieModal';

// const Movies = () => {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       try {
//         const response = await movieService.getMovieById(id);
//         setMovie(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
  
//     fetchMovieDetails();
//   }, [id]);

//   const navigate = useNavigate(); 

//   const handleDelete = async () => {
//     try {
//       await axios.delete(`/movies/${id}`);
//       navigate('/', { replace: true });
//     } catch (error) {
//       console.error('Failed to delete movie', error);
//     }
//   };

//   const handleUpdate = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   const handleUpdateMovie = async (updatedMovie) => {
//     try {
//       await axios.put(`/movies/${id}`, updatedMovie);
//       setShowModal(false);
//       setMovie(updatedMovie);
//     } catch (error) {
//       console.error('Failed to update movie', error);
//     }
//   };

//   if (!movie) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <section style={styles.container}>
//       <MovieHeader backgroundImage={movie.backdrop_path} />
//       <section style={styles.movieContent} className="d-flex flex-row justify-content-around align-items-center">
//         <div style={styles.posterImg}>
//           <div style={styles.overlay}></div>
//           <img style={styles.img} src={movie.poster_path} alt='Movie Poster' />
//         </div>
//         <div style={styles.desc}>
//           <div style={styles.headings}>
//             <h2>{movie.title}</h2> 
//             <h5>Release Date: {movie.release_date}</h5>  
//             <h5>Genre: {movie.genre[0]}</h5>
//           </div>
//           <div style={styles.overview}>
//             <h3>Overview:</h3>
//             <p style={styles.p}>{movie.overview}</p>  
//           </div>
//           <div style={styles.btns}>
//             <button onClick={handleUpdate} style={styles.updateBtn}>Update Movie</button>
//             <button onClick={handleDelete} style={styles.deleteBtn}>Delete Movie</button>
//           </div>
//         </div>
//       </section>
//       <MovieModal movie={movie} onUpdate={handleUpdateMovie} onClose={handleCloseModal} showModal={showModal} />
//     </section>
//   );
// }

// export default Movies;

import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import movieService from '../services/movies.service';
import { useParams, useNavigate } from 'react-router-dom';
import MovieHeader from '../components/MovieHeader';
import MovieModal from '../components/MovieModal';

const Movies = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await movieService.getMovieById(id); 
        setMovie(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchMovieDetails();
  }, [id]);

  const navigate = useNavigate(); 

  const handleDelete = async () => {
    try {
      await axios.delete(`/movies/${id}`);
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Failed to delete movie', error);
    }
  };

  const handleUpdate = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleUpdateMovie = async (updatedMovie) => {
    try {
      await axios.put(`/movies/${id}`, updatedMovie);
      setShowModal(false);
      setMovie(updatedMovie);
    } catch (error) {
      console.error('Failed to update movie', error);
    }
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <section style={styles.container}>
      <MovieHeader backgroundImage={movie.backdrop_path} />
      <section style={styles.movieContent} className="d-flex flex-row justify-content-around align-items-center">
        <div style={styles.posterImg}>
          <div style={styles.overlay}></div>
          <img style={styles.img} src={movie.poster_path} alt='Movie Poster' />
        </div>
        <div style={styles.desc}>
          <div style={styles.headings}>
            <h2>{movie.title}</h2> 
            <h5>Release Date: {movie.release_date}</h5>  
            <h5>Genre: {movie.genre[0]}</h5>
          </div>
          <div style={styles.overview}>
            <h3>Overview:</h3>
            <p style={styles.p}>{movie.overview}</p>  
          </div>
          <div style={styles.btns}>
            <button onClick={handleUpdate} style={styles.updateBtn}>Update Movie</button>
            <button onClick={handleDelete} style={styles.deleteBtn}>Delete Movie</button>
          </div>
        </div>
      </section>
      <MovieModal movie={movie} onUpdate={handleUpdateMovie} onClose={handleCloseModal} showModal={showModal} />
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
            margin: '2% 0'
        },
        btns: { 
          margin: '8% 0'
        },
        updateBtn: {
          border: 'none',
          background: 'transparent',
          fontVariant: 'small-caps',
          fontWeight: 'bold',
          color: '#9F622D'       
        },
        deleteBtn: {
          border: 'none',
          background: 'transparent',
          fontVariant: 'small-caps',
          fontWeight: 'bold',
          color: '#611E17'
        }
    };
