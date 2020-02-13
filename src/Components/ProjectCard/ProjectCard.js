import React from 'react';
import './ProjectCard.css';
import PropTypes from 'prop-types';
import PaletteCard from '../PaletteCard/PaletteCard';
import { deleteProject, fetchAllProjects, fetchAllPalettes } from '../../apiCalls';

const ProjectCard = ({title, id, palettes, updateProjects, projects}) => {

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

  const removeProject = async (event) => {
    const id = event.target.dataset.id;
    let temporaryProjects;

    await deleteProject(id);
    await fetchAllProjects()
      .then(projectsData => {
        temporaryProjects = projectsData.projects.map(project => {
          return {
            id: project.id,
            title: project.title,
            palettes: []
          }
        });
      });
    await fetchAllPalettes()
      .then(palettesData => {
          palettesData.palettes.forEach(palette => {
            temporaryProjects.find(project => palette.project_id === project.id).palettes.push(palette)
          })
          updateProjects(temporaryProjects)
      })
  }

  return (
    <section className='project-card'>
      <header>
        <button className='edit-title'>
          Edit Title
        </button>
        <h1 className='project-title'>
          {title}
        </h1>
        <button data-id={id} className='delete-project' onClick={removeProject}>
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
