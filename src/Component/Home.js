import React from 'react'
function Home() {
  return (
    <div className='home'>
           <div className='dis'>
      <img src="https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_960_720.jpg" />

      <div className='form1'>
      <div className='form2'>
        <form action='' method=''>
          <h3>Login Form</h3>
          <div className="contaner">
            <input type='text' placeholder='Enter User Name' name='uname' required/>
            <br/>
            <br/>
            <input type='Password' placeholder='Enter Your password' name='uname' required/>
            <br/>
            <br/>
            <input type='Email Adress' placeholder='Enter Your Email' name='uname' required/>
            <br/>
            <br/>
            <a href='#' id='forgot-password'></a>
            <button type='summit' id='login-button'>Login</button>
            <div className='member'>
              not a member? <a href='#' id='sign-up'>sign up</a>

            </div>
            
          </div>


    
        </form>
      </div>
      </div>
    </div> 
  
    </div>
  )
}

export default Home;

// .nav ul{
//   width: 100%;
//   height: 100%;
//   color: white;
//   display: flex;
//   background-color: black;

// }
// #bar{
//   display:block;
//   padding-left: 250px;
//   text-align: center;
//   padding-top: -10px
// }

// nav ul.active{
//   right: 0px;
//   background-color: black;
// }

// nav li{
//   display:none;
// }
// #mobile i{
//   display: flex;
// }
  
// }