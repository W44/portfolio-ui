import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Cryptofi - Company Project",
    duration: "04/07/2022 – 01/02/2023",
    company: "Strategic Systems International",
    description: [
      "Commercial application providing user access to cryptocurrencies.",
      "**Backend:** Flask(Python)",
      "Worked with RESTful APIs",
      "Implemented infrastructure as code (AWS)",
      "Built Lambda functions in Flask",
    ],
    link: "https://cu-2.com/fintech/cryptofi/",
  },
  {
    title: "Intellifi - Company Project",
    duration: "02/02/2023 – 07/06/2024",
    company: "Strategic Systems International",
    description: [
      "Commercial application catering to workforce management.",
      "**Backend (ASP.NET Core):** RESTful APIs, code optimization, database schema design.",
      "**Frontend (Angular):** Page creation & backend integration.",
    ],
    link: "https://www.intellify.com/",
  },
  {
    title: "Final Year Project",
    duration: "14/08/2021 – 04/07/2022",
    company: "Department of Computer Science, FAST - NUCES",
    description: [
      "**Frontend:** Flutter",
      "**Backend:** Node.js",
      "Implemented YOLOv5 object detection on a custom dataset",
      "Dataset augmentation, parameter optimization, and ETL processing.",
    ],
    link: "#",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <h2 className="projects-heading">📂 Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-duration">{project.duration}</p>
            <p className="project-company">{project.company}</p>
            <ul className="project-description">
              {project.description.map((point, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: point }}></li>
              ))}
            </ul>
            {project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                🔗 View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
