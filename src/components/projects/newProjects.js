import React, { useState } from "react";

//import CSS stylesheet
import "./projects.css";

//import icons from react icons
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

//import components
import MergeDiagram from "./MergeDiagram";
import StudyProjects from "./StudyProjects";
import TechList from "./TechList";

//import data
import { mergeStack, quadraON } from "../../data/data";
import { useLanguage } from "../../i18n/LanguageContext";

const ImageCarousel = ({ images }) => {
    const { language, t } = useLanguage();
    const [index, setIndex] = useState(0);
    const last = images.length - 1;

    return (
        <div className="project-img">
            <img src={images[index].imageUrl} alt={images[index].alt[language]} />
            <button className="carousel-button go-back-image-button" aria-label={t.projects.previous}
                onClick={() => setIndex(current => current > 0 ? current - 1 : last)}>
                <MdArrowBackIos />
            </button>
            <div className="tracking-balls">
                {images.map((image, imageIndex) => (
                    <div key={image.imageUrl} className={imageIndex === index ? "track-ball active-ball" : "track-ball"}></div>
                ))}
            </div>
            <button className="carousel-button go-next-image-button" aria-label={t.projects.next}
                onClick={() => setIndex(current => current < last ? current + 1 : 0)}>
                <MdArrowForwardIos />
            </button>
        </div>
    )
};

const Projects = () => {
    const { t } = useLanguage();
    const merge = t.projects.merge;
    const quadra = t.projects.quadraon;

    return (
        <section className="projects-container">
            <div className="project-title">
                <h2>{t.projects.title}</h2>
                <div className="bar"></div>
            </div>

            <article className="each-project-container case-study">
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
                </div>
                <div className="project-img project-diagram">
                    <MergeDiagram labels={merge.diagram} />
                </div>
            </article>

            <article className="each-project-container">
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
                </div>
                <ImageCarousel images={quadraON.images} />
            </article>

            <StudyProjects />
        </section>
    )
};

export default Projects;
