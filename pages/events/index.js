import React from 'react';
import {getAllEvents} from "../../dummy-data";
import EventList from "../../components/Events/EventList";

const Events = () => {
    const events = getAllEvents();
    return (
       <EventList items={events}/>
    );
};

export default Events;
