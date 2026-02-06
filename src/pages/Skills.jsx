import React from 'react';
import { Layers, Cloud, Globe, MessageSquare, Database, Terminal } from 'lucide-react';
import './Skills.css';

const skillData = [
    {
        category: "Integration Platforms",
        icon: <Layers size={28} />,
        skills: ["WebMethods 10.x", "AWS Integration", "Azure IPaaS", "Layer 7", "MuleSoft"]
    },
    {
        category: "Cloud & DevOps",
        icon: <Cloud size={28} />,
        skills: ["Azure Logic Apps", "Function Apps", "Service Bus", "AWS Lambda", "AWS SQS/SNS", "Docker", "Jenkins", "Git", "CI/CD"]
    },
    {
        category: "API Development",
        icon: <Globe size={28} />,
        skills: ["AWS API Gateway", "Apigee", "Policy Manager", "SoapUI", "REST", "SOAP", "GraphQL"]
    },
    {
        category: "Messaging & Event-Driven",
        icon: <MessageSquare size={28} />,
        skills: ["JMS", "Universal Messaging", "Kafka", "Broker (Pub-sub)", "RabbitMQ"]
    },
    {
        category: "Enterprise B2B",
        icon: <Database size={28} />,
        skills: ["EDI (ANSI X12, EDIFACT)", "RosettaNet", "Trading Networks", "SAP Adapters", "JDBC Adapters", "Managed File Transfer (MFT)"]
    },
    {
        category: "Languages & Tools",
        icon: <Terminal size={28} />,
        skills: ["Java", "SQL (MySQL, Oracle)", "MongoDB", "XML", "JSON", "WSDL", "XSD", "Postman"]
    }
];

const Skills = () => {
    return (
        <div className="skills-page container">
            <h2 className="section-title">Technical Expertise</h2>
            <p className="skills-intro">
                A comprehensive toolkit built over 8+ years of solving complex integration challenges across Banking, Telecom, and Retail sectors.
            </p>

            <div className="skills-grid">
                {skillData.map((category, index) => (
                    <div key={index} className="skill-category-card glass-card">
                        <div className="category-header">
                            <div className="category-icon">{category.icon}</div>
                            <h3 className="category-title">{category.category}</h3>
                        </div>
                        <div className="skill-tags">
                            {category.skills.map((skill, idx) => (
                                <span key={idx} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="certifications-section">
                <h3 className="section-title small-title">Certifications</h3>
                <div className="certs-grid">
                    <div className="cert-card glass-card">
                        <span className="cert-issuer">Software AG</span>
                        <h4 className="cert-name">WebMethods 10.1 Certified Integration Developer</h4>
                    </div>
                    <div className="cert-card glass-card">
                        <span className="cert-issuer">Software AG</span>
                        <h4 className="cert-name">Certified API Management Professional</h4>
                    </div>
                    <div className="cert-card glass-card">
                        <span className="cert-issuer">Software AG</span>
                        <h4 className="cert-name">Certified webMethods.io B2B Professional</h4>
                    </div>
                    <div className="cert-card glass-card">
                        <span className="cert-issuer">Microsoft</span>
                        <h4 className="cert-name">Certified Azure Fundamentals</h4>
                    </div>
                    <div className="cert-card glass-card">
                        <span className="cert-issuer">Amazon Web Services</span>
                        <h4 className="cert-name">AWS Certified Cloud Practitioner</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
