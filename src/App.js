
import { useState } from 'react';
import './App.css';

function App() {
 const [mobilenumber,setMobilenumber] =useState()
  
 function handle(){
  if(mobilenumber < 999967896 || mobilenumber >= 56567890342){
    alert ("Invalid mobile number")
    console.error("invalid number")
    return;
  }
  fetch( "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP",{
    method:"POST",
    headers:{
      "content-Type": "application/json"
    },
    body: JSON.stringify({
      mobile: mobilenumber
    })
  })

     .then((res)=> res.json())
     .then((data)=> {
      setMobilenumber(" ");
      alert("succesfully")
      console.log(data);
     })
     .catch(error=>{
      alert("plase retry, somthing went wrong")
      console.error(error);
     });
      }
  return (
    <div className='App'>
      <form
      onSubmit={e=> e.preventDefault()}
      noValidate
      autoComplete='off'
      
      >
        <input type="number" placeholder='mobile number' 
        validation={{
          required:{
            value:"true",
            message:"required",
          },
          minLength:{
            value:10,
            message: "min 10 character",
          },
          maxLength:{
            value:10,
            message:"min 10 character",
          }
        }}
        onChange={e=>setMobilenumber(e.target.value)}
        value={mobilenumber}
        ></input>
      </form>
      <button type="sumit" onClick={handle}>Get otp</button>
    </div>
  );
}

export default App;
