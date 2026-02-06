import React, { useState } from 'react';
import { ArrowRight, Box, Server, Database, Globe, Shield, Activity } from 'lucide-react';
import './Projects.css';

const projects = [
    {
        id: 1,
        title: "Global Payment API & MFT Architecture",
        client: "JPMorgan Chase & Co",
        description: "Designed large-scale payment APIs and Managed File Transfer (MFT) systems enabling secure data exchange. Implemented data localization for RBI compliance.",
        tags: ["WebMethods", "API Gateway", "Java", "Oracle"],
        diagramType: "payment-flow"
    },
    {
        id: 2,
        title: "Azure to WebMethods Migration",
        client: "CGI (Telecom Client)",
        description: "Led the migration of critical EDI integration flows from Azure IPaaS to WebMethods. Established Trading Networks for ANSI X12 & RosettaNet documents.",
        tags: ["Azure IPaaS", "WebMethods", "EDI", "Migrator"],
        diagramType: "migration-flow"
    },
    {
        id: 3,
        title: "Banking Gateway CI/CD Optimization",
        client: "Standard Chartered Bank",
        description: "Built automated CI/CD pipelines using Jenkins and Git for banking gateway clearance systems, reducing release cycle time by 40%.",
        tags: ["Jenkins", "Git", "DevOps", "Automation"],
        diagramType: "cicd-flow"
    }
];

const Projects = () => {
    const [activeProject, setActiveProject] = useState(projects[0].id);

    return (
        <div className="projects-page container">
            <h2 className="section-title">Key Projects & Architecture</h2>
            <div className="projects-layout">
                <div className="project-list">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`project-card glass-card ${activeProject === project.id ? 'active' : ''}`}
                            onClick={() => setActiveProject(project.id)}
                        >
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-client">{project.client}</p>
                            <p className="project-desc">{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                            </div>
                            <div className="active-indicator">
                                <ArrowRight size={20} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="project-visualization glass-card">
                    <DiagramRenderer type={projects.find(p => p.id === activeProject).diagramType} />
                </div>
            </div>
        </div>
    );
};

const DiagramRenderer = ({ type }) => {
    if (type === 'payment-flow') return <PaymentFlowDiagram />;
    if (type === 'migration-flow') return <MigrationFlowDiagram />;
    if (type === 'cicd-flow') return <CicdFlowDiagram />;
    return <div>Select a project to view architecture</div>;
};

// --- Diagrams ---

const PaymentFlowDiagram = () => (
    <div className="diagram-container">
        <h4 className="diagram-title">Secure Payment Integration Flow</h4>
        <div className="flow-row">
            <Node icon={<Globe />} label="Client App" />
            <Arrow />
            <Node icon={<Shield />} label="API Gateway" highlight />
            <Arrow />
            <Node icon={<Activity />} label="Payment Service" />
        </div>
        <div className="flow-vertical-connector"></div>
        <div className="flow-row bottom-row">
            <Node icon={<Database />} label="Data Compliance (RBI)" />
            <div style={{ width: '50px' }}></div>
            <Node icon={<Server />} label="MFT Server" />
            <Arrow />
            <Node icon={<Box />} label="External Bank" />
        </div>
    </div>
);

const MigrationFlowDiagram = () => (
    <div className="diagram-container">
        <h4 className="diagram-title">Azure to WebMethods Migration</h4>
        <div className="flow-row">
            <div className="cloud-box azure">
                <span className="cloud-label">Legacy Azure</span>
                <Node icon={<Activity />} label="Logic Apps" />
            </div>
            <Arrow label="Migration" dashed />
            <div className="cloud-box webmethods">
                <span className="cloud-label">New WebMethods</span>
                <div className="flow-row compact">
                    <Node icon={<Server />} label="Integration Server" highlight />
                    <Node icon={<Database />} label="Trading Networks" />
                </div>
            </div>
        </div>
        <div className="flow-row" style={{ marginTop: '20px' }}>
            <Arrow dir="down" />
        </div>
        <div className="flow-row">
            <Node icon={<Globe />} label="Partners (EDI X12)" />
        </div>
    </div>
);

const CicdFlowDiagram = () => (
    <div className="diagram-container">
        <h4 className="diagram-title">CI/CD Automation Pipeline</h4>
        <div className="pipeline-track">
            <Stage label="Code" icon={<Activity />} />
            <Connector />
            <Stage label="Build" icon={<Box />} />
            <Connector />
            <Stage label="Test" icon={<Shield />} />
            <Connector />
            <Stage label="Deploy" icon={<Server />} highlight />
        </div>
        <div className="pipeline-metrics">
            <div className="metric">
                <span className="metric-val">-40%</span>
                <span className="metric-label">Release Time</span>
            </div>
            <div className="metric">
                <span className="metric-val">Zero</span>
                <span className="metric-label">Downtime</span>
            </div>
        </div>
    </div>
);

const Node = ({ icon, label, highlight }) => (
    <div className={`flow-node ${highlight ? 'highlight' : ''}`}>
        <div className="node-icon">{icon}</div>
        <span className="node-label">{label}</span>
    </div>
);

const Arrow = ({ label, dashed, dir = "right" }) => (
    <div className={`flow-arrow ${dashed ? 'dashed' : ''} ${dir}`}>
        <div className="arrow-line"></div>
        <div className="arrow-head"></div>
        {label && <span className="arrow-label">{label}</span>}
    </div>
);

const Stage = ({ label, icon, highlight }) => (
    <div className={`pipeline-stage ${highlight ? 'highlight' : ''}`}>
        <div className="stage-icon">{icon}</div>
        <span className="stage-name">{label}</span>
    </div>
);

const Connector = () => <div className="pipeline-connector"></div>;

export default Projects;
