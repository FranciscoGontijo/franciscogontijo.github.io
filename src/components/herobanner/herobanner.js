import React from "react";

import "./herobanner.css";

//import icons from react icons
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

//import images
import profilePictureSrc from "../../assets/images/Profile Picture.jpeg";

const HeroBanner = () => {
    return (
        <section className="hero-banner">
            <div className="hero">
                <h3>FULL STACK WEB DEVELOPER</h3>
                <h1>Hello, my name is Francisco Gontijo</h1>
                <p>Creating Engaging and User-Friendly Web Experiences</p>
                <nav className="hero-nav">
                    <a href="https://www.linkedin.com/in/franciscogontijo/"
                        rel="noreferrer" target="_blank">
                        <FaLinkedinIn className="social-icon" />
                    </a>
                    <a href="https://github.com/FranciscoGontijo" rel="noreferrer" target="_blank">
                        <FaGithub className="social-icon" />
                    </a>
                </nav>
            </div>
            <div className="hero-banner-img">
                <img src={profilePictureSrc} alt="Francisco profile" />
            </div>
        </section>
    )
};

export default HeroBanner;