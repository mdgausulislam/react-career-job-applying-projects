import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <h1>  Career Applied Job </h1>
            <div className='menubar'>
                <Link to="/">Home</Link>
                <Link to="/feature">Feature Job</Link>
                <Link to="/applied">APPlied Job</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
            </div>
            <button className='btn-start-applying'>Start Applying</button>

        </nav>
    );
};

export default Header;