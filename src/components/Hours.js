import React from 'react';

const Hours = () => {
    const currentDay = new Date().getDay();

    let openingHours;
    if (currentDay >= 1 && currentDay <= 5) {
        openingHours = '10am - 4pm';
    } else if (currentDay === 0 || currentDay === 6) {
        openingHours = '9am - 8pm';
    } else {
        openingHours = 'Closed';
    }

    return (
        <div>
            <h2>Opening Hours</h2>
            <p>{getDayOfWeek(currentDay)}: {openingHours}</p>
        </div>
    );
};

const getDayOfWeek = (day) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[day];
};

export default Hours;