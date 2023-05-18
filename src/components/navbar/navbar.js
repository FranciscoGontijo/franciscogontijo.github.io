import React from "react";
import { Link, useLocation } from "react-router-dom";

import './navbar.css';

const NavigationBar = () => {
    const location = useLocation();

    return (
        <nav className="nav-bar">
            <div className="logo-container">
                <Link className="name-logo" to="/">Francisco Gontijo</Link>
            </div>
            <ul className="nav-bar-link-list">
                {location.pathname !== '/' && <li className="nav-link">
                    <Link className="link" to="/">Home</Link>
                </li>}
                {location.pathname !== '/about' && <li className="nav-link">
                    <Link className="link" to="/about">About</Link>
                </li>}
                {location.pathname !== '/contact' && <li className="nav-link">
                    <Link className="link" to="/contact">Contact</Link>
                </li>}
            </ul>
        </nav>
    )
};

export default NavigationBar;