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

  let [frozenStatus_1, setFrozenStatus_1] = useState(false);
  let [frozenStatus_2, setFrozenStatus_2] = useState(false);
  let [frozenStatus_3, setFrozenStatus_3] = useState(false);
  let [frozenStatus_4, setFrozenStatus_4] = useState(false);
  let [frozenStatus_5, setFrozenStatus_5] = useState(false);

  const generateRandomColors = () => {
    if (!frozenStatus_1) setPaletteColor_1('#'+Math.floor(Math.random()*16777215).toString(16));
    if (!frozenStatus_2) setPaletteColor_2('#'+Math.floor(Math.random()*16777215).toString(16));
    if (!frozenStatus_3) setPaletteColor_3('#'+Math.floor(Math.random()*16777215).toString(16));
    if (!frozenStatus_4) setPaletteColor_4('#'+Math.floor(Math.random()*16777215).toString(16));
    if (!frozenStatus_5) setPaletteColor_5('#'+Math.floor(Math.random()*16777215).toString(16));
  }

  useEffect(() => generateRandomColors(), []);



  return (
    <main className='app'>
      <section className='colors-section'>
        <ColorContainer
          paletteColors={paletteColor_1, paletteColor_2, paletteColor_3, paletteColor_4, paletteColor_5}
          frozenStatuses={frozenStatus_1, frozenStatus_2, frozenStatus_3, frozenStatus_4, frozenStatus_5}
        />
      </section>
    </main>
  );
}

export default App;
