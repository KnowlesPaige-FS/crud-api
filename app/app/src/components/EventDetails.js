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
