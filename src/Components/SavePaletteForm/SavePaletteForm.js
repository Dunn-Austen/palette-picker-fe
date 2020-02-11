import React, {useState, useEffect} from 'react';
import './SavePaletteForm.css';
import { postPalette } from '../../apiCalls';


const SavePaletteForm = ({projects, updateProjects, paletteColors}) => {

  let [inputValue, setInputValue] = useState('');
  let [selectedProject, setCurrentProject] = useState({});

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleProjectChange = (event) => {
    let optionID = Number(event.target.selectedOptions[0].id);
    let currentProject = projects.find(project => optionID === project.id)
    setCurrentProject(currentProject);
  }

  const clickHandler = async () => {
    if (!inputValue) return "Put something there"
    let newPalette = {
      title: inputValue,
      project_id: selectedProject.id,
      color_1_id: paletteColors.paletteColor_1,
      color_2_id: paletteColors.paletteColor_2,
      color_3_id: paletteColors.paletteColor_3,
      color_4_id: paletteColors.paletteColor_4,
      color_5_id: paletteColors.paletteColor_5,
    };
    await submitPalette(newPalette);

  }

  const submitPalette = async (palette) => {
    let newProjects = [...projects];
    await postPalette(palette)
      .then(palette => {
        newProjects.find(project => palette.project_id === project.id).palettes.push(palette);
      });
      updateProjects(newProjects)
  }

  const projectNames = projects.map((project) => {
    return (
  <option key={project.id} id={project.id} value={project.title}>Project {project.id}: {project.title}</option>
    )
  })

  return (
    <section className='form-section'>
      <form className='palette-form'>
        {projects.length ?
          <select onChange={handleProjectChange}>
            {projectNames}
          </select>
          : <p>No Projects Yet</p>
        }
        <div className='input-container'>
          <label htmlFor='palette-input'>Save palette in project: </label>
          <input
            id='palette-input'
            type='text'
            placeholder='Backsplash Option #1'
            onChange={handleInputChange}
            value={inputValue}
            />
        </div>
        <button 
          type="button" 
          className='post-palette'
          onClick={() => clickHandler()}>
          Save palette
        </button>
      </form>
    </section>
  );
}

export default SavePaletteForm;
