import React, { useState } from "react";

//import CSS stylesheet
import "./projects.css";

//import icons from react icons
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

//import images 
import { firstProjectImages, secondProjectImages, thirdProjectImages, fourthProjectImages } from "../../data/data";

const Projects = () => {
    const [firstProjectIndex, setFirstProjectIndex] = useState(0);
    const [secondProjectIndex, setSecondProjectIndex] = useState(0);
    const [thirdProjectIndex, setThirdProjectIndex] = useState(0);
    const [fourthProjectIndex, setFourthProjectIndex] = useState(0);

    const handleNextImage = (project) => {
        console.log('next image');
        if (project === 'First Project') {
            setFirstProjectIndex(lastIndex => lastIndex < 2 ? ++lastIndex : lastIndex = 0);
            console.log(firstProjectIndex);
        }
        if (project === 'Second Project') {
            setSecondProjectIndex(lastIndex => lastIndex < 2 ? ++lastIndex : lastIndex = 0);
            console.log(secondProjectIndex);
        }
        if (project === 'Third Project') {
            setThirdProjectIndex(lastIndex => lastIndex < 2 ? ++lastIndex : lastIndex = 0);
            console.log(thirdProjectIndex);
        }
        if (project === 'Fourth Project') {
            setFourthProjectIndex(lastIndex => lastIndex < 2 ? ++lastIndex : lastIndex = 0);
            console.log(fourthProjectIndex);
        }
    };

    const handleBackImage = (project) => {
        if (project === 'First Project') {
            setFirstProjectIndex(lastIndex => lastIndex > 0 ? --lastIndex : lastIndex = 2);
            console.log(firstProjectIndex);
        }
        if (project === 'Second Project') {
            setSecondProjectIndex(lastIndex => lastIndex > 0 ? --lastIndex : lastIndex = 2);
            console.log(secondProjectIndex);
        }
        if (project === 'Third Project') {
            setThirdProjectIndex(lastIndex => lastIndex > 0 ? --lastIndex : lastIndex = 2);
            console.log(thirdProjectIndex);
        }
        if (project === 'Fourth Project') {
            setFourthProjectIndex(lastIndex => lastIndex > 0 ? --lastIndex : lastIndex = 2);
            console.log(fourthProjectIndex);
        }
    };

    return (
        <section className="projects-container">
            <div className="project-title">
                <h2>Projects</h2>
                <div className="bar"></div>
            </div>

            <div className="each-project-container">
                <div className="project-info">
                    <h3>QuadraON</h3>
                    <p>
                        QuadraON is a full-stack court booking management application designed for sports facilities and players to easily manage and reserve courts in their city. Built with Next.js 14 and TypeScript, it delivers a modern, responsive, and accessible experience across all devices. The frontend utilizes <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>react-hook-form</strong> for smooth UI interactions and form handling, with <strong>Zod</strong> providing robust schema validation.
                    </p>
                    <p>
                        On the backend, quadraON is powered by <strong>Prisma ORM</strong> and a <strong>MongoDB</strong> database, providing a clean and scalable data layer. Authentication and user management are handled via <strong>Clerk</strong>, enabling secure login flows, conditional forms for guests vs. logged-in users, and ownership access controls.
                    </p>
                    <div className="view-project-container">
                        <a
                            href="https://quadraon.com.br/"
                            target="_blank"
                            rel="noreferrer">
                            <button className="view-project-button" title="Live demo website">View Project</button>
                        </a>
                        <a
                            className="gitpage"
                            href="https://github.com/fernandobd42/courts-management-app"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub className="social-icon" title="Github project page" />
                        </a>
                    </div>
                </div>
                <div className="project-img">
                    <img src={firstProjectImages[firstProjectIndex].imageUrl} alt={firstProjectImages[firstProjectIndex.alt]} />
                    <MdArrowBackIos className="go-back-image-button" onClick={() => handleBackImage('First Project')} />
                    <div className="tracking-balls">
                        <div className={firstProjectIndex === 0 ? "track-ball active-ball" : "track-ball"}></div>
                        <div className={firstProjectIndex === 1 ? "track-ball active-ball" : "track-ball"}></div>
                        <div className={firstProjectIndex === 2 ? "track-ball active-ball" : "track-ball"}></div>
                    </div>
                    <MdArrowForwardIos className="go-next-image-button" onClick={() => handleNextImage('First Project')}>Image</MdArrowForwardIos>
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
                    <img src={secondProjectImages[secondProjectIndex].imageUrl} alt={secondProjectImages[secondProjectIndex.alt]} />
                    <MdArrowBackIos className="go-back-image-button" onClick={() => handleBackImage('Second Project')}>Image</MdArrowBackIos>
                    <div className="tracking-balls">
                        <div className={secondProjectIndex === 0 ? "track-ball active-ball" : "track-ball"}></div>
                        <div className={secondProjectIndex === 1 ? "track-ball active-ball" : "track-ball"}></div>
                        <div className={secondProjectIndex === 2 ? "track-ball active-ball" : "track-ball"}></div>
                    </div>
                    <MdArrowForwardIos className="go-next-image-button" onClick={() => handleNextImage('Second Project')}>Image</MdArrowForwardIos>
                </div>
            </div>

            <div className="each-project-container">
                <div className="project-info">
                    <h3>Pomodoro project</h3>
                    <p>This project is a responsive React application that features a Pomodoro timer with settings and
                        statistics for the user. The application showcases the use of a range of front-end and back-end
                        tools and libraries as React, Redux, AWS Cognito, Express, Mongoose, Axios, Chart.js and Moment</p>
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
                    <img src={thirdProjectImages[thirdProjectIndex].imageUrl} alt={thirdProjectImages[thirdProjectIndex.alt]} />
                    <MdArrowBackIos className="go-back-image-button" onClick={() => handleBackImage('Third Project')}>Image</MdArrowBackIos>
                    <div className="tracking-balls">
                        <div className={thirdProjectIndex === 0 ? "track-ball active-ball" : "track-ball"}></div>
                        <div className={thirdProjectIndex === 1 ? "track-ball active-ball" : "track-ball"}></div>
                        <div className={thirdProjectIndex === 2 ? "track-ball active-ball" : "track-ball"}></div>
                    </div>
                    <MdArrowForwardIos className="go-next-image-button" onClick={() => handleNextImage('Third Project')}>Image</MdArrowForwardIos>
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
                    <img src={fourthProjectImages[fourthProjectIndex].imageUrl} alt={fourthProjectImages[fourthProjectIndex.alt]} />
                    <MdArrowBackIos className="go-back-image-button" onClick={() => handleBackImage('Fourth Project')} />
                    <div className="tracking-balls">
                        <div className={fourthProjectIndex === 0 ? "track-ball active-ball" : "track-ball"}></div>
                        <div className={fourthProjectIndex === 1 ? "track-ball active-ball" : "track-ball"}></div>
                        <div className={fourthProjectIndex === 2 ? "track-ball active-ball" : "track-ball"}></div>
                    </div>
                    <MdArrowForwardIos className="go-next-image-button" onClick={() => handleNextImage('Fourth Project')}>Image</MdArrowForwardIos>
                </div>
            </div>
        </section>
    )
};

export default Projects;