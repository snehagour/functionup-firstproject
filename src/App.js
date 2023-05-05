
import { useState } from 'react';
import './App.css';
import axios from "axios";

function App() {
 const [mobileNumber,setMobileNumber] =useState()
  
 function handle(){
  if(mobileNumber < 999967896 || mobileNumber >= 56567890342){
    alert ("Invalid mobile number")
    console.error("invalid number")
    return;
  }
  axios.post('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP', {
    mobile:mobileNumber
  })
  .then(function (response) {
    setMobileNumber('');
    alert('Successfully delivered the otp!!!');    
    console.log(response);
  })
  .catch(function (error) {
    alert('Please retry, something went wrong!!!');
    console.log(error);
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
        onChange={e=>setMobileNumber(e.target.value)}
        value={mobileNumber}
        ></input>
      </form>
      <button type="sumit" onClick={handle}>Get otp</button>
    </div>
  );
}

export default App;
