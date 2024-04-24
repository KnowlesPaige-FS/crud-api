/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Header from '../components/Header';
import Cards from '../components/Cards';
import eventsBackground from '../images/img-03.jpg';
import { Link } from 'react-router-dom';
import eventOne from '../images/movie-lotr.jpg';
import eventTwo from '../images/movie-bol.jpg';
import eventThree from '../images/movie-casablanca.jpeg';

function Events() {
    return (
        <section style={styles.container}>
            <Header style={styles.header}
                title='Events'
                desc="Discover the pulse of the cinematic world with FlickFiction's curated events. Below, you'll find a dynamic list of upcoming screenings, film festivals, and special events that promise to ignite your passion for storytelling on the silver screen. Join us as we delve into the magic of cinema together and share these unforgettable experiences with fellow film enthusiasts."
                backgroundImage={eventsBackground}
            />
            <section>
                <Cards 
                    img={eventOne}
                    date='May 1'
                    title='One Ring to Rule Them All: An Epic Journey Begins!'
                    location="Bayfront Park, Governor's Harbour"
                    time='7:00pm - 11:00pm'
                    eventDesc="Embark on an unforgettable cinematic adventure as we journey to Middle-earth with 'The Lord of the Rings: The Fellowship of the Ring.' Join us for an immersive viewing experience filled with breathtaking landscapes, heroic quests, and unforgettable characters. Let the magic of Tolkien's epic tale sweep you away on a quest to destroy the One Ring and save Middle-earth from "
                    linkTo='/home'
                />
               <Cards 
                    img={eventTwo}
                    date='May 5'
                    title="Fiesta de la Vida: A Colorful Journey with 'The Book of Life'!"
                    location="La Bougainvillea, Palmetto Point"
                    time='6:00pm - 11:00pm'
                    eventDesc='Join us for "Fiesta de la Vida," a vibrant celebration inspired by the enchanting world of "The Book of Life"! Immerse yourself in the colorful landscapes of Mexican folklore as we follow Manolo on his extraordinary journey filled with love, music, and adventure. Get ready for an unforgettable cinematic experience that will ignite your imagination and warm your heart.'
                    linkTo='/home'
                />
                <Cards 
                    img={eventThree}
                    date='May 20'
                    title="Casablanca Nights: A Timeless Romance Under the Stars!"
                    location="The Cove, Gregory Town"
                    time='5:00pm - 8:00pm'
                    eventDesc='Step into the golden age of Hollywood with "Casablanca Nights," where romance and intrigue intertwine in the classic tale of love and sacrifice. Join us under the twinkling stars for an unforgettable cinematic experience, as we journey to wartime Casablanca and witness the timeless chemistry between Humphrey Bogart and Ingrid Bergman. Let the unforgettable dialogue and iconic moments of this beloved film transport you to a world where love conquers all.'
                    linkTo='/home'
                />  
            </section>
            <section>
                <Link to='/pastevents' style={styles.link}>Previous Events</Link>
            </section>
        </section>
    );
}

export default Events;

const styles = {
    header: {

    },
    link: {
        textDecoration: 'none',
        fontVariant: 'small-caps',
        margin: '2%'
    }  
}
