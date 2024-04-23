import React from 'react';
import Header from '../components/Header';
import aboutBackground from '../images/img-02.jpg';

function About() {
    return (
        <section style={styles.container}>
            <Header style={styles.header}
                title='About Us'
                desc="At FlickFiction, we're passionate about the art of storytelling through film. Founded by a team of cinephiles with a shared love for the magic of movies, our platform is dedicated to celebrating the diverse and captivating narratives that cinema has to offer."
                backgroundImage={aboutBackground}
            />
            <section style={styles.content}>
                <h3>Exploring Cinematic Worlds</h3>
                <p>To us, movies are more than just entertainment; they're portals to different worlds, perspectives, and emotions. At FlickFiction, we believe in the power of storytelling to inspire, provoke thought, and evoke profound emotional responses. Whether it's a gripping thriller, a heartwarming romance, an epic adventure, or a thought-provoking drama, we're here to explore the vast landscape of cinematic storytelling.</p>
            </section>
            <section style={styles.content}>
                <h3>Community of Film Enthusiasts</h3>
                <p>At FlickFiction, we believe in the power of community. We invite film enthusiasts from all walks of life to join us in celebrating the magic of cinema. Whether you're a seasoned cinephile or a casual moviegoer, there's a place for you here. Share your thoughts, engage in discussions, and connect with fellow film lovers who share your passion for storytelling through film.</p>
            </section> 
            <section style={styles.content}>
                <h3>Stay Connected</h3>
                <p>Join us on our journey as we explore the enchanting world of cinema. Follow us on social media, subscribe to our newsletter, and stay updated on the latest reviews, articles, and features. Together, let's embark on a cinematic adventure filled with wonder, excitement, and endless possibilities.</p>
                <p>Thank you for visiting FlickFiction. Let the storytelling begin!</p>
            </section>
        </section>
    );
}

export default About;

const styles = {
    header: {

    },
    content: {
        margin: '1% 2%',
        padding: '1% 0',
        width: '70%',
    },

}