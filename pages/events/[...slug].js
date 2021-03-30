import React from 'react';
import {useRouter} from "next/router";
import {getFilteredEvents} from "../../helper/api-utils";
import EventList from "../../components/Events/EventList";
import ResultsTitle from "../../components/Events/results-title";
import Button from "../../components/UI/Button";
import ErrorAlert from "../../components/Icons/error-alert";

const FilteredEvent = (props) => {
    const router = useRouter()
    /*const filterData = router.query.slug;
    if (!filterData) {
        return <p className={'center'}>Loading..</p>;
    }
    const year = +filterData[0];
    const month = +filterData[1];*/
    if (props.hasError) {
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

    const filteredEvents = props.events;

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

    const date = new Date(props.year, props.month - 1);

    return (
        <React.Fragment>
            <ResultsTitle date={date}/>
            <EventList items={filteredEvents}/>
        </React.Fragment>
    );
};

export async function getServerSideProps(context) {
    const {params} = context;
    const filterData = params.slug;

    const year = +filterData[0];
    const month = +filterData[1];

    if (
        isNaN(year) ||
        isNaN(month) ||
        year > 2030 ||
        year < 2021 ||
        month < 1 ||
        month > 12

    ) {

        return {
            props: {hasError: true}
        };
    }

    const filteredEvents = await getFilteredEvents({year, month});

    return {
        props: {
            events: filteredEvents,
            year: year,
            month: month
        }
    }
}

export default FilteredEvent;
