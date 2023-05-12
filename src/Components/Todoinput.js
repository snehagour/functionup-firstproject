import React, { useState } from 'react'
import "./Todoinput.css"
function Todoinput(props) {
  const [input,setInput]= useState(" ")
  const handleEnter=(e)=>{
    if(e.keyCode===13){
        props.addList(input)
        setInput(" ")
    }
  }

  return (
    <div className='container'>
      <div className="input-container">
        <input 
        type="text"
          className='input-box' 
        placeholder="task"
        value={input}
        onChange={e=>{
        setInput(e.target.value)
        }}
        onKeyDown={handleEnter}
        />
        <button className='add-button' 
        onClick={()=>{props.addList(input) 
         setInput(" ")}}>+</button>
        
      </div>
    </div>
  )
}

export default Todoinput;
