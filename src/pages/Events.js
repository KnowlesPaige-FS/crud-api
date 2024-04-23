/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
// import { Link } from 'react-router-dom';
import Header from '../components/Header';
import eventsBackground from '../images/img-03.jpg';

function Events() {
    return (
        <section style={styles.container}>
            <Header style={styles.header}
                title='Events'
                desc="Discover the pulse of the cinematic world with FlickFiction's curated events. Below, you'll find a dynamic list of upcoming screenings, film festivals, and special events that promise to ignite your passion for storytelling on the silver screen. Join us as we delve into the magic of cinema together and share these unforgettable experiences with fellow film enthusiasts."
                backgroundImage={eventsBackground}
            />
            <section></section>
        </section>
    );
}

export default Events;

const styles = {
    header: {

    }
}
