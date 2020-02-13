import React, { useState } from 'react';
import './ProjectCard.css';
import PropTypes from 'prop-types';
import PaletteCard from '../PaletteCard/PaletteCard';
import { deleteProject, fetchAllProjects, fetchAllPalettes } from '../../apiCalls';

const ProjectCard = ({title, id, palettes, updateProjects, projects}) => {

  let [editStatus, setEditStatus] = useState(false);
  let [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

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
        {!editStatus &&
          <button className='edit-title' onClick={() => setEditStatus(true)}>
            Edit Title
          </button>
        }
        {editStatus &&
          <button className='save-title' onClick={() => setEditStatus(false)}>
            Save Title
          </button>
        }
        {!editStatus &&
          <h1 className='project-title'>
            {title}
          </h1>
        }
        {editStatus &&
          <input className='title-input'
            type='text'
            placeholder='New Title'
            onChange={handleInputChange}
            value={inputValue}
            />
        }
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
