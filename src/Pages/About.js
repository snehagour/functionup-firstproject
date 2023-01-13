// import React from 'react'
import React from 'react'
import ReactPlayer from 'react-player/youtube'
import '../Pages/About.css'

// Only loads the YouTube player


function About() {
  return (
    <>
    <div className='body' id='Abo'>
    <div className='half'>
    <ReactPlayer url='https://youtu.be/gDMcoLSirRk' width='70%' height='40%'/>

    <h1 className='pale'>Why Choose Us</h1>
    <h3 className='pa'>We listen to you: We customize every workout to help you reach your goals.
        </h3>
    </div>

    
    <div className='half1'>
    <h1 className='pale'>About Us</h1>
    <h3 className='pa'>We have some pretty amazing people working with us, </h3>
    <ReactPlayer url='https://youtu.be/X_9VoqR5ojM' width='70%' height='40%'/>

   
    </div>

    </div>
    
    
    </>
    
  )
}

export default About