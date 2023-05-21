import React from 'react';
import './Activity.css'


const Activity = ({ activity }) => {
    const { title, img } = activity;
    return (
        <div className='activity'>
            <div>
                <img src={img} alt="" />
                <h2>Name: {title}</h2>
            </div>
        </div>
    );
};

export default Activity;