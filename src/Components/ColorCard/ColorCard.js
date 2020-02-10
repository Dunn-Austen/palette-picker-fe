import React from 'react';
import './ColorCard.css';
import PropTypes from 'prop-types';

const ColorCard = ({ hexCode, isSaved, setIsSaved }) => {

  const toggleSavedStatus = (isSaved) => {
    return !isSaved
  }

  return (
    <article className='color-card' style={{backgroundColor: hexCode}}>
      <h1 className='hex-display'>
        {hexCode}
      </h1>
      <button className='save-btn' onClick={() => setIsSaved(toggleSavedStatus(isSaved))}>
        {!isSaved ? 'Save' : 'Unlock'}
      </button>
    </article>
  );
}

export default ColorCard;

ColorCard.propTypes = {
  hexCode: PropTypes.string,
  isSaved: PropTypes.bool,
  setIsSaved: PropTypes.func
}
