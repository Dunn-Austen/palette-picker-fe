import React, {useState, useEffect} from 'react';
import ColorCard from './ColorCard';
import './ColorContainer.css';

const ColorContainer = ({paletteColors, isSavedStatuses, setIsSavedFunctions}) => {
  const {paletteColor_1, paletteColor_2, paletteColor_3, paletteColor_4, paletteColor_5} = paletteColors;
  const {isSaved_1, isSaved_2, isSaved_3, isSaved_4, isSaved_5} = isSavedStatuses;
  const {setIsSaved_1, setIsSaved_2, setIsSaved_3, setIsSaved_4, setIsSaved_5} = setIsSavedFunctions;

  const displayColorCards = colors.map((color, index) => {
    return (
      <ColorCard
        hexCode={color}
        key={color}
      >
      </div>
    );
  });

  return (
    <section className='color-container'>
      {displayColorCards}
    </section>
  );
}

export default ColorContainer;
