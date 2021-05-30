import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return (
        <nav class="main-nav">
            <ul>
                <li><NavLink to='/deer'>Deers</NavLink></li>
                <li><NavLink to='/bison'>Bisons</NavLink></li>
                <li><NavLink to='/bird'>Birds</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;


