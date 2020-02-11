import React, {useState} from 'react';
import './SaveProjectForm.css';
import { postNewProject } from '../../apiCalls';
import PropTypes from 'prop-types';

const SaveProjectForm = ({projects, setProjects}) => {

  let [inputValue, setInputValue] = useState('');
  let [newProject, setNewProject] = useState({});

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const getNewProject = () => {
    postNewProject({title: inputValue})
      .then(data => {
        setNewProject({
          id: data.id,
          title: data.title,
          palettes: []
        })
      })
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
          onClick={() => setProjects([...projects, getNewProject()])}
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
