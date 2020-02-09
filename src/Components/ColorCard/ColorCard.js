import React from 'react'
import './ColorCard.css'

const ColorCard = (props) => {
  const { hexCode, isSaved, setIsSaved } = props;
  console.log(hexCode);

  const toggleSavedStatus = (isSaved) => {
    if (isSaved) {
      return false
    } else {
      return true
    }
  }

  return (
    <article className='color-card' style={{backgroundColor: hexCode}}>
      <h1 className='hex-display'>
        {hexCode}
      </h1>
      <button onClick={() => setIsSaved(toggleSavedStatus(isSaved))}>
        Save
      </button>
    </article>
  );
}

export default ColorCard;

//Button requires onClick{() => } functionality for freezing color choice
