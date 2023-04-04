import React from "react";

import "./mobileherobanner.css";

//import images
import profilePictureSrc from "../../assets/images/Profile Picture.jpg";

const HeroBannerMobile = () => {
    return (
        <section className="hero-banner-mobile">
            <div className="hero">
                <h3>FRONT-END WEB DEVELOPER</h3>
                <div className="hero-banner-img">
                    <img src={profilePictureSrc} alt="Francisco profile" />
                </div>
                <h1>Francisco Gontijo</h1>
                <p>Creating Engaging and User-Friendly Web Experiences:</p>
                <nav className="hero-nav">
                    <a href="https://www.facebook.com/tatiko.gontijo" rel="noreferrer" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/tatikogontijo/" rel="noreferrer" target="_blank">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/francisco-alexandre-cardoso-melo-gontijo-5a469b239/"
                        rel="noreferrer" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/FranciscoGontijo" rel="noreferrer" target="_blank">
                        <i className="fab fa-github"></i>
                    </a>
                </nav>
            </div>
        </section>
    )
};

export default HeroBannerMobile;