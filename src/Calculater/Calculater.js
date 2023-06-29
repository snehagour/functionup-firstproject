import React,{useState}from 'react'

 function Calculater() {
    const[result,setResult] = useState(" ");
    const clickHandler=(event)=>{
    setResult(result.concat(event.target.value))
} 
   const ClearDisplay=()=>{
   setResult(" ");
}

const calculate=()=>{
    setResult(eval(result).toString());
}
  return (
    <>
    <h1 className='hii' style={{color:'blue'}}> Welcome to Calculater</h1>
    <div className='main'>
    <div className='calc'>
        <input type="text" placeholder='hii' id='ans' value={result}/>
        <input type='button' value='9' className='button' onClick={clickHandler}/>
        <input type='button' value='8' className='button' onClick={clickHandler}/>
        <input type='button' value='7' className='button' onClick={clickHandler}/>
        <input type='button' value='6' className='button' onClick={clickHandler}/>
        <input type='button' value='5' className='button' onClick={clickHandler}/>
        <input type='button' value='4' className='button' onClick={clickHandler}/>
        <input type='button' value='3' className='button' onClick={clickHandler}/>
        <input type='button' value='2' className='button' onClick={clickHandler}/>
        <input type='button' value='1' className='button' onClick={clickHandler}/>
        <input type='button' value='0' className='button' onClick={clickHandler}/>
        <input type='button' value='00' className='button' onClick={clickHandler}/>

        <input type='button' value='.' className='button' onClick={clickHandler}/>
        <input type='button' value='+' className='button' onClick={clickHandler} />
        <input type='button' value='-' className='button' onClick={clickHandler}/>
        <input type='button' value='*' className='button' onClick={clickHandler}/>
        <input type='button' value='/' className='button' onClick={clickHandler}/>
        <input type='button' value='%' className='button' onClick={clickHandler}/>

        <input type='button' value='Clear' className='button1' onClick={ClearDisplay}/>
        <input type='button' value='=' className='button1' onClick={calculate}/>
    </div>
    </div>
    </>
  )
}
export default Calculater;