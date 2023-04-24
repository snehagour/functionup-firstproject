import React from 'react'
import Image from  './images.jpg'

function Home() {
  return (
    <div id='Hom'>
      {/* <h1 style={{marginTop:'5rem'}}>hello</h1> */}
        <img  className='Home' src={Image} width='100%' height='100%'></img>
    </div>
  )
}

export default Home