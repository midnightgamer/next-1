import React from 'react';
import EventItem from "./EventItem";
import classes from './EventItem.module.css'
const EvenList = (props) => {
    const {items} = props;
    return (
        <ul className={classes.list}>
            {items.map(item =>
                <EventItem  item={item}/>
            )}
        </ul>
    );
};

export default EvenList;
