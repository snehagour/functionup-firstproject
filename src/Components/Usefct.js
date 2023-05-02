import {React,useRef }from 'react'

function Usefct() {
     const fileRef = useRef();

      function HandleClick(){
        fileRef.current.click();

      }

  return (
    <div>
    <h1 style={{color: "red"}}>upload your file</h1>
     <input  style={{border:"2px solid black", fontSize: "15px"}} type="file" ref={fileRef}/>
    <button style={{border:"2px solid black", fontSize: "15px"}} onClick={HandleClick}>Pick your file </button>
    </div>
  )
}

export default Usefct
