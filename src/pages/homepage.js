import React, { useState, useEffect } from "react";

//import Util functions 
import useWindowSize from "../util/useWindowSize";

//import components
import HeroBannerMobile from "../components/mobileherobanner/mobileherobanner";
import MobileDisplayProjects from "../components/mobileprojects/mobileprojects";
import HeroBanner from "../components/herobanner/herobanner";
import Projects from "../components/projects/projects";


import "./homepage.css";


const HomePage = () => {
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
        <div>
            {display === 'mobile' && <HeroBannerMobile />}
            {display === 'mobile' && <MobileDisplayProjects />}
            {display === 'desktop' && <HeroBanner />}
            {display === 'desktop' && <Projects />}
        </div>
    )
};

export default HomePage;
    