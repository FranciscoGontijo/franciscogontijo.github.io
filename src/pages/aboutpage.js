import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./aboutpage.css";

import useWindowSize from "../util/useWindowSize";

//import images
import ProfilePictureSrc from "../assets/images/Profile Picture.jpeg";

//import skills
import { skills } from "../data/data";

const AboutPage = () => {
    const screenSize = useWindowSize();
    const [display, setDisplay] = useState('mobile');

    useEffect(() => {
        if (screenSize.width > 800) {
            setDisplay('desktop');
        }
        if (screenSize.width <= 800) {
            setDisplay('mobile');
        }
    }, [screenSize]);

    return (
        <section className="about-page">
            {display === 'mobile' &&
                <section className="mobile-about-page">
                    <div className="intro-banner">
                        <h2>About me</h2>
                        <p>Creating Engaging and User-Friendly Web Experiences</p>
                    </div>
                    <div className="profile-picture-container">
                        <img src={ProfilePictureSrc} className="about-page-profile-picture" alt="Francisco's profile" />
                    </div>
                    <div className="background-wallpaper">
                        <div className="about-text">
                            <h3>Hi, I'm Francisco. Nice to meet you.</h3>
                            <p>As a Front-End Developer, I bring a strong foundation in HTML, CSS,
                                JavaScript, and TypeScript to every project.
                                With proficiency in React and experience in responsive design,
                                I have the skills to create websites and applications that are both visually appealing and functional.
                                Additionally, I am experienced in API integration and REST API design,
                                enabling me to seamlessly integrate back-end systems with front-end user interfaces.
                                Let's collaborate to build something great together.</p>
                        </div>
                        <div className="tools-and-languages-container">
                            <div>
                                <i></i>
                            </div>
                            <h3>Web Developer</h3>
                            <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                            <div className="languages-container">
                                <p className="p-title">Languages: </p>
                                <p>HTML, CSS, JavaScript and TypeScript</p>
                            </div>
                            <div className="tools-container">
                                <p className="p-title">Dev Tools: </p>
                                {skills.map(skill => <p>{skill}</p>)}
                            </div>
                        </div>
                    </div>
                    <div className="about-page-contact-section">
                        <button className="hi-button"><Link className="link" to="/contact">Say Hello!!</Link></button>
                    </div>
                </section>
            }
            {display === 'desktop' &&
                <section className="big-screen-about-page">
                    <div className="intro-banner">
                        <h2>Front-End Developer</h2>
                        <p>Creating Engaging and User-Friendly Web Experiences</p>
                    </div>
                    <div className="profile-picture-container">
                        <img src={ProfilePictureSrc} className="about-page-profile-picture" alt="Francisco's profile" />
                    </div>
                    <div className="background-wallpaper">
                        <div className="about-text">
                            <h3>Hi, I'm Francisco. Nice to meet you.</h3>
                            <p>As a Front-End Developer, I bring a strong foundation in HTML, CSS,
                                JavaScript, and TypeScript to every project.
                                With proficiency in React and experience in responsive design,
                                I have the skills to create websites and applications that are both visually appealing and functional.
                                Additionally, I am experienced in API integration and REST API design,
                                enabling me to seamlessly integrate back-end systems with front-end user interfaces.
                                Let's collaborate to build something great together.</p>
                        </div>
                        <div className="tools-and-languages-container">
                            <div>
                                <i></i>
                            </div>
                            <h3>Web Developer</h3>
                            <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                            <div className="languages-container">
                                <p className="p-title">Languages: </p>
                                <p>HTML, CSS, JavaScript and TypeScript</p>
                            </div>
                            <div className="tools-container">
                                <h3 className="p-title">Dev Tools: </h3>
                                {skills.map(skill => <p>{skill}</p>)}
                            </div>
                        </div>
                    </div>
                    <div className="about-page-contact-section">
                        <button className="hi-button"><Link className="link" to="/contact">Say Hello!!</Link></button>
                    </div>
                </section>
            }
        </section>
    )
};

export default AboutPage;