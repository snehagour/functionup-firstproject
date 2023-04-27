import React, { useState } from 'react'

function Game() {
    const[sum,setsum] =useState()
    const [attemt, setAttemt]=useState(1)

    function handleChange(event){
     setsum(event.target.value)
    }

    function handleClick(){
    if (sum == 56){
        setAttemt(attemt+1)
        alert("congratulations you guessed the right number  "  + attemt)
        return
    }

    if (sum < 56 ){
        setAttemt(attemt+1)
        alert ("you guessed a smaller number " + attemt)
        return
    }

    if (sum > 56){
        setAttemt(attemt+1)
        alert ("you guessed a bigger number " + attemt)
        return
    }   
    }

  return (
    <div>
        <h1 className='head'>Inter your Lucky Number</h1>
        <input onChange={handleChange}
       type='number' 
       placeholder='Type lucky number'/>

      <button onClick={handleClick}>Summit</button>
    </div>
  )
}

export default Game
