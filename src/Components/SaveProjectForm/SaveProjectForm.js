import React, {useState} from 'react';
import './SaveProjectForm.css';
import { postNewProject } from '../../apicalls';
import PropTypes from 'prop-types';

const SaveProjectForm = ({projects, setProjects}) => {

  let [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const reformatResponseObject = (returnedBody) => {
    return {...returnedBody, palettes: [] }
  }

  return (
    <section className='form-section'>
      <form className='project-form'>
        <div className='input-container'>
          <label htmlFor='project-input'>Create a project: </label>
          <input
            id='project-input'
            type='text'
            placeholder='Kitchen Themes'
            onChange={handleInputChange}
            />
        </div>
        <button type='button' className='post-project'
          onClick={() => setProjects([...projects, reformatResponseObject(postNewProject({title: inputValue}))])}
        >
          Create Project
        </button>
      </form>
    </section>
  );
}

export default SaveProjectForm;

SaveProjectForm.propTypes = {
  projects: PropTypes.array,
  setProjects: PropTypes.func
}
