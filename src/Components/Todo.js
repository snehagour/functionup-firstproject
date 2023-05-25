import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { addTodo, deleteTodo, removeTodo } from '../Action/Index';
import "./Todo.css"

function Todo() {
  const [inputData, setInputData] = useState(" ");
  const list = useSelector((state) => state.todoReducers.list)
  const dispatch = useDispatch();
  return (
    <div className="parent">
      <div className="child">
        ADD YOUR LIST HERE...

        <div className='addItem'>
          <input type="text" placeholder='Add Items..' value={inputData}
            onChange={(event) => setInputData(event.target.value)} />
          <i className='fa fa-plus add-btn' onClick={() => dispatch(addTodo(inputData),
            setInputData(" "))}></i>
        </div>


        <div className='showItems'>
          {
            list.map((elem) => {
              return (
                <div className='eachItems' key={elem.id}>
                  <h3>{elem.data}</h3>
                  <div className='todo-btn'>

                  
                  <i className='far fa-trash-alt add-btn' title='deletitem' onClick={() => dispatch(deleteTodo(elem.id)
                    ,)}></i>
                </div>
                </div>
              )

            })
          }

        </div>
<div className='showitem'>
  <button className='btn effect04' data-sm-link-text="remove All"
  onClick={()=>dispatch(removeTodo())}
  > <span>check List</span></button>
</div>
      </div>
    </div>
  )
}

export default Todo
