import React from 'react';
import {getAllEvents} from "../../dummy-data";
import EventList from "../../components/Events/EventList";
import EventSearch from "../../components/Events/EventSearch";
import {useRouter} from "next/router";
import {getAllEvent} from "../../helper/api-utils";

const Events = (props) => {

    const router = useRouter()
    const findEvent = (year, month) => {
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath)
    }
    return (
        <div>
            <EventSearch onSearch={findEvent}/>
            <EventList items={props.events}/>
        </div>
    );
};


export async function getStaticProps() {
    const allEvents = await getAllEvent();
    return {
        props: {
            events: allEvents
        },
        revalidate: 60
    }
}

export default Events;
