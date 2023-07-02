
import React from 'react';
import style from "./Pricing.module.css";

function Pricing() {
    return (
        <>
            <div  className={style.Member}style={{
                color: "red",
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'rgb(52, 60, 60)'
            }}>  <h1 >Member Ship</h1></div>

            <div className={style.main} id="Pri">
                <div className={style.rightDiv}>

                    <div className={style.Card1}>
                        <h4>Day Pass</h4>
                        <div style={{ display: "flex", color: "green" }}>
                            <span style={{ fontSize: '20px' }}>$</span>
                            <h1>20</h1>
                        </div>
                        <div>
                            <p className={style.P}>/ Pass</p>
                            <p>✅One day Pass</p>
                            <p>✅Free Gym Access</p>
                            <p>✅24 Hour Access</p>
                        </div>

                        <button onClick={(() =>
                            alert("Get Started"))} className={style.btn}>Get Started</button>


                    </div>
                    <div className={style.Card2}>
                        <h4 className={style.h}>Month to Month</h4>
                        <div style={{ display: "flex", color: "green" }}>
                            <span style={{ fontSize: '20px' }}>$</span>
                            <h1>90</h1>
                        </div>
                        <div>
                            <p className={style.P}>/ Month</p>
                            <p>✅$99 Joining Fee</p>
                            <p>✅No Contract</p>
                            <p>✅Free Gym Access</p>
                        </div>

                        <button onClick={(() =>
                            alert("Get Started"))} className={style.btn1}>Get Started</button>
                    </div>
                </div>

                <div className={style.leftDiv}>


                    <div style={{marginLeft:'20px' }}>
                        <p >
                            <span ><h4 style={{ color: 'white', marginTop: '30px' }}>From Punch Pass to Monthly or Annual</h4></span>


                            <h6 style={{ color: 'black', marginTop: '20px' }}> flexibility.</h6>

                            <span ><h4 style={{ color: 'white', marginTop: '30px' }}>Each plan included</h4></span>

                            <h6  style={{ color: 'white', marginTop: '30px' }}>  ➡The best equipment global brands</h6>

                            <h6  style={{ color: 'white', marginTop: '10px' }}> ➡The gym is open 24 hours a day, 7 days a week</h6>

                            <h6 style={{ color: 'white', marginTop: '10px' }}> ➡Two safe payment methods</h6>

                            <h6  style={{ color: 'white', marginTop: '10px' }}> ➡Group fitness classes in the price of the subscription</h6>

                            <h6  style={{ color: 'white', marginTop: '10px' }}>➡No long-term contract, period</h6>
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Pricing