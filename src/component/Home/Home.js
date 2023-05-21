import React, { useState } from 'react';
import Header from '../Header/Header'

const Home = () => {
    const [count, setCount] = useState(0);
    const increassCount = () => {
        setCount(count + 1);
    }
    const number = 56;
    return (
        <div>
            <button onClick={increassCount}> Click Me</button>
            <h1>My number {number}</h1>
            <h3> Count: {count}</h3>
            <h4>New Count {count * 2}</h4>
        </div>
    );
};

export default Home;