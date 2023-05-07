import React, { useState } from "react";

//import CSS
import "./mobileprojects.css";

//import images 
import PomodoroProjectSrc from "../../assets/images/Pomodoro Project.png";
import PomodoroProjectChartsSrc from "../../assets/images/Pomodoro Stats.png";
import RentalCarProjectSrc from "../../assets/images/Rental Car.png";
import RentalCarProjectFleetSrc from "../../assets/images/RentalCar Fleet Section.png";

//import icons from react icons
import { MdArrowBackIos } from 'react-icons/md';
import { MdArrowForwardIos } from "react-icons/md";
import { FaGithub } from 'react-icons/fa';

const MobileDisplayProjects = () => {
    const [firstProjectStatus, setFirstProjectStatus] = useState('info');
    const [secondProjectStatus, setSecondProjectStatus] = useState('info');
    const [thirdProjectStatus, setThirdProjectStatus] = useState('info');

    const handleNextImage = (status, project) => {
        if (project === 'first-project') {
            if (status === 'info') {
                setFirstProjectStatus('first-image');
            };
            if (status === 'first-image') {
                setFirstProjectStatus('second-image');
            };
            if (status === 'second-image') {
                setFirstProjectStatus('info');
            };
        };
        if (project === 'second-project') {
            if (status === 'info') {
                setSecondProjectStatus('first-image');
            };
            if (status === 'first-image') {
                setSecondProjectStatus('second-image');
            };
            if (status === 'second-image') {
                setSecondProjectStatus('info');
            };
        };
        if (project === 'third-project') {
            if (status === 'info') {
                setThirdProjectStatus('first-image');
            };
            if (status === 'first-image') {
                setThirdProjectStatus('second-image');
            };
            if (status === 'second-image') {
                setThirdProjectStatus('info');
            };
        };
    };

    const handleBackImage = (status, project) => {
        if (project === 'first-project') {
            if (status === 'info') {
                setFirstProjectStatus('second-image');
            };
            if (status === 'first-image') {
                setFirstProjectStatus('info');
            };
            if (status === 'second-image') {
                setFirstProjectStatus('first-image');
            };
        };
        if (project === 'second-project') {
            if (status === 'info') {
                setSecondProjectStatus('second-image');
            };
            if (status === 'first-image') {
                setSecondProjectStatus('info');
            };
            if (status === 'second-image') {
                setSecondProjectStatus('first-image');
            };
        };
        if (project === 'third-project') {
            if (status === 'info') {
                setThirdProjectStatus('second-image');
            };
            if (status === 'first-image') {
                setThirdProjectStatus('info');
            };
            if (status === 'second-image') {
                setThirdProjectStatus('first-image');
            };
        };
    };

    return (
        <section className="mobile-projects-container">
            <div className="project-title">
                <h2>Projects</h2>
                <div className="bar"></div>
            </div>
            <div className="project-container">
                {firstProjectStatus === "info" && <div className="project-info">
                    <h3>Pomodoro project</h3>
                    <p>This project is a responsive React application that features a Pomodoro timer with settings and
                        statistics for the user. The application showcases the use of a range of front-end and back-end
                        tools and libraries as React, Redux, AWS Cognito, Mongoose, Axios, Chart.js and Moment</p>
                    <div className="view-project-container">
                        <a
                            href="https://quickstopwatch.netlify.app/"
                            target="_blank"
                            rel="noreferrer">
                            <button className="view-project-button" title="Live demo website">View Project</button>
                        </a>
                        <a
                            className="gitpage"
                            href="https://github.com/FranciscoGontijo/pomodoro-project"
                            target="_blank"
                            rel="noreferrer">
                            <FaGithub className="social-icon" title="Github project page" />
                        </a>
                    </div>
                </div>}
                {firstProjectStatus === "first-image" && <div className="project-img">
                    <img src={PomodoroProjectSrc} alt="pomodoro timer" />
                </div>}
                {firstProjectStatus === "second-image" && <div className="project-img">
                    <img src={PomodoroProjectChartsSrc} alt="pomodoro charts" />
                </div>}
                <div className="tracking-balls">
                    <div className={firstProjectStatus === "info" ? "track-ball active-ball" : "track-ball"}></div>
                    <div className={firstProjectStatus === "first-image" ? "track-ball active-ball" : "track-ball"}></div>
                    <div className={firstProjectStatus === "second-image" ? "track-ball active-ball" : "track-ball"}></div>
                </div>
                <MdArrowBackIos className="go-back-image-button" onClick={() => handleBackImage(firstProjectStatus, 'first-project')} value={firstProjectStatus}>Image</MdArrowBackIos>
                <MdArrowForwardIos className="go-next-image-button" onClick={() => handleNextImage(firstProjectStatus, 'first-project')}>Image</MdArrowForwardIos>
            </div>
            <div className="project-container">
                <div className="tracking-balls">
                    <div className={secondProjectStatus === "info" ? "track-ball active-ball" : "track-ball"}></div>
                    <div className={secondProjectStatus === "first-image" ? "track-ball active-ball" : "track-ball"}></div>
                    <div className={secondProjectStatus === "second-image" ? "track-ball active-ball" : "track-ball"}></div>
                </div>
                {secondProjectStatus === 'info' && <div className="project-info">
                    <h3>Rental Car SPA</h3>
                    <p>This is a full responsive React single-page application (SPA) for a rental car website. Focused
                        only on the front-end part of the website.</p>
                    <div className="view-project-container">
                        <a
                            href="https://rentalcarproject.netlify.app/"
                            target="_blank"
                            rel="noreferrer">
                            <button className="view-project-button" title="Live demo website">View Project</button>
                        </a>
                        <a
                            className="gitpage"
                            href="https://github.com/FranciscoGontijo/Rental-car-website"
                            target="_blank"
                            rel="noreferrer">
                            <FaGithub className="social-icon" title="Github project page" />
                        </a>
                    </div>
                </div>}
                {secondProjectStatus === "first-image" && <div className="project-img">
                    <img src={RentalCarProjectSrc} alt="Rental car home page" />
                </div>}
                {secondProjectStatus === "second-image" && <div className="project-img">
                    <img src={RentalCarProjectFleetSrc} alt="Rental car home page fleet section" />
                </div>}
                <MdArrowBackIos className="go-back-image-button" onClick={() => handleBackImage(secondProjectStatus, 'second-project')}>Image</MdArrowBackIos>
                <MdArrowForwardIos className="go-next-image-button" onClick={() => handleNextImage(secondProjectStatus, 'second-project')}>Image</MdArrowForwardIos>
            </div>
            <div className="project-container">
                <div className="tracking-balls">
                    <div className={thirdProjectStatus === "info" ? "track-ball active-ball" : "track-ball"}></div>
                    <div className={thirdProjectStatus === "first-image" ? "track-ball active-ball" : "track-ball"}></div>
                    <div className={thirdProjectStatus === "second-image" ? "track-ball active-ball" : "track-ball"}></div>
                </div>
                {thirdProjectStatus === 'info' && <div className="project-info">
                    <h3>E-Commerce website</h3>
                    <p>Coming soon: Clothes store webpage. Using TypeScript and Next.JS</p>
                    <div className="view-project-container">
                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer">
                            <button className="view-project-button" title="Live demo website">View Project</button>
                        </a>
                        <a
                            className="gitpage"
                            href="https://github.com/FranciscoGontijo/Rental-car-website"
                            target="_blank"
                            rel="noreferrer">
                            <FaGithub className="social-icon" title="Github project page" />
                        </a>
                    </div>
                </div>}
                {thirdProjectStatus === "first-image" && <div className="project-img">
                    <img src={PomodoroProjectSrc} alt="project" />
                </div>}
                {thirdProjectStatus === "second-image" && <div className="project-img">
                    <img src={RentalCarProjectSrc} alt="project" />
                </div>}
                <MdArrowBackIos className="go-back-image-button" onClick={() => handleBackImage(thirdProjectStatus, 'third-project')}>Image</MdArrowBackIos>
                <MdArrowForwardIos className="go-next-image-button" onClick={() => handleNextImage(thirdProjectStatus, 'third-project')}>Image</MdArrowForwardIos>
            </div>
        </section>
    )
};

export default MobileDisplayProjects;