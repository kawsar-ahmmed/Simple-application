import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink to='/main'> Home</NavLink>
            <NavLink to='/voluntear'> Volantears</NavLink>
        </div>
    );
};

export default Header;