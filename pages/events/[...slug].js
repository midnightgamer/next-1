import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import EventList from "../../components/Events/EventList";
import ResultsTitle from "../../components/Events/results-title";
import Button from "../../components/UI/Button";
import ErrorAlert from "../../components/Icons/error-alert";
import useSWR from "swr";

const FilteredEvent = () => {
    const [events, setEvent] = useState(null)
    const router = useRouter()

    const filterData = router.query.slug;
    const {data, error} = useSWR('https://delte-d402a-default-rtdb.firebaseio.com/events.json')
    useEffect(() => {
        if (data) {
            const events = [];
            for (const key in data) {
                events.push({id: key, ...data[key]})
            }
            setEvent(events)
        }
    }, [data])


    if (!events) {
        return <p className={'center'}>Loading..</p>;
    }
    const year = +filterData[0];
    const month = +filterData[1];



    if (isNaN(year) ||
        isNaN(month) ||
        year > 2030 ||
        year < 2021 ||
        month < 1 ||
        month > 12) {
        return (
            <React.Fragment>
                <ErrorAlert>
                    <p>Invalid filter. Please adjust your values!</p>
                </ErrorAlert>
                <div className='center'>
                    <Button link='/events'>Show All Events</Button>
                </div>
            </React.Fragment>
        );
    }

    const filteredEvents = events.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });


    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <React.Fragment>
                <ErrorAlert>
                    <p>No events found for the chosen filter!</p>
                </ErrorAlert>
                <div className='center'>
                    <Button link='/events'>Show All Events</Button>
                </div>
            </React.Fragment>
        );
    }

    const date = new Date(year, month - 1);

    return (
        <React.Fragment>
            <ResultsTitle date={date}/>
            <EventList items={filteredEvents}/>
        </React.Fragment>
    );
};

export default FilteredEvent;
