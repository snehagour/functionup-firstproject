import React, { useState } from 'react'
import "./Counter.css"
function Counter() {
  const [count, setCount ]=useState(1)
  function EventUp(){
    setCount(count+1)
  }

  function EventDown(){
    setCount(count-1)
    if(count==0){
      setCount(0)
      alert("sorry not valid")
    }
  }
  return (
    <div className='button1'>
          <div className='button2'>

      <p className='text'> {count}</p>
      <button className='butt' onClick={EventUp}>Click me for increasing</button>
      <button className='butt' onClick={EventDown}>Click me for decreasing</button>
      </div>

    </div>
  )
}

export default Counter
