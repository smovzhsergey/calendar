import React from 'react';
import { getWeekDays } from '../helpers';

const Week = () => {

    const daysNamesList = getWeekDays.map( name => <span key = { name }>{ name } |</span>);

    return (
        <div className = 'week'>
            { daysNamesList }
        </div>
    );
}

export default Week;