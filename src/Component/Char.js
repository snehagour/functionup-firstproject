// RecoilRoot,
//   atom,
//   selector,
//   useRecoilState,
//   useRecoilValue,


import React from 'react'

import {RecoilRoot,atom,useRecoilState,selector} from 'recoil'

const CharAtom=atom({
  key:'charState',
  default:0
})
function Char() {
  const[text,setText]=useRecoilState(CharAtom)
  return (
    <div className='main'>
      <h1>Counter</h1>
      <input type='text' onChange={(e)=>setText(e.target.value)}/>
      <p>{text}</p>

    </div>
    
  )
}
export default Char;
