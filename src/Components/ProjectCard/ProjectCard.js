import React from 'react';
import './ProjectCard.css';
import PropTypes from 'prop-types';
import PaletteCard from '../PaletteCard/PaletteCard'

const ProjectCard = ({title, palettes, updateProjects, projects}) => {

  const displayPaletteCards = palettes.map((palette, index) => {
    return (
      <PaletteCard
        projects={projects}
        updateProjects={updateProjects}
        title={palette.title}
        id={palette.id}
        project_id={palette.project_id}
        color_1_id={palette.color_1_id}
        color_2_id={palette.color_2_id}
        color_3_id={palette.color_3_id}
        color_4_id={palette.color_4_id}
        color_5_id={palette.color_5_id}
        key={index}
      />
    )
  });

  return (
    <section className='project-card'>
      <header>
        <div className='title-container'>
          <h1 className='project-title'>{title}</h1>
          <button className='edit-title'>
            Edit Title
          </button>
        </div>
        <button className='delete-project'>
          Delete Project
        </button>
      </header>
      <section className='palettes-section'>
        {displayPaletteCards}
      </section>
    </section>
  )
}

export default ProjectCard;
