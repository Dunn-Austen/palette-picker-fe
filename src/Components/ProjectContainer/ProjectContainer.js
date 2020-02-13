import React from 'react';
import './ProjectContainer.css';
import PropTypes from 'prop-types';
import ProjectCard from '../ProjectCard/ProjectCard';

const ProjectContainer = ({projects, updateProjects, paletteColors, setPaletteColors}) => {

  const displayProjectCards = projects.map((project, index) => {
    return (
      <ProjectCard
        projects={projects}
        id={project.id}
        title={project.title}
        palettes={project.palettes}
        updateProjects={updateProjects}
        paletteColors={paletteColors}
        setPaletteColors={setPaletteColors}
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
