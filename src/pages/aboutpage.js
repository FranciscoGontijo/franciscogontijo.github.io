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
                        <h2>About Me</h2>
                        <p>Building Scalable and User-Centered Web Applications</p>
                    </div>
                    <div className="profile-picture-container">
                        <img src={ProfilePictureSrc} className="about-page-profile-picture" alt="Francisco's profile" />
                    </div>
                    <div className="background-wallpaper">
                        <div className="about-text">
                            <h3>Hi, I'm Francisco. Full Stack Developer.</h3>
                            <p>I specialize in building complete web solutions — from front-end user interfaces to back-end systems and APIs.
                                My foundation in HTML, CSS, JavaScript, and TypeScript is paired with deep experience in React for the front end,
                                and Node.js, Express, and databases like MongoDB or PostgreSQL on the back end.
                                I focus on writing clean, scalable code and building responsive, performance-optimized applications.
                                Whether it's designing a smooth UX, developing RESTful APIs, or deploying apps to production,
                                I'm passionate about delivering full-featured digital experiences that solve real-world problems.</p>
                        </div>
                        <div className="tools-and-languages-container">
                            <div>
                                <i></i>
                            </div>
                            <h3>End-to-End Web Development</h3>
                            <p>From concept to deployment, I enjoy crafting seamless and reliable web applications.</p>
                            <div className="languages-container">
                                <p className="p-title">Languages: </p>
                                <p>JavaScript, TypeScript, HTML, CSS</p>
                            </div>
                            <div className="tools-container">
                                <h3 className="p-title">Dev Tools & Technologies: </h3>
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
                        <h2>Full Stack Developer</h2>
                        <p>Building Scalable and User-Centered Web Applications</p>
                    </div>
                    <div className="profile-picture-container">
                        <img src={ProfilePictureSrc} className="about-page-profile-picture" alt="Francisco's profile" />
                    </div>
                    <div className="background-wallpaper">
                        <div className="about-text">
                            <h3>Hi, I'm Francisco. Full Stack Developer.</h3>
                            <p>I specialize in building complete web solutions — from front-end user interfaces to back-end systems and APIs.
                                My foundation in HTML, CSS, JavaScript, and TypeScript is paired with deep experience in React for the front end,
                                and Node.js, Express, and databases like MongoDB or PostgreSQL on the back end.
                                I focus on writing clean, scalable code and building responsive, performance-optimized applications.
                                Whether it's designing a smooth UX, developing RESTful APIs, or deploying apps to production,
                                I'm passionate about delivering full-featured digital experiences that solve real-world problems.</p>
                        </div>
                        <div className="tools-and-languages-container">
                            <div>
                                <i></i>
                            </div>
                            <h3>End-to-End Web Development</h3>
                            <p>From concept to deployment, I enjoy crafting seamless and reliable web applications.</p>
                            <div className="languages-container">
                                <p className="p-title">Languages: </p>
                                <p>JavaScript, TypeScript, HTML, CSS</p>
                            </div>
                            <div className="tools-container">
                                <h3 className="p-title">Dev Tools & Technologies: </h3>
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