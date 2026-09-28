import React from "react";

import "./mergediagram.css";

// Arquitetura da Merge, desenhada à mão em SVG para caber na coluna do card (380px).
// Os textos vêm de content.js, então o diagrama troca de idioma junto com o site.

const schemas = [
    { name: "core", label: "core", x: 22 },
    { name: "merge_web", label: "mergeWeb", x: 136 },
    { name: "consultancies", label: "consultancies", x: 250 }
];

const services = [
    { name: "Clerk", label: "clerk", x: 10 },
    { name: "Pusher", label: "pusher", x: 134 },
    { name: "Asaas", label: "asaas", x: 258 }
];

const MergeDiagram = ({ labels }) => {
    return (
        <svg className="merge-diagram" viewBox="0 0 380 440" role="img" aria-labelledby="merge-diagram-title">
            <title id="merge-diagram-title">{labels.description}</title>
            <defs>
                <marker id="merge-diagram-arrow" viewBox="0 0 10 10" refX="9" refY="5"
                    markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" className="arrow-head" />
                </marker>
            </defs>

            {/* App do atleta */}
            <rect x="90" y="8" width="200" height="56" rx="12" className="box" />
            <text x="190" y="32" className="box-title">{labels.app}</text>
            <text x="190" y="51" className="box-info">{labels.appStack}</text>

            <path d="M 150 64 L 97 113" className="arrow" markerEnd="url(#merge-diagram-arrow)" />
            <path d="M 230 64 L 283 113" className="arrow" markerEnd="url(#merge-diagram-arrow)" />

            {/* As duas plataformas web */}
            <rect x="10" y="116" width="170" height="74" rx="12" className="box" />
            <text x="95" y="140" className="box-title">{labels.clubs}</text>
            <text x="95" y="159" className="box-tech">Next.js</text>
            <text x="95" y="177" className="box-info">{labels.clubsInfo}</text>

            <rect x="200" y="116" width="170" height="74" rx="12" className="box" />
            <text x="285" y="140" className="box-title">{labels.coaching}</text>
            <text x="285" y="159" className="box-tech">Next.js</text>
            <text x="285" y="177" className="box-info">{labels.coachingInfo}</text>

            <path d="M 95 190 L 95 233" className="arrow" markerEnd="url(#merge-diagram-arrow)" />
            <path d="M 285 190 L 285 233" className="arrow" markerEnd="url(#merge-diagram-arrow)" />

            {/* Um banco, um schema por produto */}
            <rect x="10" y="236" width="360" height="104" rx="12" className="box box-database" />
            <text x="190" y="262" className="box-title">{labels.database}</text>
            {schemas.map(schema => (
                <g key={schema.name}>
                    <rect x={schema.x} y="276" width="108" height="50" rx="8" className="schema" />
                    <text x={schema.x + 54} y="297" className="schema-name">{schema.name}</text>
                    <text x={schema.x + 54} y="315" className="schema-info">{labels[schema.label]}</text>
                </g>
            ))}

            {/* Serviços externos */}
            <text x="190" y="368" className="services-title">{labels.services}</text>
            {services.map(service => (
                <g key={service.name}>
                    <rect x={service.x} y="378" width="112" height="54" rx="10" className="box box-service" />
                    <text x={service.x + 56} y="401" className="box-title">{service.name}</text>
                    <text x={service.x + 56} y="420" className="box-info">{labels[service.label]}</text>
                </g>
            ))}
        </svg>
    )
};

export default MergeDiagram;
