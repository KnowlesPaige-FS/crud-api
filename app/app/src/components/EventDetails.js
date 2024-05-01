// import React from 'react';

// const EventDetails = () => {
//   const eventData = [
//     {
//         date: 'May 20',
//         title: 'Casablanca Nights: A Timeless Romance Under the Stars!',
//         location: "The Cove, Gregory Town",
//         time: '5:00pm - 8:00pm',
//         eventDesc: 'Step into the golden age of Hollywood with "Casablanca Nights," where romance and intrigue intertwine in the classic tale of love and sacrifice. Join us under the twinkling stars for an unforgettable cinematic experience, as we journey to wartime Casablanca and witness the timeless chemistry between Humphrey Bogart and Ingrid Bergman. Let the unforgettable dialogue and iconic moments of this beloved film transport you to a world where love conquers all.',
//         eventId: '66292f7f4548410889928934' 
//     },
//     {
//         date: 'May 5',
//         title: "Fiesta de la Vida: A Colorful Journey with 'The Book of Life'!",
//         location: "La Bougainvillea, Palmetto Point",
//         time: '6:00pm - 11:00pm',
//         eventDesc: 'Join us for "Fiesta de la Vida," a vibrant celebration inspired by the enchanting world of "The Book of Life"! Immerse yourself in the colorful landscapes of Mexican folklore as we follow Manolo on his extraordinary journey filled with love, music, and adventure. Get ready for an unforgettable cinematic experience that will ignite your imagination and warm your heart.',
//         eventId: '66292f7f4548410889928948' 
//     },
//     {
//         date: 'May 1',
//         title: 'One Ring to Rule Them All: An Epic Journey Begins!',
//         location: "Bayfront Park, Governor's Harbour",
//         time: '7:00pm - 11:00pm',
//         eventDesc: "Embark on an unforgettable cinematic adventure as we journey to Middle-earth with 'The Lord of the Rings: The Fellowship of the Ring.' Join us for an immersive viewing experience filled with breathtaking landscapes, heroic quests, and unforgettable characters. Let the magic of Tolkien's epic tale sweep you away on a quest to destroy the One Ring and save Middle-earth from ",
//         eventId: '66292f7f4548410889928950' 
//     },
//     {
//         date: 'April 20',
//         title: "Rocky Horror Rendezvous: Let's Do the Time Warp Again!",
//         location: "Cape Eleuthera, Deep Creek",
//         time: '7:00pm - 11:00pm',
//         eventDesc: "Step into the unsettling world of Get Out at our Thrills & Chills Night! Brace yourself for an evening of suspense, intrigue, and thought-provoking thrills as we delve into Jordan Peele's acclaimed psychological horror masterpiece. Join us for an immersive screening experience that will keep you on the edge of your seat and leave you questioning the very nature of reality.",
//         eventId: '66292f7f454841088992898c' 
//     },
//     {
//         date: 'April 12',
//         title: 'Get Out: Thrills & Chills Night!',
//         location: "Cape Eleuthera, Deep Creek",
//         time: '7:00pm - 11:00pm',
//         eventDesc: "Step into the unsettling world of Get Out at our Thrills & Chills Night! Brace yourself for an evening of suspense, intrigue, and thought-provoking thrills as we delve into Jordan Peele's acclaimed psychological horror masterpiece. Join us for an immersive screening experience that will keep you on the edge of your seat and leave you questioning the very nature of reality.",
//         eventId: '66292f7f4548410889928964' 
//     },
//     {
//         date: 'April 6',
//         title: 'Toy Story Spectacular: A Playdate with Adventure!',
//         location: "The Cove, Gregory Town",
//         time: '5:00pm - 8:00pm',
//         eventDesc: 'Join us for a whimsical journey into the world of "Toy Story" at our Spectacular event: A Playdate with Adventure! Get ready to rediscover the magic of childhood as Woody, Buzz, and the gang come to life on the big screen in this beloved animated classic. Bring the whole family for an enchanting experience filled with laughter, friendship, and heartwarming moments that will leave you feeling like a kid again.',
//         eventId: '66292f7f4548410889928978' 
//     },
//     {
//         date: 'May 28',
//         title: 'Fast & Furious Frenzy: Full Throttle Cinema!',
//         location: "Potlatch Club, Governor's Harbour",
//         time: '8:00pm - 11:00pm',
//         eventDesc: "Rev up your engines and buckle up for an adrenaline-fueled ride at Fast & Furious Frenzy: Full Throttle Cinema! Join us as we showcase the high-octane action and heart-pounding thrills of the iconic Fast & Furious franchise on the big screen. Get ready to experience the rush of speed, the excitement of danger, and the power of family in this ultimate cinematic celebration of fast cars and furious stunts.",
//         eventId: '66292f7f4548410889928994' 
//     },
//     {
//         date: 'March 18',
//         title: 'Unforgettable Love: The Notebook',
//         location: "Bayfront Park, Governor's Harbour",
//         time: '7:00pm - 11:00pm',
//         eventDesc: "Indulge in a timeless tale of romance and devotion at Unforgettable Love: The Notebook event. Join us for a heartwarming journey through the pages of Nicholas Sparks' beloved novel, as Noah and Allie's enduring love story unfolds on the silver screen. Prepare to be swept away by the passion, emotion, and timeless beauty of this cinematic masterpiece.",
//         eventId: '66292f7f45484108899289a6' 
//     }, 

//   ];

//   return (
//     <div>
//       {eventData.map(event => (
//         <div key={event.eventId}>
//           <h2>{event.title}</h2>
//           <p>Date: {event.date}</p>
//           <p>Location: {event.location}</p>
//           <p>Time: {event.time}</p>
//           <p>Description: {event.eventDesc}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default EventDetails;

import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetails = ({ eventData }) => {
    const { eventId } = useParams();
    const event = eventData.find(event => event.eventId === eventId);

    if (!event) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{event.title}</h2>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
            <p>Time: {event.time}</p>
            <p>Description: {event.eventDesc}</p>
        </div>
    );
}

export default EventDetails;
