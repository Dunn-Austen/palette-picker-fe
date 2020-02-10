import React, {useState, useEffect} from 'react';
import './SaveProjectForm.css';

const SaveProjectForm = () => {

  let inputValue;

  return (
    <section className='form-section'>
      <form className='project-form'>
      <label htmlFor='project-input'>Create a project: </label>
        <input
          id='project-input'
          type='text'
          placeholder='Kitchen Themes'
          value={inputValue}
          />
        <button className='post-project'>
          Create Project
        </button>
      </form>
    </section>
  );
}

export default SaveProjectForm;

//BUTTON ELEMENT NOTES
//on click,
//1) validation
//2) POST a new project to our back-end, and reformat the response body
//[...response.body, palettes: []] => then setThat into our projects state (in app)
