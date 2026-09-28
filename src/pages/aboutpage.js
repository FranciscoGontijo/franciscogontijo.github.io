import React from "react";
import { Link } from "react-router-dom";

import "./aboutpage.css";

import useWindowSize from "../util/useWindowSize";
import { useLanguage } from "../i18n/LanguageContext";

//import icons from react icons
import { FaFileDownload } from 'react-icons/fa';

//import images
import ProfilePictureSrc from "../assets/images/Profile Picture.jpeg";

const Timeline = ({ items }) => {
    return (
        <ul className="timeline">
            {items.map(item => (
                <li key={`${item.period}-${item.place}`}>
                    <span className="timeline-period">{item.period}</span>
                    <strong>{item.role}</strong>
                    <span>{item.place}</span>
                </li>
            ))}
        </ul>
    )
};

const AboutPage = () => {
    const screenSize = useWindowSize();
    const { t } = useLanguage();
    const about = t.about;
    const isWide = screenSize.width > 800;

    return (
        <section className="about-page">
            <section className={isWide ? "about-content about-content-wide" : "about-content"}>
                <div className="intro-banner">
                    <h2>{about.title}</h2>
                    <p>{about.subtitle}</p>
                </div>
                <div className="profile-picture-container">
                    <img src={ProfilePictureSrc} className="about-page-profile-picture" alt={t.hero.photoAlt} />
                </div>
                <div className="background-wallpaper">
                    <div className="about-text">
                        <h3>{about.greeting}</h3>
                        <p>{about.text}</p>
                    </div>
                    <div className="tools-and-languages-container">
                        <div className="about-columns">
                            <div className="about-block">
                                <h3>{about.experienceTitle}</h3>
                                <Timeline items={about.experience} />
                            </div>
                            <div className="about-block">
                                <h3>{about.educationTitle}</h3>
                                <Timeline items={about.education} />
                                <h3>{about.certificationsTitle}</h3>
                                <p>{about.certifications}</p>
                                <h3>{about.languagesTitle}</h3>
                                <p>{about.languages}</p>
                            </div>
                        </div>
                        <div className="about-block">
                            <h3>{about.skillsTitle}</h3>
                            {about.skills.map(skillGroup => (
                                <div key={skillGroup.group} className="skills-group">
                                    <p className="p-title">{skillGroup.group}</p>
                                    <div className="tools-container">
                                        {skillGroup.items.map(skill => <p key={skill}>{skill}</p>)}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="cv-links">
                            <a className="cv-link" href={`${process.env.PUBLIC_URL}/cv/Francisco-Gontijo-Curriculo.pdf`}
                                target="_blank" rel="noreferrer">
                                <FaFileDownload /> {t.cv.portuguese}
                            </a>
                            <a className="cv-link" href={`${process.env.PUBLIC_URL}/cv/Francisco-Gontijo-Resume-EN.pdf`}
                                target="_blank" rel="noreferrer">
                                <FaFileDownload /> {t.cv.english}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="about-page-contact-section">
                    <Link className="hi-button" to="/contact">{about.sayHello}</Link>
                </div>
            </section>
        </section>
    )
};

export default AboutPage;
