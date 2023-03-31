import React from "react";
import { Link } from "react-router-dom";

import './navbar.css';

const NavigationBar = () => {

    return (
        <nav className="nav-bar">
            <div className="logo-container">
                <Link className="name-logo" to="/">Francisco Gontijo</Link>
            </div>
            <ul className="nav-bar-link-list">
                <li className="nav-link">
                    <Link className="link" to="/">Home</Link>
                </li>
                <li className="nav-link">
                    <Link className="link" to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
};

export default NavigationBar;