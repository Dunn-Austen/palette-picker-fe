import React, {useState, useEffect} from 'react';
import './App.css';
import ColorContainer from './ColorContainer';
import SavePaletteForm from './SavePaletteForm';

const App = () => {


  let [color_1, setColor_1] = useState({});
  let [color_2, setColor_1] = useState({});
  let [color_3, setColor_1] = useState({});
  let [color_4, setColor_1] = useState({});
  let [color_5, setColor_1] = useState({});

  let [frozenStatus_1, setFrozenStatus_1] = useState(false);
  let [frozenStatus_2, setFrozenStatus_1] = useState(false);
  let [frozenStatus_3, setFrozenStatus_1] = useState(false);
  let [frozenStatus_4, setFrozenStatus_1] = useState(false);
  let [frozenStatus_5, setFrozenStatus_1] = useState(false);

  const generateRandomColors = () => {
    return {
      color_1: '#'+Math.floor(Math.random()*16777215).toString(16),
      color_2: '#'+Math.floor(Math.random()*16777215).toString(16),
      color_3: '#'+Math.floor(Math.random()*16777215).toString(16),
      color_4: '#'+Math.floor(Math.random()*16777215).toString(16),
      color_5: '#'+Math.floor(Math.random()*16777215).toString(16)
    };
  }

  //the 1st argument in useState represents the actual starting state for the listed property (empty array)
  //the 2nd argument in useState represents a function that 'SETS' the 'state value'

//1st approach: just one useState

// let [paletteColors, setPaletteColors] = useState( {} );

//Expected Format
// {
//   color_1: {hexCode, isFrozen: false},
//   color_2: {hexCode, isFrozen: false},
//   color_3: {hexCode, isFrozen: false},
//   color_4: {hexCode, isFrozen: false},
//   color_5: {hexCode, isFrozen: false},
// }


//I was getting confused with how to alter this object of objects with just one useState. We need to set the hexCode property, but also
//to set the isFrozen property - seemed liked maybe too much for one set function
//I instead defaulted to two useStates, one with which to setColors, the other to toggleFrozenStatuses
//I ultimately got confused with how to best best toggle Frozen statuses with precision (just toggling one color in the palette, etc)

let [paletteColors, setPaletteColors] = useState({});
let [frozenStatus_1, setFrozenStatus_1] = useState(false);
let [frozenStatus_2, setFrozenStatus_1] = useState(false);
let [frozenStatus_3, setFrozenStatus_1] = useState(false);
let [frozenStatus_4, setFrozenStatus_1] = useState(false);
let [frozenStatus_5, setFrozenStatus_1] = useState(false);

setPaletteColors()

const setPaletteColors = (generateRandomColors(paletteColors)) => {
  let frozenStatusKeys = Object.keys(frozenStatuses);
  console.log(frozenStatusKeys);
  frozenStatusKeys.forEach(key => {
    if (frozenStatuses[key])
      paletteColors[key] = '#'+Math.floor(Math.random()*16777215).toString(16);
  });
};



const setFrozenStatuses = (color_id) => {
  //How to tie this dynamically to the SPECIFIC clicked card??
  //Need to match an identifier

};

const generateRandomColors = (paletteColors) => {
  let paletteKeys = Object.keys(paletteColors);
  const newPaletteColors = paletteKeys.map(key => {
    if (!frozenStatus_1)
  })


  let frozenStatusKeys = Object.keys(frozenStatuses);
  console.log(frozenStatusKeys);
  const newPaletteColors = frozenStatusKeys.map(key => {
    if (frozenStatuses[key]) {
      return paletteColors[key] = '#'+Math.floor(Math.random()*16777215).toString(16);

  });
}



//paletteColors
// {
//   color_1
//   color_2,
//   color_3,
//   color_4,
//   color_5,
// }


//frozenStatuses - I used to the same key names for easier cross-object interaction If key1 from object 2 = true, object1[key1] can be manipulated within the same map/forEach block
// {
//   color_1: false,
//   color_2: false,
//   color_3: false,
//   color_4: false,
//   color_5: false
// }





  // const updateFrozenStatuses = event => {
  //   setFrozenStatuses({
  //     ...frozenStatuses,
  //     [e.target.name]: e.target.value
  //   });
  // };


  const generateRandomColor = () => {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  }


  // const generateRandomColors = (frozenStatuses) => {
  //   return {
  //     color_1: '#'+Math.floor(Math.random()*16777215).toString(16),
  //     color_2: '#'+Math.floor(Math.random()*16777215).toString(16),
  //     color_3: '#'+Math.floor(Math.random()*16777215).toString(16),
  //     color_4: '#'+Math.floor(Math.random()*16777215).toString(16),
  //     color_5: '#'+Math.floor(Math.random()*16777215).toString(16)
  //   };
  // }

  //ComponentDidMount is replaced with useEffect
  useEffect(() => {
    //We'd run our imported FETCHES here (imported from APIcalls)
  });

  //Example function - likely passed to another component in the return clause below as props
  //const addAFakePalette = (newFakePalette) => {
  //   increaseFakePalettes([...fakePalettes, newFakePalette]);
  // }

  return (
    <main className='app'>
      <section className='colors-section'>
        <ColorContainer />
      </section>
    </main>
  );
}

export default App;
