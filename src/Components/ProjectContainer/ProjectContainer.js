import React from 'react';
import './ProjectContainer.css';
import PropTypes from 'prop-types';
import ProjectCard from '../ProjectCard/ProjectCard';


const ProjectContainer = ({projects}) => {

  const displayProjectCards = projects.map((project, index) => {
    console.log(projects);
    return (
      <ProjectCard
        id={project.id}
        title={project.title}
        palettes={project.palettes}
        key={index}
      />
    );
  });

  return (
    <section className='project-container'>
      {displayProjectCards}
    </section>
  );
}

export default ProjectContainer;
