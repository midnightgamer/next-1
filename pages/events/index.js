import React from 'react';
import {getAllEvents} from "../../dummy-data";
import EventList from "../../components/Events/EventList";
import EventSearch from "../../components/Events/EventSearch";
import {useRouter} from "next/router";

const Events = () => {
    const events = getAllEvents();
    const router = useRouter()
    const findEvent = (year, month) => {
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath)
    }
    return (
        <div>
            <EventSearch onSearch={findEvent}/>
            <EventList items={events}/>
        </div>
    );
};

export default Events;
