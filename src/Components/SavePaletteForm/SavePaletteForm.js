import React, {useState, useEffect} from 'react';
import './SavePaletteForm.css';

const SavePaletteForm = () => {

  let [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }
  const

  return (
    <section className='form-section'>
      <form className='palette-form'>
        <select value={} name ='' onChange={}>
          <option></option>
          <option></option>
          <option></option>
        </select>
        <div className='input-container'>
          <label htmlFor='palette-input'>Save pallete in project: </label>
          <input
            id='palette-input'
            type='text'
            placeholder='Backsplash Option #1'
            value={handleInputChange}
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
