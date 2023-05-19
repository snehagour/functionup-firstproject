import React from 'react'

function Quizeresult(props) {
  return (
    <>
    <div className='show-score'>
      your Score:{props.Score}<br/>
      total Score:{props.totalScore}
    </div>
    <button id='next-button' onClick={props.TryAgain}>Try Again</button>
    </>
  )
}

export default Quizeresult
