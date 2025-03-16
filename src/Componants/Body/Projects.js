import React from "react";
import "./Projects.css";
import { projects } from "../../Utils/Constants";


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
            {/* Skills Section */}
            {project?.skills &&
              <div className="project-skills">
                {project?.skills.map((skill, i) => (
                  <span key={i} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            }
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