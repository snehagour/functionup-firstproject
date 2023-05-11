import React from 'react'
import './Squre.css';

function Squre(props) {
  return (
    <div className='squre' onClick={props.onClick}>
        <h5>{props.value}</h5>
      
    </div>
  )
}

export default Squre
