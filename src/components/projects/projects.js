import React, { useState } from "react";

//import CSS stylesheet
import "./projects.css";

//import icons from react icons
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

//import images 
import PomodoroProjectMainSrc from "../../assets/images/Pomodoro Project.png";
import PomodoroProjectStatsSrc from "../../assets/images/Pomodoro Stats.png";
import PomodoroProjectSettingsSrc from "../../assets/images/Pomodoro Settings.png";
import RentalCarProjectMainSrc from "../../assets/images/Rental Car.png";
import RentalCarProjectFleetSrc from "../../assets/images/RentalCar Fleet Section.png";
import RentalCarProjectContactSrc from "../../assets/images/RentalCar Contact Section.png";
import AustralProjectStoreSrc from "../../assets/images/Austral Store Page.png";
import AustralProjectShoppingCartSrc from "../../assets/images/Austral Shopping Cart.png";
import AustralProjectAboutUsSrc from "../../assets/images/Austral About Page.png";

const Projects = () => {
    const [firstProjectStatus, setFirstProjectStatus] = useState('first-image');
    const [secondProjectStatus, setSecondProjectStatus] = useState('first-image');
    const [thirdProjectStatus, setThirdProjectStatus] = useState('first-image');

    const handleNextImage = (status, project) => {
        if (project === 'first-project') {
            if (status === 'first-image') {
                setFirstProjectStatus('second-image');
            };
            if (status === 'second-image') {
                setFirstProjectStatus('third-image');
            };
            if (status === 'third-image') {
                setFirstProjectStatus('first-image');
            }
        };
        if (project === 'second-project') {
            if (status === 'first-image') {
                setSecondProjectStatus('second-image');
            };
            if (status === 'second-image') {
                setSecondProjectStatus('third-image');
            };
            if (status === 'third-image') {
                setSecondProjectStatus('first-image');
            }
        };
        if (project === 'third-project') {
            if (status === 'first-image') {
                setThirdProjectStatus('second-image');
            };
            if (status === 'second-image') {
                setThirdProjectStatus('third-image');
            };
            if (status === 'third-image') {
                setThirdProjectStatus('first-image');
            }
        };
    };

    const handleBackImage = (status, project) => {
        if (project === 'first-project') {
            if (status === 'first-image') {
                setFirstProjectStatus('third-image');
            };
            if (status === 'second-image') {
                setFirstProjectStatus('first-image');
            };
            if (status === 'third-image') {
                setFirstProjectStatus('second-image');
            }
        };
        if (project === 'second-project') {
            if (status === 'first-image') {
                setSecondProjectStatus('third-image');
            };
            if (status === 'second-image') {
                setSecondProjectStatus('first-image');
            };
            if (status === 'third-image') {
                setSecondProjectStatus('second-image');
            }
        };
        if (project === 'third-project') {
            if (status === 'first-image') {
                setThirdProjectStatus('third-image');
            };
            if (status === 'second-image') {
                setThirdProjectStatus('first-image');
            };
            if (status === 'third-image') {
                setThirdProjectStatus('second-image');
            }
        };
    };

    return (
        <section className="projects-container">
            <div className="project-title">
                <h2>Projects</h2>
                <div className="bar"></div>
            </div>
            <div className="each-project-container">
                <div className="project-info">
                    <h3>Pomodoro project</h3>
                    <p>This project is a responsive React application that features a Pomodoro timer with settings and
                        statistics for the user. The application showcases the use of a range of front-end and back-end
                        tools and libraries as React, Redux, AWS Cognito, Mongoose, Axios, Chart.js and Moment</p>
                    <div className="view-project-container">
                        <a
                            href="https://pomodoroapp-nu.vercel.app/"
                            target="_blank" rel="noreferrer"
                        >
                            <button className="view-project-button" title="Live demo website">View Project</button>
                        </a>
                        <a
                            className="gitpage"
                            href="https://github.com/FranciscoGontijo/pomodoro-project"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub className="social-icon" title="Github project page" />
                        </a>
                    </div>
                </div>
                <div className="project-img">
                    {firstProjectStatus === "first-image" && <img src={PomodoroProjectMainSrc} alt="pomodoro timer" />}
                    {firstProjectStatus === "second-image" && <img src={PomodoroProjectStatsSrc} alt="pomodoro timer" />}
                    {firstProjectStatus === "third-image" && <img src={PomodoroProjectSettingsSrc} alt="pomodoro timer" />}
                    <MdArrowBackIos className="go-back-image-button" onClick={() => handleBackImage(firstProjectStatus, 'first-project')}>Image</MdArrowBackIos>
                    <div className="tracking-balls">
                        <div className={firstProjectStatus === "first-image" ? "track-ball active-ball" : "track-ball"}></div>
                        <div className={firstProjectStatus === "second-image" ? "track-ball active-ball" : "track-ball"}></div>
                        <div className={firstProjectStatus === "third-image" ? "track-ball active-ball" : "track-ball"}></div>
                    </div>
                    <MdArrowForwardIos className="go-next-image-button" onClick={() => handleNextImage(firstProjectStatus, 'first-project')}>Image</MdArrowForwardIos>
                </div>
            </div>
            <div className="each-project-container">
                <div className="project-info">
                    <h3>Rental Car SPA</h3>
                    <p>Project of a full responsive single-page application (SPA) using React for a rental car website. This project showcases my front-end expertise, delivering an intuitive and visually appealing user interface for exploring car rental options.</p>
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
                            rel="noreferrer"
                        >
                            <FaGithub className="social-icon" title="Github project page" />
                        </a>
                    </div>
                </div>
                <div className="project-img">
                    {secondProjectStatus === "first-image" && <img src={RentalCarProjectMainSrc} alt="Rental car project home page" />}
                    {secondProjectStatus === "second-image" && <img src={RentalCarProjectFleetSrc} alt="Rental car project home page fleet section" />}
                    {secondProjectStatus === "third-image" && <img src={RentalCarProjectContactSrc} alt="Rental car project contact page" />}
                    <MdArrowBackIos className="go-back-image-button" onClick={() => handleBackImage(secondProjectStatus, 'second-project')}>Image</MdArrowBackIos>
                    <div className="tracking-balls">
                        <div className={secondProjectStatus === "first-image" ? "track-ball active-ball" : "track-ball"}></div>
                        <div className={secondProjectStatus === "second-image" ? "track-ball active-ball" : "track-ball"}></div>
                        <div className={secondProjectStatus === "third-image" ? "track-ball active-ball" : "track-ball"}></div>
                    </div>
                    <MdArrowForwardIos className="go-next-image-button" onClick={() => handleNextImage(secondProjectStatus, 'second-project')}>Image</MdArrowForwardIos>
                </div>
            </div>
            <div className="each-project-container">
                <div className="project-info">
                    <h3>Austral Project</h3>
                    <p>Project of a store to showcase the use of Next.js, React, Redux, and TypeScript. This project demonstrates my expertise in utilizing these technologies for creating responsive website with efficient state management, and type-safe programming.</p>
                    <div className="view-project-container">
                        <a
                            href="https://austral-project.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button className="view-project-button" title="Live demo website">View Project</button>
                        </a>
                        <a
                            className="gitpage"
                            href="https://github.com/FranciscoGontijo/pomodoro-project"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub className="social-icon" title="Github project page" />
                        </a>
                    </div>
                </div>
                <div className="project-img">
                    {thirdProjectStatus === "first-image" && <img src={AustralProjectStoreSrc} alt="pomodoro timer" />}
                    {thirdProjectStatus === "second-image" && <img src={AustralProjectShoppingCartSrc} alt="pomodoro timer" />}
                    {thirdProjectStatus === "third-image" && <img src={AustralProjectAboutUsSrc} alt="pomodoro timer" />}
                    <MdArrowBackIos className="go-back-image-button" onClick={() => handleBackImage(thirdProjectStatus, 'third-project')}>Image</MdArrowBackIos>
                    <div className="tracking-balls">
                        <div className={thirdProjectStatus === "first-image" ? "track-ball active-ball" : "track-ball"}></div>
                        <div className={thirdProjectStatus === "second-image" ? "track-ball active-ball" : "track-ball"}></div>
                        <div className={thirdProjectStatus === "third-image" ? "track-ball active-ball" : "track-ball"}></div>
                    </div>
                    <MdArrowForwardIos className="go-next-image-button" onClick={() => handleNextImage(thirdProjectStatus, 'third-project')}>Image</MdArrowForwardIos>
                </div>
            </div>
        </section>
    )
};

export default Projects;