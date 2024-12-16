import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.sass";


function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Plant Shop</Link>
                </li>
            </ul>
            <label for='categories'>🌱</label>
            <input type='checkbox' id='categories' />
            <ul>
                <li className='categories'>
                    <Link to="/categories">Categories</Link>
                    <ul>
                        <li>Moses</li>
                        <li>Ferns</li>
                        <li>Non-flowering</li>
                        <li>Flowering</li>
                    </ul>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav