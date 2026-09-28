import React from "react";

import "./studyprojects.css";

//import icons from react icons
import { FaGithub } from 'react-icons/fa';

import TechList from "./TechList";
import { studyProjects } from "../../data/data";
import { useLanguage } from "../../i18n/LanguageContext";

// Projetos de 2023, em cards menores: mostram o caminho de aprendizado sem competir com Merge e QuadraON.
const StudyProjects = () => {
    const { t } = useLanguage();

    return (
        <section className="study-projects">
            <h3>{t.projects.studyTitle}</h3>
            <p className="study-intro">{t.projects.studyIntro}</p>
            <div className="study-grid">
                {studyProjects.map(project => (
                    <article key={project.id} className="study-card">
                        <img src={project.image} alt={project.name} />
                        <div className="study-card-body">
                            <h4>{project.name}</h4>
                            <p>{t.projects.study[project.id]}</p>
                            <TechList items={project.stack} />
                            <div className="study-links">
                                <a href={project.site} target="_blank" rel="noreferrer">{t.projects.viewSite}</a>
                                <a href={project.github} target="_blank" rel="noreferrer"
                                    aria-label={t.projects.github} title={t.projects.github}>
                                    <FaGithub className="social-icon" />
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
};

export default StudyProjects;
