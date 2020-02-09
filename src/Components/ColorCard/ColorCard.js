import React from 'react'
import './ColorCard.css'

const ColorCard = (props) => {
  const { hexCode, isSaved, setIsSaved } = props;
  console.log(hexCode);
  return (
    <article className='color-card' style={{backgroundColor: hexCode}}>
      <h1 className='hex-display'>
        {hexCode}
      </h1>
      <button>
        Freeze
      </button>
    </article>
  );
}

export default ColorCard;

//Button requires onClick{() => } functionality for freezing color choice
