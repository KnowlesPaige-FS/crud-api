import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import Header from '../components/Header';
import aboutBackground from '../../assets/img-02.jpg'; 

function About() {
    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={aboutBackground} style={styles.header}>
                <Header
                    title='About Us'
                    desc="At FlickFiction, we're passionate about the art of storytelling through film. Founded by a team of cinephiles with a shared love for the magic of movies, our platform is dedicated to celebrating the diverse and captivating narratives that cinema has to offer."
                />
            </ImageBackground>
            <View style={styles.content}>
                <Text style={styles.title}>Exploring Cinematic Worlds</Text>
                <Text>To us, movies are more than just entertainment; they're portals to different worlds, perspectives, and emotions. At FlickFiction, we believe in the power of storytelling to inspire, provoke thought, and evoke profound emotional responses. Whether it's a gripping thriller, a heartwarming romance, an epic adventure, or a thought-provoking drama, we're here to explore the vast landscape of cinematic storytelling.</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Community of Film Enthusiasts</Text>
                <Text>At FlickFiction, we believe in the power of community. We invite film enthusiasts from all walks of life to join us in celebrating the magic of cinema. Whether you're a seasoned cinephile or a casual moviegoer, there's a place for you here. Share your thoughts, engage in discussions, and connect with fellow film lovers who share your passion for storytelling through film.</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Stay Connected</Text>
                <Text>Join us on our journey as we explore the enchanting world of cinema. Follow us on social media, subscribe to our newsletter, and stay updated on the latest reviews, articles, and features. Together, let's embark on a cinematic adventure filled with wonder, excitement, and endless possibilities.</Text>
                <Text>Thank you for visiting FlickFiction. Let the storytelling begin!</Text>
            </View>
        </ScrollView>
    );
}

export default About;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    header: {
        height: 200, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        margin: 10,
        padding: 10,
        width: '90%',
    },
    title: {
        fontSize: 18, 
        fontWeight: 'bold',
        marginBottom: 5 
    },
});