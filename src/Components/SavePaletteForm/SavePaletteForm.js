import React, {useState, useEffect} from 'react';
import './SavePaletteForm.css';
import { postPalette } from '../../apiCalls';


const SavePaletteForm = ({projects, updateProjects, paletteColors}) => {

  let [inputValue, setInputValue] = useState('');
  let [selectedProject, setCurrentProject] = useState({});

  // const findProject = () => {
  //   if (document.querySelector("#project-select").selectedOptions[0]) {
  //     let select = document.querySelector("#project-select").selectedOptions[0];
  //     console.log(select);
  //   }
  // }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleProjectChange = (event) => {
    let optionID = Number(event.target.value);
    let currentProject = projects.find(project => optionID === project.id);
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
  <option key={project.id} value={project.id}>Project {project.id}: {project.title}</option>
    )
  })

  return (
    <section className='form-section'>
      <form className='palette-form'>
        <select id="project-select" onChange={handleProjectChange}>
          <option>--Select Project--</option>
          {projectNames}
        </select>
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
