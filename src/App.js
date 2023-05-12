import React, { useState } from 'react'
import "./App.css"
import Todoinput from './Components/Todoinput'
import Todolist from './Components/Todolist'


function App() {
   const[listtodo,setListtodo]= useState([])
   let  addList=(input)=>{
   if (input!==" ") 
   setListtodo([...listtodo,input])
   }
   const deletlist=(key)=>{
    let newlistTodo=[...listtodo];
    newlistTodo.splice(key,1)
    setListtodo([...newlistTodo]);
   }
  return (

       <div className='main-container'>
       <div className='center-container'>
      <Todoinput addList={addList}/>
      <h1 className='app heding'>TODO</h1>
      {listtodo.map((listItem,i)=>{
        return(
          <Todolist key={i} index={i} item={listItem} deletItem={deletlist}/>
        )
      })}
     
      </div>
    </div>
  )
}

export default App;

