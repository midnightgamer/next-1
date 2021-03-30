import React from 'react';
import classes from './EventItem.module.css'
import Button from "../UI/Button";
import DateIcon from "../Icons/date-icon";
import AddressIcon from "../Icons/address-icon";
import ArrowRightIcon from "../Icons/arrow-right-icon";

const EventItem = (props) => {
    const {image, title, date, location, id} = props.item;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    const Address = location.replace(', ', '\n')
    const exploreLink = `/events/${id}`
    return (
        <li className={classes.item} key={id}>
            <img src={'/' + image} alt={title}/>
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <DateIcon/>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon/>
                        <address>{Address}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={exploreLink}>Explorer Event <span
                        className={classes.icon}><ArrowRightIcon/> </span></Button>

                </div>
            </div>
        </li>
    );
};

export default EventItem;
