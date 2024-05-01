import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button, Modal, TextInput, Alert, ImageBackground } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import MovieHeader from '../components/MovieHeader';

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
    console.log('Movie ID received:', id); 
    const fetchMovieDetails = async () => {
      if (!id) {
        console.error('No movie ID provided');
        setError('No movie ID provided');
        setLoading(false);
        return;
      }
      const url = `https://flickfiction-app-c9bea273c5ae.herokuapp.com/v1/app/movies/${id}`;
      console.log('Fetching from URL:', url); 
      try {
        const response = await fetch(url);
        const json = await response.json();
        if (!response.ok) {
          throw new Error(json.message || 'Failed to fetch movie details');
        }
        setMovie({
          ...json,
          genre: Array.isArray(json.genre) ? json.genre.join(', ') : 'Genre not available' 
        });
        setEditData({
          title: json.title,
          overview: json.overview,
          genre:  Array.isArray(json.genre) ? json.genre.join(', ') : 'Genre not available' ,
          release_date: json.release_date
        });
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchMovieDetails();
  }, [id]);
  

  const handleEdit = async () => {
    try {
      const response = await fetch(`https://flickfiction-598c32e758ed.herokuapp.com/v1/app/movies/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editData)
      });
      const data = await response.json();
      if (response.ok) {
        setMovie(data);
        setShowModal(false);
        Alert.alert('Success', 'Movie updated successfully');
      } else {
        throw new Error(data.message || 'Failed to update the movie');
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://flickfiction-598c32e758ed.herokuapp.com/v1/app/movies/${id}`, {
        method: 'DELETE'
      });
      const data = await response.json();
      if (response.ok) {
        Alert.alert('Success', 'Movie deleted successfully');
        navigation.goBack();
      } else {
        throw new Error(data.message || 'Failed to delete the movie');
      }
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
      {/* <ImageBackground source={{uri: movie.backdrop_path}}>
        <MovieHeader  />
      </ImageBackground> */}
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
    borderRadius: 4
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

