import React, { useState } from "react";

//import CSS
import "./mobileprojects.css";

//import icons from react icons
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

//import components
import MergeDiagram from "../projects/MergeDiagram";
import StudyProjects from "../projects/StudyProjects";
import TechList from "../projects/TechList";

//import data
import { mergeStack, quadraON } from "../../data/data";
import { useLanguage } from "../../i18n/LanguageContext";

// No celular, cada card mostra um slide por vez: primeiro o texto, depois as imagens ou o diagrama.
const MobileProjectCard = ({ slides }) => {
    const { t } = useLanguage();
    const [index, setIndex] = useState(0);
    const last = slides.length - 1;
    const ballsWidth = slides.length * 30;

    return (
        <div className="project-container">
            {slides[index]}

            <div className="tracking-balls" style={{
                gridTemplateColumns: `repeat(${slides.length}, 1fr)`,
                width: `${ballsWidth}px`,
                marginLeft: `-${ballsWidth / 2}px`
            }}>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} className={slideIndex === index ? "track-ball active-ball" : "track-ball"}></div>
                ))}
            </div>

            <button className="carousel-button go-back-image-button" aria-label={t.projects.previous}
                onClick={() => setIndex(current => current > 0 ? current - 1 : last)}>
                <MdArrowBackIos />
            </button>
            <button className="carousel-button go-next-image-button" aria-label={t.projects.next}
                onClick={() => setIndex(current => current < last ? current + 1 : 0)}>
                <MdArrowForwardIos />
            </button>
        </div>
    )
};

const MobileDisplayProjects = () => {
    const { language, t } = useLanguage();
    const merge = t.projects.merge;
    const quadra = t.projects.quadraon;

    const mergeSlides = [
        <div className="project-info">
            <h3>Merge</h3>
            <p className="project-meta">{merge.meta}</p>
            <p>{merge.intro}</p>
            <h4>{merge.highlightsTitle}</h4>
            <ul className="highlights">
                {merge.highlights.map(highlight => (
                    <li key={highlight.title}><strong>{highlight.title}</strong> {highlight.text}</li>
                ))}
            </ul>
            <TechList items={mergeStack} />
            <p className="project-note">{merge.note}</p>
        </div>,
        <div className="project-img project-diagram">
            <MergeDiagram labels={merge.diagram} />
        </div>
    ];

    const quadraSlides = [
        <div className="project-info">
            <h3>QuadraON</h3>
            <p className="project-meta">{quadra.meta}</p>
            {quadra.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            <TechList items={quadraON.stack} />
            <div className="view-project-container">
                <a className="view-project-button" href={quadraON.site} target="_blank" rel="noreferrer">
                    {t.projects.viewSite}
                </a>
            </div>
        </div>,
        ...quadraON.images.map(image => (
            <div className="project-img">
                <img src={image.imageUrl} alt={image.alt[language]} />
            </div>
        ))
    ];

    return (
        <section className="mobile-projects-container">
            <div className="project-title">
                <h2>{t.projects.title}</h2>
                <div className="bar"></div>
            </div>
            <MobileProjectCard slides={mergeSlides} />
            <MobileProjectCard slides={quadraSlides} />
            <StudyProjects />
        </section>
    )
};

export default MobileDisplayProjects;
