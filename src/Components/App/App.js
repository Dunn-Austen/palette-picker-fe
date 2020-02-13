import React, {useState, useEffect} from 'react';
import './App.css';
import ColorContainer from '../ColorContainer/ColorContainer';
import SavePaletteForm from '../SavePaletteForm/SavePaletteForm';
import SaveProjectForm from '../SaveProjectForm/SaveProjectForm';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import { fetchAllPalettes, fetchAllProjects } from '../../apiCalls';

const App = () => {

  let [paletteColor_1, setPaletteColor_1] = useState('#000000');
  let [paletteColor_2, setPaletteColor_2] = useState('#bbbbbb');
  let [paletteColor_3, setPaletteColor_3] = useState('#222222');
  let [paletteColor_4, setPaletteColor_4] = useState('#dddddd');
  let [paletteColor_5, setPaletteColor_5] = useState('#444444');

  let [isSaved_1, setIsSaved_1] = useState(false);
  let [isSaved_2, setIsSaved_2] = useState(false);
  let [isSaved_3, setIsSaved_3] = useState(false);
  let [isSaved_4, setIsSaved_4] = useState(false);
  let [isSaved_5, setIsSaved_5] = useState(false);

  let [projects, setProjects] = useState([]);

  const generateRandomColors = () => {
    if (!isSaved_1) {
      setPaletteColor_1('#'+Math.floor(Math.random()*16777215).toString(16))
    };
    if (!isSaved_2) {
      setPaletteColor_2('#'+Math.floor(Math.random()*16777215).toString(16))
    };
    if (!isSaved_3) {
      setPaletteColor_3('#'+Math.floor(Math.random()*16777215).toString(16))
    };
    if (!isSaved_4) {
      setPaletteColor_4('#'+Math.floor(Math.random()*16777215).toString(16))
    };
    if (!isSaved_5) {
      setPaletteColor_5('#'+Math.floor(Math.random()*16777215).toString(16))
    };
  }

  const combineFetches = async () => {
    let temporaryProjects;
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
          setProjects(temporaryProjects)
      })
  }

  const addProject = project => {
    setProjects([...projects, project])
  }

  const updateProjects = (projects) => {
    setProjects(projects)
  }

  useEffect(() => generateRandomColors(), []);
  useEffect(() => combineFetches(), []);

  return (
    <main className='app'>
      <section className='colors-section'>
        <ColorContainer
          paletteColors={{paletteColor_1, paletteColor_2, paletteColor_3, paletteColor_4, paletteColor_5}}
          isSavedStatuses={{isSaved_1, isSaved_2, isSaved_3, isSaved_4, isSaved_5}}
          setIsSavedFunctions={{setIsSaved_1, setIsSaved_2, setIsSaved_3, setIsSaved_4, setIsSaved_5}}
        />
        <button className='generate-palette' onClick={() => generateRandomColors()}>
          Generate New Colors
        </button>
      </section>
      <section className='forms-section'>
        <SaveProjectForm
          projects={projects}
          addProject={addProject}
        />
        <SavePaletteForm
          projects={projects}
          updateProjects={updateProjects}
          paletteColors={{paletteColor_1, paletteColor_2, paletteColor_3, paletteColor_4, paletteColor_5}}
        />
      </section>
      <section className='projects-section'>
        <ProjectContainer
          projects={projects}
          updateProjects={updateProjects}
          paletteColors={{paletteColor_1, paletteColor_2, paletteColor_3, paletteColor_4, paletteColor_5}}
          setPaletteColors={{setPaletteColor_1, setPaletteColor_2, setPaletteColor_3, setPaletteColor_4, setPaletteColor_5}}
        />
      </section>

    </main>
  );
}

export default App;
