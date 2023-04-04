import React, { useState } from "react";

import "./projects.css";

//import images 
import PomodoroProjectSrc from "../../assets/images/Pomodoro Project.png";
import RentalCarProjectSrc from "../../assets/images/Rental Car.png";

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
                setSecondProjectStatus('first-image');
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
                setThirdProjectStatus('first-image');
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
                    <div className="view-project-div">
                        <a href="https://quickstopwatch.netlify.app/" target="_blank"><button
                            className="view-project-button">View Project</button></a>
                        <a className="gitpage" href="https://github.com/FranciscoGontijo/pomodoro-project" target="_blank">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
                <div className="project-img">
                    {firstProjectStatus === "first-image" && <img src={PomodoroProjectSrc} alt="pomodoro timer" />}
                    {firstProjectStatus === "second-image" && <img src={PomodoroProjectSrc} alt="pomodoro timer" />}
                    {firstProjectStatus === "third-image" && <img src={PomodoroProjectSrc} alt="pomodoro timer" />}
                    <button className="go-back-image-button" onClick={() => handleBackImage(firstProjectStatus, 'first-project')}>Image</button>
                    <div className="tracking-balls">
                        <div className={firstProjectStatus === "first-image" ? "track-ball active-ball" : "track-ball"}></div>
                        <div className={firstProjectStatus === "second-image" ? "track-ball active-ball" : "track-ball"}></div>
                        <div className={firstProjectStatus === "third-image" ? "track-ball active-ball" : "track-ball"}></div>
                    </div>
                    <button className="go-next-image-button" onClick={() => handleNextImage(firstProjectStatus, 'first-project')}>Image</button>
                </div>
            </div>
            <div className="each-project-container">
                <div className="project-info">
                    <h3>Pomodoro project</h3>
                    <p>This project is a responsive React application that features a Pomodoro timer with settings and
                        statistics for the user. The application showcases the use of a range of front-end and back-end
                        tools and libraries as React, Redux, AWS Cognito, Mongoose, Axios, Chart.js and Moment</p>
                    <div className="view-project-div">
                        <a href="https://quickstopwatch.netlify.app/" target="_blank"><button
                            className="view-project-button">View Project</button></a>
                        <a className="gitpage" href="https://github.com/FranciscoGontijo/pomodoro-project" target="_blank">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
                <div className="project-img">
                    {secondProjectStatus === "first-image" && <img src={PomodoroProjectSrc} alt="pomodoro timer" />}
                    {secondProjectStatus === "second-image" && <img src={PomodoroProjectSrc} alt="pomodoro timer" />}
                    {secondProjectStatus === "third-image" && <img src={PomodoroProjectSrc} alt="pomodoro timer" />}
                    <button className="go-back-image-button" onClick={() => handleBackImage(secondProjectStatus, 'first-project')}>Image</button>
                    <div className="tracking-balls">
                        <div className={secondProjectStatus === "first-image" ? "track-ball active-ball" : "track-ball"}></div>
                        <div className={secondProjectStatus === "second-image" ? "track-ball active-ball" : "track-ball"}></div>
                        <div className={secondProjectStatus === "third-image" ? "track-ball active-ball" : "track-ball"}></div>
                    </div>
                    <button className="go-next-image-button" onClick={() => handleNextImage(secondProjectStatus, 'first-project')}>Image</button>
                </div>
            </div>
            <div className="each-project-container">
                <div className="project-info">
                    <h3>Pomodoro project</h3>
                    <p>This project is a responsive React application that features a Pomodoro timer with settings and
                        statistics for the user. The application showcases the use of a range of front-end and back-end
                        tools and libraries as React, Redux, AWS Cognito, Mongoose, Axios, Chart.js and Moment</p>
                    <div className="view-project-div">
                        <a href="https://quickstopwatch.netlify.app/" target="_blank"><button
                            className="view-project-button">View Project</button></a>
                        <a className="gitpage" href="https://github.com/FranciscoGontijo/pomodoro-project" target="_blank">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
                <div className="project-img">
                    {thirdProjectStatus === "first-image" && <img src={PomodoroProjectSrc} alt="pomodoro timer" />}
                    {thirdProjectStatus === "second-image" && <img src={PomodoroProjectSrc} alt="pomodoro timer" />}
                    {thirdProjectStatus === "third-image" && <img src={PomodoroProjectSrc} alt="pomodoro timer" />}
                    <button className="go-back-image-button" onClick={() => handleBackImage(thirdProjectStatus, 'first-project')}>Image</button>
                    <div className="tracking-balls">
                        <div className={thirdProjectStatus === "first-image" ? "track-ball active-ball" : "track-ball"}></div>
                        <div className={thirdProjectStatus === "second-image" ? "track-ball active-ball" : "track-ball"}></div>
                        <div className={thirdProjectStatus === "third-image" ? "track-ball active-ball" : "track-ball"}></div>
                    </div>
                    <button className="go-next-image-button" onClick={() => handleNextImage(thirdProjectStatus, 'first-project')}>Image</button>
                </div>
            </div>
        </section>
    )
};

export default Projects;