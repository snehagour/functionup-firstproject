import React from 'react'
import "./Invitation.css"

function Invitation(props) {
  return (
    <div className='invation'>
   <b>Subject : {props.subject}</b><br/>
    <b>To : {props.email}</b><br/>
    <br/>
    <b>Hii  , {props.host}</b><br/>
    <p>i am having a  {props.topic}  next Friday at my Home. Would you like to come? it will be fun.Lost of people  from my School are cominnh. you Know some of them -  {props.friends}<br/> 
    <br/>
     My house is behind our School , near {props.venue}<br/> 
     <br/>
    i hope you will come and see you soon.<br/>
    <br/>
    From , <br/>
    {props.host}
    </p>
    </div>
  )
}

export default Invitation
