/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Cards from '../components/Cards';
import homeBackground from '../images/img-01.jpg';
import eventOne from '../images/movie-lotr.jpg';
import eventTwo from '../images/movie-bol.jpg';
import eventThree from '../images/movie-casablanca.jpeg';


function Home() {
    return (
        <section style={styles.container}>
            <Header style={styles.header} 
                title='Welcome to FlickFiction'
                desc="Where every frame tells a story. Immerse yourself in the captivating world of cinema as we journey through a kaleidoscope of narratives, genres, and emotions. Join our vibrant community of film enthusiasts and let the magic of movies inspire and entertain you."
                backgroundImage={homeBackground}
            />
            <section>
                <Cards 
                    img={eventOne}
                    date='May 1'
                    title='One Ring to Rule Them All: An Epic Journey Begins!'
                    location="Bayfront Park, Governor's Harbour"
                    time='7:00pm - 11:00pm'
                    eventDesc="Embark on an unforgettable cinematic adventure as we journey to Middle-earth with 'The Lord of the Rings: The Fellowship of the Ring.' Join us for an immersive viewing experience filled with breathtaking landscapes, heroic quests, and unforgettable characters. Let the magic of Tolkien's epic tale sweep you away on a quest to destroy the One Ring and save Middle-earth from "
                    linkTo='/movies/66292f7f4548410889928950'
                />
               <Cards 
                    img={eventTwo}
                    date='May 5'
                    title="Fiesta de la Vida: A Colorful Journey with 'The Book of Life'!"
                    location="La Bougainvillea, Palmetto Point"
                    time='6:00pm - 11:00pm'
                    eventDesc='Join us for "Fiesta de la Vida," a vibrant celebration inspired by the enchanting world of "The Book of Life"! Immerse yourself in the colorful landscapes of Mexican folklore as we follow Manolo on his extraordinary journey filled with love, music, and adventure. Get ready for an unforgettable cinematic experience that will ignite your imagination and warm your heart.'
                    linkTo='/movies/66292f7f4548410889928948'
                />
                <Cards 
                    img={eventThree}
                    date='May 20'
                    title="Casablanca Nights: A Timeless Romance Under the Stars!"
                    location="The Cove, Gregory Town"
                    time='5:00pm - 8:00pm'
                    eventDesc='Step into the golden age of Hollywood with "Casablanca Nights," where romance and intrigue intertwine in the classic tale of love and sacrifice. Join us under the twinkling stars for an unforgettable cinematic experience, as we journey to wartime Casablanca and witness the timeless chemistry between Humphrey Bogart and Ingrid Bergman. Let the unforgettable dialogue and iconic moments of this beloved film transport you to a world where love conquers all.'
                    linkTo='/movies/66292f7f4548410889928934'
                /> 
            </section>
            <section style={styles.about}>
                <div className="d-flex flex-column justify-content-between align-items-center" style={styles.aboutContent}>
                    <h2 style={styles.h2}>About FlickFiction</h2>
                    <p style={styles.p}>At FlickFiction, we're passionate about the art of storytelling through film. Founded by a team of cinephiles with a shared love for the magic of movies, our platform is dedicated to celebrating the diverse and captivating narratives that cinema has to offer.</p>
                    <Link to='/about' style={styles.link}>Learn More</Link>
                </div>
            </section>
        </section>
    );
}

export default Home;

const styles = {
    about: {
        margin: '0 auto',
        textAlign: 'center',
        // background: 'rgba(66, 69, 48, .50)',
        background: 'rgba(191, 174, 164, 0.5)',
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'

    },
    aboutContent: {
        width: '55%',
        margin: '0 auto',
    },
    h2: {
        margin: '1.5% 0',
    },
    p: {
        width: '70%'
    },
    link: {
        textDecoration: 'none',
        fontVariant: 'small-caps',
        margin: '2%'
    } 
}
