import React from 'react';
import "./Footer.sass";


function Footer() {
    return (
        <footer>
            <div className='footer-container'>
                <div className='section'>
                    <h3>The Plant Shop</h3>
                </div>
                <div className='section'>
                    <h3>Contact</h3>
                    <ul>
                        <li>Phone</li>
                        <li>Email</li>
                        <li>Location</li>
                        <li>Social Media
                            <ul>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                            </ul>
                        </li>
                        <li>Hours</li>
                    </ul>
                </div>
                <div className='section'>
                    <h3>About</h3>
                </div>
                <div className='section'>
                    <h3>Documentation</h3>
                </div>
            </div>
        </footer>
    )
}

export default Footer
