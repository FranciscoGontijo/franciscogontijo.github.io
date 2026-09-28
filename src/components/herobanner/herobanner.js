import React from "react";

import "./herobanner.css";

//import icons from react icons
import { FaGithub, FaLinkedinIn, FaEnvelope, FaFileDownload } from 'react-icons/fa'

//import images
import profilePictureSrc from "../../assets/images/Profile Picture.jpeg";

import { useLanguage } from "../../i18n/LanguageContext";

const HeroBanner = () => {
    const { t } = useLanguage();

    return (
        <section className="hero-banner">
            <div className="hero">
                <h3>{t.hero.eyebrow}</h3>
                <h1>{t.hero.title}</h1>
                <p>{t.hero.text}</p>
                <div className="status-badge">
                    <span className="status-dot"></span>
                    {t.hero.status}
                </div>
                <nav className="hero-nav">
                    <a className="cv-button" href={`${process.env.PUBLIC_URL}${t.cv.file}`}
                        rel="noreferrer" target="_blank">
                        <FaFileDownload /> {t.cv.download}
                    </a>
                    <a href="https://www.linkedin.com/in/franciscogontijo/"
                        rel="noreferrer" target="_blank" aria-label="LinkedIn">
                        <FaLinkedinIn className="social-icon" />
                    </a>
                    <a href="https://github.com/FranciscoGontijo" rel="noreferrer" target="_blank" aria-label="GitHub">
                        <FaGithub className="social-icon" />
                    </a>
                    <a href="mailto:franciscoacmg@gmail.com" aria-label="E-mail">
                        <FaEnvelope className="social-icon" />
                    </a>
                </nav>
            </div>
            <div className="hero-banner-img">
                <img src={profilePictureSrc} alt={t.hero.photoAlt} />
            </div>
        </section>
    )
};

export default HeroBanner;
