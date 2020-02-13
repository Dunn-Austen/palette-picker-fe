import React, { useState } from 'react';
import './PaletteCard.css';
import PropTypes from 'prop-types';
import { patchPalette, deletePalette, fetchAllPalettes, fetchAllProjects } from '../../apiCalls';

const PaletteCard = ({updateProjects, projects, id, title, project_id, color_1_id, color_2_id, color_3_id, color_4_id, color_5_id, setPaletteColors, paletteColors}) => {
  let { paletteColor_1, paletteColor_2, paletteColor_3, paletteColor_4, paletteColor_5 } = paletteColors;
  let { setPaletteColor_1, setPaletteColor_2, setPaletteColor_3, setPaletteColor_4, setPaletteColor_5 } = setPaletteColors;

  let [editStatus, setEditStatus] = useState(false);
  let [currentPalette, setCurrentPalette] = useState({id, title, color_1_id, color_2_id, color_3_id, color_4_id, color_5_id, project_id});

  const handleColorClick = () => {
    setPaletteColor_1(color_1_id);
    setPaletteColor_2(color_2_id);
    setPaletteColor_3(color_3_id);
    setPaletteColor_4(color_4_id);
    setPaletteColor_5(color_5_id)
  }

  const changeColor = (event) => {
    let newPalette = {...currentPalette};
    let targetedValue = event.target.value;
    newPalette[targetedValue] = '#'+Math.floor(Math.random()*16777215).toString(16);

    setCurrentPalette(newPalette);
  }

  const updatePalette = async (palette) => {
    let newProjects = [...projects];
    await patchPalette(palette)
      .then(returnedPalette => {
        let foundProject = newProjects.find(project => {
          return project.id === returnedPalette.project_id
        })
        let foundPalette = foundProject.palettes.find(palette => palette.id === returnedPalette.id);
        foundPalette.color_1_id = returnedPalette.color_1_id;
        foundPalette.color_2_id = returnedPalette.color_2_id;
        foundPalette.color_3_id = returnedPalette.color_3_id;
        foundPalette.color_4_id = returnedPalette.color_4_id;
        foundPalette.color_5_id = returnedPalette.color_5_id;

        updateProjects(newProjects);
        setEditStatus(!editStatus)
      });
  }

  const removePalette = async (event) => {
    const id = event.target.dataset.id;
    let temporaryProjects;

    await deletePalette(id);
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
    <section className='palette-card'>
      <section className='palette-container'>
        <div onClick={handleColorClick} className='palette-slice' style={{backgroundColor: currentPalette.color_1_id}}>
          {editStatus &&
            <button className='change-color' value='color_1_id' onClick={changeColor}>
              Change
            </button>
          }
        </div>
        <div onClick={handleColorClick} className='palette-slice' style={{backgroundColor: currentPalette.color_2_id}}>
          {editStatus &&
            <button className='change-color' value='color_2_id' onClick={changeColor}>
              Change
            </button>
          }
        </div>
        <div onClick={handleColorClick} className='palette-slice' style={{backgroundColor: currentPalette.color_3_id}}>
          {editStatus &&
            <button className='change-color' value='color_3_id' onClick={changeColor}>
              Change
            </button>
          }
        </div>
        <div onClick={handleColorClick} className='palette-slice' style={{backgroundColor: currentPalette.color_4_id}}>
          {editStatus &&
            <button className='change-color' value='color_4_id' onClick={changeColor}>
              Change
            </button>
          }
        </div>
        <div onClick={handleColorClick} className='palette-slice' style={{backgroundColor: currentPalette.color_5_id}}>
        {editStatus &&
          <button className='change-color' value='color_5_id' onClick={changeColor}>
            Change
          </button>
        }
        </div>
      </section>
      <section className='btn-container'>
        <h1 className='palette-title'>{title}</h1>
        {!editStatus &&
          <button className='edit-palette' onClick={() => setEditStatus(!editStatus)}>Edit</button>
        }
        {editStatus &&
          <button className='save-palette' onClick={() => updatePalette(currentPalette)}>Save</button>
        }
        <button data-id={id} className='delete-palette' onClick={removePalette}>Delete</button>
      </section>
    </section>
  )
}

export default PaletteCard;
