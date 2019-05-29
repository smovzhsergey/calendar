import React from 'react';
import { ReactComponent as Arrow } from '../assets/img/arrow.svg';

const Year = ({ setCurrentYear, year }) => {

    const handleClick = ( ev ) => setCurrentYear(ev.currentTarget.getAttribute( "data-direction" ));

    return (
        <div className = 'yearTitle'>
            <Arrow className = 'arrow' data-direction = 'prev' onClick = { handleClick } />
            <span>{ year }</span>
            <Arrow className = 'arrow arrow__right' data-direction = 'next' onClick = { handleClick } />
        </div>
    );
}

export default Year;