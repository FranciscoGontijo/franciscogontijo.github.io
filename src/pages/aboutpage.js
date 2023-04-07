import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./aboutpage.css";

import useWindowSize from "../util/useWindowSize";

//import images
import ProfilePictureSrc from "../assets/images/Profile Picture.jpg";
import HTMLLogoSrc from "../assets/logos/HTML5.png";
import CSSLogoSrc from "../assets/logos/CSS.png";
import JSLogoSrc from "../assets/logos/JavaScript.png";
import TSLogoSrc from "../assets/logos/TypeScript.png";
import ReactLogoSrc from "../assets/logos/React.png";
import NodeJSLogoSrc from "../assets/logos/NodeJs.png";

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
                        <img src={ProfilePictureSrc} className="about-page-profile-picture" />
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
                                <p>React</p>
                                <p>React router</p>
                                <p>Redux</p>
                                <p>Axios</p>
                                <p>Jest</p>
                                <p>AWS Cognito</p>
                                <p>NodeJS</p>
                                <p>Express</p>
                                <p>Mongoose</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-page-contact-section">
                        <button className="hi-button"><Link className="link" to="/contact">Say Hello!!</Link></button>
                    </div>
                </section>
            }
            {display === 'desktop' &&
                <div className="about-banner">
                    <h1>About</h1>
                    <p>Hi, my name is Francisco and I am a Front-End Developer based in Sydney, Australia.
                        As a Front-End Developer, I bring a strong foundation in HTML, CSS,
                        JavaScript, and TypeScript to every project.
                        With proficiency in React and experience in responsive design,
                        I have the skills to create websites and applications that are both visually appealing and functional.
                        Additionally, I am experienced in API integration and REST API design,
                        enabling me to seamlessly integrate back-end systems with front-end user interfaces.
                        Let's collaborate to build something great together.</p>
                </div>
            }
        </section>
    )
};

export default AboutPage;