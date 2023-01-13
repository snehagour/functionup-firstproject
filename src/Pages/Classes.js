import React from 'react'
import { FaGoogle ,FaInstagram} from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import '../Pages/Classes.css'


function Classes() {
  return (
    <>
    <div className='diccenter' id='pi'>
<div className='divmain1'>
     <p className='p1'>GYM</p>
     <h3 className='h3'>
        Learn ipsum dolor sift feugiat varius nue aliqiat.
     </h3>
     <h2>
     {/* <script src="www.google.com"> <FaGoogle/></script> */}
        <a href='https://www.google.com/'><FaGoogle/></a>
      <a href='https://www.instagram.com/'> <FaInstagram/></a>
      <a href='https://www.facebook.com/'> <IoLogoFacebook/> </a></h2>

</div >
<div  className='divmain2'>
  <p>Healthy Living</p>
  <p> Loregun</p>
  <p>Loreum ipsum</p>
  <p>loreum</p>
  <p>loreum</p>

        
</div>
  <div  className='divmain3'>
    <p>serivces</p>
    <p>loreum</p>
    <p>loreum</p>
    <p>loreum</p>
    <p>loreum</p>
  </div>


  <div  className='divmain4'>
    <p>Program</p>
    <p>Loregun</p>
    <p>serivces</p>
    <p>serivces </p>
    <p>serivces</p>
  </div>


    </div>
  <h5 className='h5'>© LegalZoom.com, Inc. All rights reserved.Swayam Gaur</h5>
   
   


    
   
   </>

  )
}

export default Classes