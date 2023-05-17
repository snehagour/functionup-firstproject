
import React, { useState } from 'react'


function Form() {
    const[data,setData]=useState({
    username:'',
    email:'',
    phone:'',
    password:'',
    })
    const[record,setRecord]=useState([])
    const handleEvent=(e)=>{

    const name = e.target.name;
    const value = e.target.value;
    setData({...data,[name]:value});
    }
    const handleSummit=(e)=>{
        e.preventDefault();
        const newRecords ={...data, 
            new Date().getTime().toString()}
        setRecord([...record,newRecords])
    }
    
  return (
    <>
<div className='main'>
<div className='center'>
    <form action='' onSummit={handleSummit}>
        <div>
            <label htmlFor='username'>Fullname</label>
            <br/>
            <input type="text" name='username'  value={setData.username}    id='username' onChange={handleEvent}/>
        </div>
        <div>
        <br/>
            <label htmlFor='email'>email</label>
            <br/>
            <input type="text" name='username' value={setData.email}  id='username' onChange={handleEvent}/>
        </div>
        <div>
        <br/>
            <label htmlFor='phone'>phone</label>
            <br/>
            <input type="text" name='username' value={setData.phone}  id='username' onChange={handleEvent}/>
        </div>
        <div>
        <br/>
            <label htmlFor='password'>password</label>
            <br/>
            <input type="text" name='username' value={setData.password} id='username'onChange={handleEvent} />
            
        </div>
        <br/>
        <button type="summit">Registration</button>

    </form>
    </div>
    </div>
    </>
  )
}

export default Form;
