import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="nav">
            <ul>
                <li className="nav__link">
                    <Link to="/hackernews/search">Search</Link>
                </li>
                <li className="nav__link">
                    <Link to="/hackernews/history">History</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
