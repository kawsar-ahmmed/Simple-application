import React, { useEffect, useState } from 'react';

const Main = () => {
    const [voluntear, setVolunter] = useState([]);
    useEffect (() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setVolunter(data))
    }, [])
    console.log(voluntear)
    return (
        <div>
            <h2>Volaunter Activities: {voluntear.length}</h2>
        </div>
    );
};

export default Main;