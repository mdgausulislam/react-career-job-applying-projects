import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <h1>  Career Applied Job </h1>
            <div className='menubar'>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/applied">APPlied Job</a>
                <a href="/login">Login</a>
            </div>
            <button className='btn-start-applying'>Start Applying</button>

        </nav>
    );
};

export default Header;