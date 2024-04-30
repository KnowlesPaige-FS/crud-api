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
                    img={eventOne}
                    date='May 1'
                    title='One Ring to Rule Them All: An Epic Journey Begins!'
                    location="Bayfront Park, Governor's Harbour"
                    time='7:00pm - 11:00pm'
                    eventDesc="Embark on an unforgettable cinematic adventure..."
                    onPress={() => navigation.navigate('Movies', { id: '66292f7f4548410889928950' })}
                />
                <Cards 
                    img={eventTwo}
                    date='May 5'
                    title="Fiesta de la Vida: A Colorful Journey with 'The Book of Life'!"
                    location="La Bougainvillea, Palmetto Point"
                    time='6:00pm - 11:00pm'
                    eventDesc='Join us for "Fiesta de la Vida," a vibrant celebration...'
                    onPress={() => navigation.navigate('Movies', { id: '66292f7f4548410889928948' })}
                />
                <Cards 
                    img={eventThree}
                    date='May 20'
                    title="Casablanca Nights: A Timeless Romance Under the Stars!"
                    location="The Cove, Gregory Town"
                    time='5:00pm - 8:00pm'
                    eventDesc='Step into the golden age of Hollywood with "Casablanca Nights"...'
                    onPress={() => navigation.navigate('Movies', { id: '66292f7f4548410889928934' })}
                />  
            </View>
            <TouchableOpacity 
                style={styles.link} 
                onPress={() => navigation.navigate('PastEvents')}>
                <Text>Previous Events</Text>
            </TouchableOpacity>
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
    link: {
        padding: 10,
        alignItems: 'center',
    },
    cardImage: {}
});
