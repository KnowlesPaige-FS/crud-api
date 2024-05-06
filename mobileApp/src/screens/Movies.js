import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button, Modal, TextInput, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import movieService from '../services/movie.service';

const Movies = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;
  const [movie, setMovie] = useState(null);
  const [editData, setEditData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const movieData = await movieService.getMovieById(id);
        setMovie(movieData);
        setEditData({
          title: movieData.title,
          overview: movieData.overview,
          genre: movieData.genre.join(', '),
          release_date: movieData.release_date
        });
        setError(null);
      } catch (error) {
        console.error('Failed to fetch movie:', error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const handleEdit = async () => {
    try {
      const updatedMovie = await movieService.updateMovie(id, editData);
      setMovie(updatedMovie);
      setShowModal(false);
      Alert.alert('Success', 'Movie updated successfully');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const handleDelete = async () => {
    try {
      await movieService.deleteMovie(id);
      Alert.alert('Success', 'Movie deleted successfully');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  if (isLoading) {
    return <View style={styles.loadingContainer}><Text>Loading...</Text></View>;
  }

  if (!movie) {
    return <View style={styles.loadingContainer}><Text>No movie data available.</Text></View>;
  }

  return (
    <ScrollView style={styles.container}>  
       <View style={styles.movieContent}>
         <View style={styles.posterImg}>
           <View style={styles.overlay}></View>
           <Image style={styles.img} source={{ uri: movie.poster_path }} />
         </View>
         <View style={styles.desc}>
           <Text style={styles.headings}>{movie.title}</Text>
          <Text>Release Date: {movie.release_date}</Text>
           <Text>Genre: {movie.genre}</Text>
          <View style={styles.overview}>
            <Text style={styles.headings}>Overview:</Text>
            <Text>{movie.overview}</Text>
          </View>
         <View style={styles.btnContainer}>
            <Button title="Edit Movie" onPress={() => setShowModal(true)} color="#9F622D" />
            <Button title="Delete Movie" onPress={handleDelete} color="#611E17" />
           </View>
         </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              onChangeText={text => setEditData({...editData, title: text})}
              value={editData.title}
              placeholder="Title"
            />
            <TextInput
              style={styles.input}
              onChangeText={text => setEditData({...editData, overview: text})}
              value={editData.overview}
              placeholder="Overview"
              multiline
            />
            <TextInput
              style={styles.input}
              onChangeText={text => setEditData({...editData, genre: text})}
              value={editData.genre}
              placeholder="Genre"
            />
            <TextInput
              style={styles.input}
              onChangeText={text => setEditData({...editData, release_date: text})}
              value={editData.release_date}
              placeholder="Release Date"
            />
            <View style={styles.buttonContainer}>
              <Button
                title="Save Changes"
                onPress={handleEdit}
                color="#9F622D"
              />
              <Button
                title="Cancel"
                onPress={() => setShowModal(false)}
                color="#611E17"
              />
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

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
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop:  60,
    backgroundColor: 'rgba(66, 69, 48, 0.50)'
  },
  posterImg: {
    width: '75%',
    height: 550,
    position: 'relative',
    marginBottom: 20
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
    borderRadius: 4,
  },
  desc: {
    width: '70%',
  },
  headings: {
    marginBottom: 4,
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 15
  },
  overview: {
    marginTop: 20
  },
  btnContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250, 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
});

export default Movies;
