

import React from 'react'
import style from "./Pricing.module.css"

function Pricing() {
  return (
    <div className={style.main} id="Pri">
        <div className={style.rightDiv}>

            <div className={style.Card1}>
                <h4>Day Pass</h4>
                <div style={{display:"flex",color:"green"}}>
                <span style={{fontSize:'20px'}}>$</span>
                <h1>20</h1>
                </div>
                <div>
                <p className={style.P}>/ Pass</p>
                <p>✅One day Pass</p>
                <p>✅Free Gym Access</p>
                <p>✅24 Hour Access</p>
                </div>
               
                <button onClick={(()=>
                    alert("Get Started"))} className={style.btn}>Get Started</button>

                
            </div>
            <div className={style.Card2}>
            <h4 className={style.h}>Month to Month</h4>
                <div style={{display:"flex",color:"green"}}>
                <span style={{fontSize:'20px'}}>$</span>
                <h1>90</h1>
                </div>
                <div>
                <p className={style.P}>/ Month</p>
                <p>✅$99 Joining Fee</p>
                <p>✅No Contract</p>
                <p>✅Free Gym Access</p>
                </div>
               
                <button onClick={(()=>
                    alert("Get Started"))} className={style.btn1}>Get Started</button>
            </div>
        </div>

        <div className={style.leftDiv}>
            <h1 style={{textDecoration:"underline",color:"red",textDecorationColor:"green"}}>Member Ship</h1>
            <br/>
            <br/>
            <div>
                <p style={{color:'white'}}>
        <span><h4>From Punch Pass to Monthly or Annual</h4></span>
        <br/>
        <br/>

At Gym Base, we offer a wide range of membership with options to suit every budget. Everything from One Day Pass, Punch Pass to monthly or annual prepaid memberships. What's more, we wont tie you in to a long term contract, giving you greater flexibility.
<br/>
<br/>
<span><h4>Each plan included</h4></span>
<br/>
<br/>
➡The best equipment global brands
<br/>
➡The gym is open 24 hours a day, 7 days a week
<br/>
➡Two safe payment methods
<br/>
➡Group fitness classes in the price of the subscription
<br/>
➡No long-term contract, period</p>
            </div>
        </div>
      
    </div>
  )
}

export default Pricing