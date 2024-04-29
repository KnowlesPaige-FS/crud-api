import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import axios from '../axios.config'; 
import { useRoute } from '@react-navigation/native';
import MovieHeader from '../components/MovieHeader';

const Movies = () => {
  const route = useRoute();
  const { id } = route.params;
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
    return <View style={styles.loadingContainer}><Text>Loading...</Text></View>;
  }

  return (
    <ScrollView style={styles.container}>
      <MovieHeader backgroundImage={{ uri: movie.backdrop_path }} />
      <View style={styles.movieContent}>
        <View style={styles.posterImg}>
          <View style={styles.overlay}></View>
          <Image style={styles.img} source={{ uri: movie.poster_path }} />
        </View>
        <View style={styles.desc}>
            <Text style={styles.headings}>{movie.title}</Text>
            <Text>Release Date: {movie.release_date}</Text>
            <View style={styles.overview}>
                <Text style={styles.headings}>Overview:</Text>
                <Text>{movie.overview}</Text>
                <Text>{movie.genre_id}</Text>
            </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Movies;

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
    },
    movieContent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'rgba(66, 69, 48, 0.50)'
    },
    posterImg: {
        width: '25%',
        height: 550,
        position: 'relative',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(56, 50, 48, 0.7)',
        borderRadius: 4
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 4
    },
    desc: {
        width: '40%',
    },
    headings: {
        marginBottom: 4,
        fontWeight: 'bold',
        fontSize: 18
    },
    overview: {
        margin: '2% 0',
    }
});
