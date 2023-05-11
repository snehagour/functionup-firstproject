import React, { useState } from 'react'
import './Game.css';
import Squre from './Squre'

function Game() {
   const[state,setState]= useState(Array(9).fill(null));
   const [turn, setTurn]= useState(true);

   const checkwin=()=>{
    const winlogic =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let logic of winlogic ){
        const [a,b,c]=logic ;
        if( state[a] !==null && state[a]===state[b] && state[a]===state[c]){
            return state[a];
        }  
     }
     return false;
   }
   const iswinn = checkwin();
   
  const handleClick = (index)=>{
    if(state[index]!==null){
        return;
    }
  const copyState =[...state]
 copyState[index] = turn? "x": "0";
 setState(copyState);
 setTurn(!turn)

  }

  const click =()=>{
    setState(Array(9).fill(null))
  }
  return (
    <div className='board-container'>
    {iswinn ?(<>{iswinn} won the game.. <button onClick={click}>Play again</button></>):(<>
    <h4>player {turn? "x":"o"}  please move </h4>
      <div className='board-row'>
      <Squre  onClick={()=>handleClick(0)}  value={state[0]}/>
      <Squre onClick={()=>handleClick(1)} value={state[1]}/>
      <Squre onClick={()=>handleClick(2)} value={state[2]}/>
      </div>
      <div  className='board-row'>
      <Squre onClick={()=>handleClick(3)} value={state[3]}/>
      <Squre onClick={()=>handleClick(4)} value={state[4]}/>
      <Squre onClick={()=>handleClick(5)} value={state[5]}/>
      </div>
      <div className='board-row'>
      <Squre onClick={()=>handleClick(6)} value={state[6]}/>
      <Squre onClick={()=>handleClick(7)} value={state[7]}/>
      <Squre onClick={()=>handleClick(8)} value={state[8]}/> 
      </div>
      </>
        )}
    </div>
        
  )
}

export default Game;
