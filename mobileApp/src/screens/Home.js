import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import Cards from '../components/Cards';
import homeBackground from '../../assets/img-01.jpg';
import eventOne from '../../assets/movie-lotr.jpg';
import eventTwo from '../../assets/movie-bol.jpg';
import eventThree from '../../assets/movie-casablanca.jpeg';

function Home() {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={homeBackground} style={styles.header}>
                <Header 
                    title='Welcome to FlickFiction'
                    desc="Where every frame tells a story. Immerse yourself in the captivating world of cinema as we journey through a kaleidoscope of narratives, genres, and emotions."
                />
            </ImageBackground>
            
            <View style={styles.cardContainer}>
                <Cards
                    id="66292f7f4548410889928950"
                    title="One Ring to Rule Them All: An Epic Journey Begins!"
                    date="May 1"
                    location="Bayfront Park, Governor's Harbour"
                    time="7:00pm - 11:00pm"
                    eventDesc="Embark on an unforgettable cinematic adventure..."
                />

                <Cards
                    id="66292f7f4548410889928948"
                    title="Fiesta de la Vida: A Colorful Journey with 'The Book of Life'!"
                    date="May 5"
                    location="La Bougainvillea, Palmetto Point"
                    time="6:00pm - 11:00pm"
                    eventDesc="Join us for 'Fiesta de la Vida,' a vibrant celebration..."
                />  

                <Cards
                    id="66292f7f4548410889928934"
                    title="Casablanca Nights: A Timeless Romance Under the Stars!"
                    date="May 20"
                    location="The Cove, Gregory Town"
                    time="5:00pm - 8:00pm"
                    eventDesc="Step into the golden age of Hollywood with 'Casablanca Nights'..."
                /> 
            </View>
            <View style={styles.about}>
                <Text style={styles.h2}>About FlickFiction</Text>
                <Text style={styles.p}>At FlickFiction, we're passionate about the art of storytelling through film. Founded by a team of cinephiles with a shared love for the magic of movies, our platform is dedicated to celebrating the diverse and captivating narratives that cinema has to offer.</Text>
                <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('About')}>
                    <Text>Learn More</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer: {
        padding: 10,
    },
    about: {
        margin: '20 0',
        backgroundColor: 'rgba(191, 174, 164, 0.5)',
        padding: 20,
        alignItems: 'center',
    },
    h2: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    p: {
        textAlign: 'center',
        marginBottom: 10,
    },
    link: {
        padding: 10,
    }
});
