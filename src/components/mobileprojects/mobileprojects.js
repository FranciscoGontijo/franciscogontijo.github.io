import React, { useState } from "react";

//import CSS
import "./mobileprojects.css";

//import images 
import PomodoroProjectSrc from "../../assets/images/Pomodoro Project.png";
import PomodoroProjectChartsSrc from "../../assets/images/Pomodoro Stats.png";
import RentalCarProjectSrc from "../../assets/images/Rental Car.png";
import RentalCarProjectFleetSrc from "../../assets/images/RentalCar Fleet Section.png";
import AustralProjectStoreSrc from "../../assets/images/Austral Store Page.png";
import AustralProjectShoppingCartSrc from "../../assets/images/Austral Shopping Cart.png";
import QuadraONPlayerMainSrc from "../../assets/images/QuadraON Player Main.png";
import QuadraONPlayerBookingsSrc from "../../assets/images/QuadraON Player Bookings.png";


//import icons from react icons
import { MdArrowBackIos } from 'react-icons/md';
import { MdArrowForwardIos } from "react-icons/md";
import { FaGithub } from 'react-icons/fa';

const MobileDisplayProjects = () => {
    const [firstProjectIndex, setFirstProjectIndex] = useState(0);
    const [secondProjectIndex, setSecondProjectIndex] = useState(0);
    const [thirdProjectIndex, setThirdProjectIndex] = useState(0);
    const [fourthProjectIndex, setFourthProjectIndex] = useState(0);

    const handleNextImage = (project) => {
        if (project === 'First Project') {
            setFirstProjectIndex(lastIndex => lastIndex < 2 ? ++lastIndex : lastIndex = 0);
        }
        if (project === 'Second Project') {
            setSecondProjectIndex(lastIndex => lastIndex < 2 ? ++lastIndex : lastIndex = 0);
        }
        if (project === 'Third Project') {
            setThirdProjectIndex(lastIndex => lastIndex < 2 ? ++lastIndex : lastIndex = 0);
        }
        if (project === 'Fourth Project') {
            setFourthProjectIndex(lastIndex => lastIndex < 2 ? ++lastIndex : lastIndex = 0);
        }
    };

    const handleBackImage = (project) => {
        if (project === 'First Project') {
            setFirstProjectIndex(lastIndex => lastIndex > 0 ? --lastIndex : lastIndex = 2);
        }
        if (project === 'Second Project') {
            setSecondProjectIndex(lastIndex => lastIndex > 0 ? --lastIndex : lastIndex = 2);
        }
        if (project === 'Third Project') {
            setThirdProjectIndex(lastIndex => lastIndex > 0 ? --lastIndex : lastIndex = 2);
        }
        if (project === 'Fourth Project') {
            setFourthProjectIndex(lastIndex => lastIndex > 0 ? --lastIndex : lastIndex = 2);
        }
    };

    return (
        <section className="mobile-projects-container">
            <div className="project-title">
                <h2>Projects</h2>
                <div className="bar"></div>
            </div>
            <div className="project-container">

                {firstProjectIndex === 0 &&
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
                                href="https://github.com/FranciscoGontijo/pomodoro-project"
                                target="_blank"
                                rel="noreferrer">
                                <FaGithub className="social-icon" title="Github project page" />
                            </a>
                        </div>
                    </div>}
                {firstProjectIndex === 1 &&
                    <div className="project-img">
                        <img src={QuadraONPlayerMainSrc} alt="QuadraON Saas player main page" />
                    </div>
                }
                {firstProjectIndex === 2 &&
                    <div className="project-img">
                        <img src={QuadraONPlayerBookingsSrc} alt="QuadraON Saas player bookings page" />
                    </div>
                }

                <div className="tracking-balls">
                    <div className={firstProjectIndex === 0 ? "track-ball active-ball" : "track-ball"}></div>
                    <div className={firstProjectIndex === 1 ? "track-ball active-ball" : "track-ball"}></div>
                    <div className={firstProjectIndex === 2 ? "track-ball active-ball" : "track-ball"}></div>
                </div>

                <MdArrowBackIos className="go-back-image-button" onClick={() => handleBackImage('First Project')} value={firstProjectIndex}>Image</MdArrowBackIos>
                <MdArrowForwardIos className="go-next-image-button" onClick={() => handleNextImage('First Project')}>Image</MdArrowForwardIos>

            </div>

            <div className="project-container">

                <div className="tracking-balls">
                    <div className={secondProjectIndex === 0 ? "track-ball active-ball" : "track-ball"}></div>
                    <div className={secondProjectIndex === 1 ? "track-ball active-ball" : "track-ball"}></div>
                    <div className={secondProjectIndex === 2 ? "track-ball active-ball" : "track-ball"}></div>
                </div>
                {secondProjectIndex === 0 && <div className="project-info">
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
                            rel="noreferrer">
                            <FaGithub className="social-icon" title="Github project page" />
                        </a>
                    </div>
                </div>}
                {secondProjectIndex === 1 && <div className="project-img">
                    <img src={RentalCarProjectSrc} alt="Rental car home page" />
                </div>}
                {secondProjectIndex === 2 && <div className="project-img">
                    <img src={RentalCarProjectFleetSrc} alt="Rental car home page fleet section" />
                </div>}
                <MdArrowBackIos className="go-back-image-button" onClick={() => handleBackImage('Second Project')}>Image</MdArrowBackIos>
                <MdArrowForwardIos className="go-next-image-button" onClick={() => handleNextImage('Second Project')}>Image</MdArrowForwardIos>
            </div>

            <div className="project-container">
                <div className="tracking-balls">
                    <div className={thirdProjectIndex === 0 ? "track-ball active-ball" : "track-ball"}></div>
                    <div className={thirdProjectIndex === 1 ? "track-ball active-ball" : "track-ball"}></div>
                    <div className={thirdProjectIndex === 2 ? "track-ball active-ball" : "track-ball"}></div>
                </div>
                {thirdProjectIndex === 0 && 
                <div className="project-info">
                    <h3>Austral Project</h3>
                    <p>Project of a store to showcase the use of Next.js, React, Redux, and TypeScript. This project demonstrates my expertise in utilizing these technologies for creating responsive website with efficient state management, and type-safe programming.</p>
                    <div className="view-project-container">
                        <a
                            href="https://austral-project.vercel.app/"
                            target="_blank"
                            rel="noreferrer">
                            <button className="view-project-button" title="Live demo website">View Project</button>
                        </a>
                        <a
                            className="gitpage"
                            href="https://github.com/FranciscoGontijo/Austral-Project"
                            target="_blank"
                            rel="noreferrer">
                            <FaGithub className="social-icon" title="Github project page" />
                        </a>
                    </div>
                </div>}
                {thirdProjectIndex === 1 && <div className="project-img">
                    <img src={AustralProjectStoreSrc} alt="project" />
                </div>}
                {thirdProjectIndex === 2 && <div className="project-img">
                    <img src={AustralProjectShoppingCartSrc} alt="project" />
                </div>}
                <MdArrowBackIos className="go-back-image-button" onClick={() => handleBackImage('Third Project')}>Image</MdArrowBackIos>
                <MdArrowForwardIos className="go-next-image-button" onClick={() => handleNextImage('Third Project')}>Image</MdArrowForwardIos>
            </div>

            <div className="project-container">

                {fourthProjectIndex === 0 &&
                    <div className="project-info">
                        <h3>Pomodoro project</h3>
                        <p>This project is a responsive React application that features a Pomodoro timer with settings and
                            statistics for the user. The application showcases the use of a range of front-end and back-end
                            tools and libraries as React, Redux, AWS Cognito, Express, Mongoose, Axios, Chart.js and Moment</p>
                        <div className="view-project-container">
                            <a
                                href="https://pomodoroapp-nu.vercel.app/"
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
                {fourthProjectIndex === 1 &&
                    <div className="project-img">
                        <img src={PomodoroProjectSrc} alt="pomodoro timer" />
                    </div>
                }
                {fourthProjectIndex === 2 &&
                    <div className="project-img">
                        <img src={PomodoroProjectChartsSrc} alt="pomodoro charts" />
                    </div>
                }

                <div className="tracking-balls">
                    <div className={fourthProjectIndex === 0 ? "track-ball active-ball" : "track-ball"}></div>
                    <div className={fourthProjectIndex === 1 ? "track-ball active-ball" : "track-ball"}></div>
                    <div className={fourthProjectIndex === 2 ? "track-ball active-ball" : "track-ball"}></div>
                </div>

                <MdArrowBackIos className="go-back-image-button" onClick={() => handleBackImage('Fourth Project')} value={fourthProjectIndex}>Image</MdArrowBackIos>
                <MdArrowForwardIos className="go-next-image-button" onClick={() => handleNextImage('Fourth Project')}>Image</MdArrowForwardIos>

            </div>
        </section>
    )
};

export default MobileDisplayProjects;