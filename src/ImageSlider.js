import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"
import React from 'react'
  
const ImageSlider = ({image}) => {
  
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1, 
    slidesToScroll: 1,
    lazyLoad: true,
    // autoplay: true,
  //  autoplaySpeed: 2000,
   
  };
  return (
    <><div className="black" id='Cla'>
    <div className="tag">
          <h1 style={{color: "red" , fontWeight:"bold"}}>Training Program</h1>
    </div>
      <div className="imgslider">
        
        <Slider {...settings}>
          {image.map((item) => (
            <div key={item.id}>
              <img src={item.src}  alt={item.alt} />
            </div>
          ))}
          
        </Slider>
     
        <h1  className="trainer">Trainer section
        </h1>
        </div>
        {/* <div className="src"> */}
          <img src='https://wallpaperaccess.com/full/2040350.jpg'  width='20%' className="src"/>
        <img src='https://wallpaperaccess.com/full/1504570.jpg'width='20%' className="src" />
        {/* <img src='https://wallpaperaccess.com/full/1107998.jpg'width='20%' className="src"/> */}
        <img src='https://wallpaperaccess.com/full/2040342.jpg' width='20%' className="src"/>
        <img src='https://wallpaperaccess.com/full/1244972.jpg' width='20%' className="src"/>
        
        {/* </div> */}
      </div>
     
          </>
  )
}
export default ImageSlider;
