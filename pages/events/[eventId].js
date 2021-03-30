import React from 'react';
import {useRouter} from "next/router";
import {getAllEvent, getEventById} from "../../helper/api-utils";
import EventSummary from "../../components/EventDetailed/event-summary";
import EventLogistics from "../../components/EventDetailed/event-logistics";
import EventContent from "../../components/EventDetailed/event-content";
import ErrorAlert from "../../components/Icons/error-alert";

const DetailedEvent = (props) => {
    const {event} = props;
    if (!event) {
        return <ErrorAlert><p>No Event </p></ErrorAlert>
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

export async function getStaticProps(context) {
    const eventId = context.params.eventId;
    const event = await getEventById(eventId)
    return {
        props: {
            event: event
        }
    }
}

export async function getStaticPaths() {
    const allEvents = await getAllEvent();

    const paths = allEvents.map(item => ({params: {eventId: item.id}}));
    return {
        paths: paths,
        fallback: false
    }
}

export default DetailedEvent;
