import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Main.css'
import useVolantears from '../../hooks/useVoluntears';

const Main = () => {
    const [voluntear, setVolunter] = useVolantears();
    console.log(voluntear)
    return (
        <div>
            <h2>Volaunter Activities: {voluntear.length}</h2>
            <div className="activity-container">
                {
                    voluntear.map(activity => <Activity
                        key={activity._id}
                        activity={activity}
                    ></Activity>)
                };

            </div>
        </div>
    );
};

export default Main;