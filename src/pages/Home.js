/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
// import { Link } from 'react-router-dom';
import Header from '../components/Header';
import homeBackground from '../images/img-01.jpg';

function Home() {
    return (
        <section style={styles.container}>
            <Header style={styles.header} 
                title='Welcome to FlickFiction'
                desc="Where every frame tells a story. Immerse yourself in the captivating world of cinema as we journey through a kaleidoscope of narratives, genres, and emotions. Join our vibrant community of film enthusiasts and let the magic of movies inspire and entertain you."
                backgroundImage={homeBackground}
            />
            <section></section>
        </section>
    );
}

export default Home;

const styles = {

}
