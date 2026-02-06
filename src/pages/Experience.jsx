import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import './Experience.css';

const experiences = [
    {
        role: "Software Engineer II",
        company: "JPMorgan Chase & Co",
        period: "Oct 2022 - Oct 2024",
        location: "USA",
        desc: "Designed and implemented large-scale payment APIs & MFT, enabling secure data exchange. Analyzed end-to-end integration architectures and mentored global teams.",
        points: [
            "Led API development for India Payment Data Localization (RBI Compliance).",
            "Developed WebMethods flow services for high-volume client reports (Google).",
            "Architected secure payment flows using API Gateway & IBM MFT."
        ]
    },
    {
        role: "Senior Software Engineer (Integration Lead)",
        company: "CGI",
        period: "Mar 2021 - Oct 2022",
        location: "USA",
        desc: "Acted as Integration Consultant, leading migration projects and integrating SaaS platforms.",
        points: [
            "Led migration from Azure IPaaS to WebMethods for Telecom clients.",
            "Configured Trading Networks for ANSI X12 & RosettaNet EDI.",
            "Integrated SAP ERP, SuccessFactors, and Salesforce CRM."
        ]
    },
    {
        role: "Associate Integration Consultant",
        company: "Software AG",
        period: "Jun 2019 - Mar 2021",
        location: "India/Global",
        desc: "Delivered complex solutions for Standard Chartered Bank involving FAST, ACH, and RTGS payments.",
        points: [
            "Built CI/CD pipelines with Jenkins/Git, reducing release cycle by 40%.",
            "Implemented Blue-Green deployment models to minimize downtime.",
            "Resolved 40+ critical production production changes."
        ]
    },
    {
        role: "System Engineer",
        company: "Tata Consultancy Services",
        period: "Oct 2016 - Jun 2019",
        location: "India",
        desc: "Integrated SAP applications with 3PL WMS systems and led SDLC for retail projects.",
        points: [
            "Delivered 15+ integration projects using WebMethods, MuleSoft, and Informatica.",
            "Handled high-pressure integration deployments for retail clients.",
            "Managed diverse data formats: XML, JSON, EDI, Flat Files."
        ]
    }
];

const Experience = () => {
    return (
        <div className="experience-page container">
            <h2 className="section-title">Professional Journey</h2>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className={`timeline-content glass-card ${index % 2 === 0 ? 'left' : 'right'}`}>
                            <div className="exp-header">
                                <div>
                                    <h3 className="exp-role">{exp.role}</h3>
                                    <h4 className="exp-company"><Briefcase size={16} /> {exp.company}</h4>
                                </div>
                                <div className="exp-meta">
                                    <span className="exp-period"><Calendar size={14} /> {exp.period}</span>
                                    {/* <span className="exp-location"><MapPin size={14} /> {exp.location}</span> */}
                                </div>
                            </div>
                            <p className="exp-desc">{exp.desc}</p>
                            <ul className="exp-points">
                                {exp.points.map((pt, i) => (
                                    <li key={i}>{pt}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
