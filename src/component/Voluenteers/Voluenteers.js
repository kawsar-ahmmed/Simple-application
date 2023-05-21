import React, { useState } from 'react';
import useVolantears from '../../hooks/useVoluntears';
import Activity from '../Activity/Activity';

const Voluenteers = () => {
    const [voluntear, setVolunter] = useVolantears();
    const [searchResult, setSearchResult] = useState([]);



    const handleSerachChang = event => {
        const seachText = event.target.value;
        const matchText = voluntear.filter(v => v.title.includes(seachText));
        setSearchResult(matchText);
        console.log(searchResult);
    }
    return (
        <div>
            <h1>volentears menu : {voluntear.length}</h1>
            <div className="search-items">
                <input onChange={handleSerachChang} type="text" style={{ 'margin-bottom': "20px" }} placeholder='Search' />
            </div>
            <div className="activity-container">
                {
                    searchResult.map(activity => <Activity
                        key={activity._id}
                        activity={activity}
                    ></Activity>)
                };

            </div>
        </div>
    );
};

export default Voluenteers;