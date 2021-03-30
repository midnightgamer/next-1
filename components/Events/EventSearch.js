import React, {useRef} from 'react';
import Button from "../UI/Button";
import classes from './EventSearch.module.css'

const EventsSearch = (props) => {
    const yearInput = useRef()
    const monthInput = useRef()
    const submitHandler = (event) => {
        event.preventDefault();
        const selectedMonth = monthInput.current.value;
        const selectedYear = yearInput.current.value;
        props.onSearch(selectedYear, selectedMonth)
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label for="year">Year</label>
                    <select name="year" id="year" ref={yearInput}>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label for="month">Month</label>
                    <select name="month" id="month" ref={monthInput}>
                        <option value='1'>Jan</option>
                        <option value='2'>Feb</option>
                        <option value='3'>Marc</option>
                        <option value='4'>Apr</option>
                        <option value='5'>May</option>
                        <option value='6'>Jun</option>
                        <option value='7'>Jul</option>
                        <option value='8'>Aug</option>
                        <option value='9'>Sep</option>
                        <option value='10'>Oct</option>
                        <option value='11'>Nov</option>
                        <option value='12'>Dec</option>
                    </select>
                </div>
            </div>
            <Button>Find Events</Button>
        </form>
    );
};

export default EventsSearch;
