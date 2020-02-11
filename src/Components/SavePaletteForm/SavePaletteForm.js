import React, {useState, useEffect} from 'react';
import './SavePaletteForm.css';

const SavePaletteForm = ({projects, setProjects}) => {

  let [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const generateOptions = () => {
    const projectNames = projects.map(project => {
      return (
      `<option value="${project.title}">
        ${project.title}
      </option>
      `
      )
    })

    return projectNames
  };

  return (
    <section className='form-section'>
      <form className='palette-form'>
        {projects.length &&
          <select>
            {generateOptions}
          </select>
        }
        <div className='input-container'>
          <label htmlFor='palette-input'>Save pallete in project: </label>
          <input
            id='palette-input'
            type='text'
            placeholder='Backsplash Option #1'
            onChange={handleInputChange}
            />
        </div>
        <button className='post-palette'>
          Save palette
        </button>
      </form>
    </section>
  );
}

export default SavePaletteForm;
