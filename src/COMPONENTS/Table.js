import React, { useState } from 'react'
import "./Table.css"
function Table() {
  const[data,setData] = useState()

    function handleChange (e){
      setData(e.target.value) 
    }
  return (
    <>
    <div id="myInput">
    Number:<input type="Number" placeholder='Type a number' onChange={handleChange} value={data} name='Number'/> 
    <br/>
     
    <p>{data*1}</p>
    <p>{data*2}</p>
    <p>{data*3}</p>
    <p>{data*4}</p>
    <p>{data*5}</p>
    <p>{data*6}</p>
    <p>{data*7}</p>
    <p>{data*8}</p>
    <p>{data*9}</p>
    <p>{data*10}</p>

    

    </div>
    </>
  )
}

export default Table;
