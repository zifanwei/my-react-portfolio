import React from 'react';
import '../../style/ProjectGallery.css';
import useFetchData from "../hooks/useFetchData";

const ProjectGallery = () => {
  const { data } = useFetchData('/data/resume.json');

  return (
    <div className="project-gallery">
      {data && data.projects && data.projects.map((project, index) => (
        <div key={index} className="project-card card-with-shadow hover-scale">
          <img
            src={process.env.PUBLIC_URL +`/project/${project['img-url']}`}
            alt={project.name}
            className="project-img"
          />
          <div className="project-details">
            <h2>{project.name}</h2>
            <p>{project.summary}</p>
            <p><strong>Technologies:</strong> {project.technologies}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a> | 
            <a href={project['live-demo']} target="_blank" rel="noopener noreferrer">Live Demo</a>
            <ul>
              {project.detail.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery;
