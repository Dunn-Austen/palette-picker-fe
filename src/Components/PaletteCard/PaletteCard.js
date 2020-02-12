import React from 'react';
import './PaletteCard.css';
import PropTypes from 'prop-types';

const PaletteCard = ({title, project_id, color_1_id, color_2_id, color_3_id, color_4_id, color_5_id}) => {

  return (
    <section className='palette-card'>
      <section className='palette-container'>
        <div className='palette-slice' style={{backgroundColor: color_1_id}}>
        </div>
        <div className='palette-slice' style={{backgroundColor: color_2_id}}>
        </div>
        <div className='palette-slice' style={{backgroundColor: color_3_id}}>
        </div>
        <div className='palette-slice' style={{backgroundColor: color_4_id}}>
        </div>
        <div className='palette-slice' style={{backgroundColor: color_5_id}}>
        </div>
      </section>
      <div className='btn-container'>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </section>
  )
}

export default PaletteCard;
