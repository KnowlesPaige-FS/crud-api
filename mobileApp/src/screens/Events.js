import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import Cards from '../components/Cards';
import eventsBackground from '../../assets/img-03.jpg';
import eventOne from '../../assets/movie-lotr.jpg';
import eventTwo from '../../assets/movie-bol.jpg';
import eventThree from '../../assets/movie-casablanca.jpeg';

function Events() {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={eventsBackground} style={styles.header}>
                <Header 
                    title='Events'
                    desc="Discover the pulse of the cinematic world with FlickFiction's curated events."
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
            <View style={styles.linkContainer}>
                <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('PastEvents')}>
                    <Text style={styles.linkText}>Previous Events</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default Events;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center' 
    },
    cardContainer: {
        padding: 10,
    },
    linkContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 10,
    },
    link: {
        padding: 10,
    },
    linkText: {
        color: '#CF8E55',
        fontVariant: 'small-caps'
    },
    cardImage: {}
});
