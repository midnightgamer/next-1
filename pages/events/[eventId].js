import React from 'react';
import {useRouter} from "next/router";
import {getAllEvent, getEventById, getFeaturedEvents} from "../../helper/api-utils";
import EventSummary from "../../components/EventDetailed/event-summary";
import EventLogistics from "../../components/EventDetailed/event-logistics";
import EventContent from "../../components/EventDetailed/event-content";
import ErrorAlert from "../../components/Icons/error-alert";

const DetailedEvent = (props) => {
    const {event} = props;
    if (!event) {
        return <div className={'center'}><p>Loading... </p></div>
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
            event: event,

        },
        revalidate: 30
    }
}

export async function getStaticPaths() {
    const allEvents = await getFeaturedEvents();
    const paths = allEvents.map(item => ({params: {eventId: item.id}}));
    return {
        paths: paths,
        fallback: true,
    }
}

export default DetailedEvent;
