import React from 'react'
import './ColorCard.css'

const ColorCard = props => {
  const { hexColor } = props;

  return (
    <article className='color-card' style={{backgroundColor: `#${hexColor}`}}>
      <h1 className='hex-display'>
        {hexColor}
      </h1>
      <button>
        Freeze
      </button>
    </article>
  );
}

export default ColorCard;

//Button requires onClick{() => } functionality for freezing color choice
