import React from "react";

import "./techlist.css";

// Lista de tecnologias em "chips", usada nos cards de projeto.
const TechList = ({ items }) => {
    return (
        <ul className="tech-list">
            {items.map(item => <li key={item}>{item}</li>)}
        </ul>
    )
};

export default TechList;
