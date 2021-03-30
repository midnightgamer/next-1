import React from 'react';
import {useRouter} from "next/router";
import {getEventById} from "../../dummy-data";
import EventSummary from "../../components/EventDetailed/event-summary";
import EventLogistics from "../../components/EventDetailed/event-logistics";
import EventContent from "../../components/EventDetailed/event-content";

const DetailedEvent = () => {
    const router = useRouter()

    const id = router.query.eventId;
    const event = getEventById(id);
    if (!event) {
        return <p>No Event </p>
    }

    return (
        <React.Fragment>
            <EventSummary title={event.title}/>
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}/>
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </React.Fragment>
    );
};


export default DetailedEvent;
