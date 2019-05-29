import React from 'react';
import { ReactComponent as Arrow } from '../assets/img/arrow.svg';
import { getMonthName } from '../helpers';

const Month = ({ monthIndex, setCurrentMonth }) => {

    const handleClick = ( ev ) => setCurrentMonth(ev.currentTarget.getAttribute( "data-direction" ));
    
    const monthName = getMonthName(monthIndex);

    return (
        <div className = 'yearTitle'>
            <Arrow className = 'arrow' data-direction = 'prev' onClick = { handleClick } />
            <span>{ monthName }</span>
            <Arrow className = 'arrow arrow__right' data-direction = 'next' onClick = { handleClick } />
        </div>
    );
}

export default Month;