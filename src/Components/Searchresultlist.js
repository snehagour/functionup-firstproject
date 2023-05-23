import React from 'react'
import "./Searchresultlist.css"


export const Searchresultlist=({result})=>{
  return (
    <div className='result-list'
     onClick={(e)=> alert(`you clicked on ${result}`)}
     >{result}
     </div>
  )
}

export default Searchresultlist
