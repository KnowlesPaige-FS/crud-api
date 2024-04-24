/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Cards from '../components/Cards';
import eventsBackground from '../images/img-03.jpg';
import eventOne from '../images/movie-rhs.jpg';


function PastEvents() {
    return (
        <section style={styles.container}>
            <Header style={styles.header}
                title='Past Events'
                desc="In the past, FlickFiction has hosted a variety of captivating events that have brought together film enthusiasts from all walks of life. From intimate screenings of indie gems to grand celebrations of cinematic classics, each event has offered a unique opportunity to immerse ourselves in the magic of storytelling on the silver screen. Whether it's delving into the depths of horror, laughing out loud with uproarious comedies, or swooning over timeless romances, our past events have left lasting memories and sparked engaging discussions among our diverse community of movie lovers."
                backgroundImage={eventsBackground}
            />
            <section>
                <Cards 
                    img={eventOne}
                    date='April 20'
                    title="Rocky Horror Rendezvous: Let's Do the Time Warp Again!"
                    location="Bayfront Park, Governor's Harbour"
                    time='7:00pm - 11:00pm'
                    eventDesc="Get ready to jump to the left and step to the right at Rocky Horror Rendezvous: Let's Do the Time Warp Again! Join us for a night of interactive fun and cult classic magic as we screen The Rocky Horror Picture Show. Don your best costumes, bring your props, and prepare to sing, dance, and toast along with Dr. Frank-N-Furter and the rest of the eccentric cast in this unforgettable celebration of all things Rocky Horror!"
                    linkTo='/movies/66292f7f454841088992898c'
                />
               <Cards 
                    img={eventOne}
                    date='April 12'
                    title="Get Out: Thrills & Chills Night!"
                    location="Cape Eleuthera, Deep Creek"
                    time='7:00pm - 11:00pm'
                    eventDesc="Step into the unsettling world of Get Out at our Thrills & Chills Night! Brace yourself for an evening of suspense, intrigue, and thought-provoking thrills as we delve into Jordan Peele's acclaimed psychological horror masterpiece. Join us for an immersive screening experience that will keep you on the edge of your seat and leave you questioning the very nature of reality."
                    linkTo='/movies/66292f7f4548410889928964'
                />
                <Cards 
                    img={eventOne}
                    date='April 6'
                    title="Toy Story Spectacular: A Playdate with Adventure!"
                    location="The Cove, Gregory Town"
                    time='5:00pm - 8:00pm'
                    eventDesc='Join us for a whimsical journey into the world of "Toy Story" at our Spectacular event: A Playdate with Adventure! Get ready to rediscover the magic of childhood as Woody, Buzz, and the gang come to life on the big screen in this beloved animated classic. Bring the whole family for an enchanting experience filled with laughter, friendship, and heartwarming moments that will leave you feeling like a kid again.'
                    linkTo='/movies/66292f7f4548410889928978'
                />  
                <Cards 
                    img={eventOne}
                    date='March 28'
                    title="Fast & Furious Frenzy: Full Throttle Cinema!"
                    location="Potlatch Club, Governor's Harbour"
                    time='8:00pm - 11:00pm'
                    eventDesc='Rev up your engines and buckle up for an adrenaline-fueled ride at Fast & Furious Frenzy: Full Throttle Cinema! Join us as we showcase the high-octane action and heart-pounding thrills of the iconic Fast & Furious franchise on the big screen. Get ready to experience the rush of speed, the excitement of danger, and the power of family in this ultimate cinematic celebration of fast cars and furious stunts.'
                    linkTo='/movies/66292f7f4548410889928994'
                />  
                <Cards 
                    img={eventOne}
                    date='March 18'
                    title="Unforgettable Love: The Notebook"
                    location="Bayfront Park, Governor's Harbour"
                    time='7:00pm - 11:00pm'
                    eventDesc="Indulge in a timeless tale of romance and devotion at Unforgettable Love: The Notebook event. Join us for a heartwarming journey through the pages of Nicholas Sparks' beloved novel, as Noah and Allie's enduring love story unfolds on the silver screen. Prepare to be swept away by the passion, emotion, and timeless beauty of this cinematic masterpiece."
                    linkTo='/movies/66292f7f45484108899289a6'
                />  
            </section>
            <section>
                <Link to='/events' style={styles.link}>Upcoming Events</Link>
            </section>
        </section>
    );
}

export default PastEvents;

const styles = {
    header: {

    },
    link: {
        textDecoration: 'none',
        fontVariant: 'small-caps',
        margin: '2%'
    }  
}