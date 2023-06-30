import './App.css'
import {useState} from 'react'
export default function App() {
  const[data,setdata]=useState()
  const[calculate,setcalculate]=useState()
  const[result,setresult]=useState()
  return (
    <div className="App">
    <div className='calculator'>
    <br/><br/><br/>
    <input style={{width:"200px",height:"30px"}} type='text'
     placeholder='enter first number'
     onChange={((e)=>{setdata(e.target.value)})} />
      <br/><br/>
      <input  style={{width:"200px",height:"30px"}} placeholder='enter second number'
      type='text' onChange={((e)=>{ setcalculate(e.target.value)})} /> <br/><br/>
      <br/><button onClick={(()=>{setresult(Number(data)+Number(calculate) )})}>addition</button>
      <button onClick={(()=>{setresult(data-calculate)})}>substraction</button>
      <button onClick={(()=>{setresult(data*calculate)})}>multiply</button>
      <button onClick={(()=>{setresult(data/calculate)})}>divide</button>
      <br/> <h1> {result}</h1></div>

    </div>
  );
}