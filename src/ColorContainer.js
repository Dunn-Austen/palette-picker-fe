import React, {useState, useEffect} from 'react';
import ColorCard from './ColorCard';
import './ColorContainer.css';

const ColorContainer = props => {
  //Colors received from props as an array [color-1, color-2, color-3, color-4, color-5] ?
  // const { colors } = props;

  const displayColorCards = colors.map((color, index) => {
    return (
      <ColorCard
        hexCode={color}
        key={color}
        //would we pass down a freezeColor function?
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
