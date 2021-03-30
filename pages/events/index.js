import React from 'react';
import {getAllEvents} from "../../dummy-data";
import EventList from "../../components/Events/EventList";
import EventSearch from "../../components/Events/EventSearch";

const Events = () => {
    const events = getAllEvents();
    return (
        <div>
            <EventSearch/>
            <EventList items={events}/>
        </div>
    );
};

export default Events;
