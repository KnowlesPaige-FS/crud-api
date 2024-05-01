import React from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import Cards from '../components/Cards';
import eventsBackground from '../../assets/img-03.jpg'; 
import eventOne from '../../assets/movie-rhs.jpg';
import eventTwo from '../../assets/movie-05-2.jpg';
import eventThree from '../../assets/movie-01-2.jpg';
import eventFour from '../../assets/movie-06-2.jpg';
import eventFive from '../../assets/movie-04-2.jpg';

function PastEvents() {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={eventsBackground} style={styles.header}>
                <Header 
                    title="Past Events"
                    desc="In the past, FlickFiction has hosted a variety of captivating events that have brought together film enthusiasts from all walks of life."
                />
            </ImageBackground>
            <View>
                <Cards
                    id="66292f7f454841088992898c"
                    title="Rocky Horror Rendezvous: Let's Do the Time Warp Again!"
                    date="April 20"
                    location="Bayfront Park, Governor's Harbour"
                    time="7:00pm - 11:00pm"
                    eventDesc="An interactive fun and cult classic magic with The Rocky Horror Picture Show."
                />

                <Cards
                    id="66292f7f4548410889928964"
                    title="Get Out: Thrills & Chills Night!"
                    date='April 12'
                    location="Cape Eleuthera, Deep Creek"
                    time="7:00pm - 11:00pm"
                    eventDesc="An evening of suspense and intrigue with Jordan Peele's Get Out."
                />  

                <Cards
                    id="66292f7f4548410889928978"
                    title="Toy Story Spectacular: A Playdate with Adventure!"
                    date="April 6"
                    location="The Cove, Gregory Town"
                    time="5:00pm - 8:00pm"
                    eventDesc="Rediscover the magic of childhood with Toy Story."
                /> 

                <Cards
                    id="66292f7f4548410889928994"
                    title="Fast & Furious Frenzy: Full Throttle Cinema!"
                    date='March 28'
                    location="Potlatch Club, Governor's Harbour"
                    time='8:00pm - 11:00pm'
                    eventDesc="Experience the rush of the Fast & Furious franchise."
                />  

                <Cards
                    id="66292f7f45484108899289a6"
                    title="Unforgettable Love: The Notebook"
                    date="March 18"
                    location="Bayfront Park, Governor's Harbour"
                    time='7:00pm - 11:00pm'
                    eventDesc="A timeless tale of romance and devotion with The Notebook."
                /> 
            </View>
            <View style={styles.linkContainer}>
                <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Events')}>
                    <Text style={styles.linkText}>Upcoming Events</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default PastEvents;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    linkContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 10,
    },
    link: {
        padding: 10,  
    },
    linkText: {
        color: '#CF8E55',
        fontVariant: 'small-caps'
    }
});
