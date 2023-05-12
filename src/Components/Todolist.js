import React from 'react'
import "./Todolist.css"
function Todolist(props) {
  return (
    <div>
      <li className='list-item'>
        {props.item}
        <span className='font'>
        <i className="fa-sharp fa-solid fa-trash icon-delet"
         onClick={e=>{
            props.deletItem(props.index)
        }} ></i>       
         </span>
      </li>
    </div>
  )
}

export default Todolist
