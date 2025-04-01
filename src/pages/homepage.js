import React, { useState, useEffect } from "react";

//import Util functions 
import useWindowSize from "../util/useWindowSize";

//import components
import HeroBannerMobile from "../components/mobileherobanner/mobileherobanner";
import MobileDisplayProjects from "../components/mobileprojects/mobileprojects";
import HeroBanner from "../components/herobanner/herobanner";
import Projects from "../components/projects/newProjects";

//import CSS
import "./homepage.css";


const HomePage = () => {
    const screenSize = useWindowSize();
    const [display, setDisplay] = useState('laptop');

    useEffect(() => {
        if (screenSize === 0) {
            return
        }
        if (screenSize.width > 800) {
            setDisplay('laptop');
        }
        if (screenSize.width <= 800) {
            setDisplay('mobile');
        }
    }, [screenSize]);

    return (
        <div>
            {display === 'mobile' && <HeroBannerMobile />}
            {display === 'mobile' && <MobileDisplayProjects />}
            {display === 'laptop' && <HeroBanner />}
            {display === 'laptop' && <Projects />}
        </div>
    )
};

export default HomePage;
    