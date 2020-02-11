import React from 'react';
import ColorCard from '../ColorCard/ColorCard';
import './ColorContainer.css';
import PropTypes from 'prop-types';

const ColorContainer = ({paletteColors, isSavedStatuses, setIsSavedFunctions}) => {
  let { paletteColor_1, paletteColor_2, paletteColor_3, paletteColor_4, paletteColor_5 } = paletteColors;
  let { isSaved_1, isSaved_2, isSaved_3, isSaved_4, isSaved_5 } = isSavedStatuses;
  let { setIsSaved_1, setIsSaved_2, setIsSaved_3, setIsSaved_4, setIsSaved_5 } = setIsSavedFunctions;
  let combinedColorData =
    [
      {hexCode: paletteColor_1, isSaved: isSaved_1, setIsSaved: setIsSaved_1},
      {hexCode: paletteColor_2, isSaved: isSaved_2, setIsSaved: setIsSaved_2},
      {hexCode: paletteColor_3, isSaved: isSaved_3, setIsSaved: setIsSaved_3},
      {hexCode: paletteColor_4, isSaved: isSaved_4, setIsSaved: setIsSaved_4},
      {hexCode: paletteColor_5, isSaved: isSaved_5, setIsSaved: setIsSaved_5},
    ];

  const displayColorCards = combinedColorData.map((colorData, index) => {
    return (
      <ColorCard
        hexCode={colorData.hexCode}
        isSaved={colorData.isSaved}
        setIsSaved={colorData.setIsSaved}
        key={index}
      />
    );
  });

  return (
    <section className='color-container'>
      {displayColorCards}
    </section>
  );
}

export default ColorContainer;

ColorContainer.propTypes = {
  paletteColors: PropTypes.object,
  isSavedStatuses: PropTypes.object,
  setIsSavedFunctions: PropTypes.object
}
