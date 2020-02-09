import React, {useState, useEffect} from 'react';
import './App.css';
import ColorContainer from './ColorContainer';
import SavePaletteForm from './SavePaletteForm';

const App = () => {

  let [palleteColor_1, setPaletteColor_1] = useState('');
  let [palleteColor_2, setPalleteColor_2] = useState('');
  let [palleteColor_3, setPalleteColor_3] = useState('');
  let [palleteColor_4, setPalleteColor_4] = useState('');
  let [palleteColor_5, setPalleteColor_5] = useState('');

  let [isSaved_1, setIsSaved_1] = useState(false);
  let [isSaved_2, setIsSaved_2] = useState(false);
  let [isSaved_3, setIsSaved_3] = useState(false);
  let [isSaved_4, setIsSaved_4] = useState(false);
  let [isSaved_5, setIsSaved_5] = useState(false);

  const generateRandomColors = () => {
    if (!isSaved_1) setPaletteColor_1('#'+Math.floor(Math.random()*16777215).toString(16));
    if (!isSaved_2) setPaletteColor_2('#'+Math.floor(Math.random()*16777215).toString(16));
    if (!isSaved_3) setPaletteColor_3('#'+Math.floor(Math.random()*16777215).toString(16));
    if (!isSaved_4) setPaletteColor_4('#'+Math.floor(Math.random()*16777215).toString(16));
    if (!isSaved_5) setPaletteColor_5('#'+Math.floor(Math.random()*16777215).toString(16));
  }

  useEffect(() => generateRandomColors(), []);

  return (
    <main className='app'>
      <section className='colors-section'>
        <ColorContainer
          paletteColors={paletteColor_1, paletteColor_2, paletteColor_3, paletteColor_4, paletteColor_5}
          isSavedStatuses={isSaved_1, isSaved_2, isSaved_3, isSaved_4, isSaved_5}
          setIsSavedFunctions={setIsSaved_1, setIsSaved_2, setIsSaved_3, setIsSaved_4, setIsSaved_5}
        />
      </section>
    </main>
  );
}

export default App;
