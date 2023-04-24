import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"
import React from 'react'

const ImageSlider = ({ image }) => {

  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
  };
  return (
    <>
      <div className="black" id='Cla'>
        <div className="tag">
          <h1 style={{ color: "red", fontWeight: "bold" }}>Training Program</h1>
        </div>
        <div className="imgslider" >
          <div style={{width:'90%' , borderRadius:'10px'}}>
            <Slider {...settings}>
              {image.map((item) => (
                <div key={item.id} >
                  <img style={{ borderRadius:'10px'}} src={item.src} alt={item.alt} />
                </div>
              ))}

            </Slider>
          </div>

          <h1 className="trainer">Trainer section
          </h1>
        </div>
        <div className="src11">
        <img src='https://wallpaperaccess.com/full/2040350.jpg' width='20%' className="src" />
        <img src='https://wallpaperaccess.com/full/1504570.jpg' width='20%' className="src" />
        <img src='https://wallpaperaccess.com/full/2040342.jpg' width='20%' className="src" />
        <img src='https://wallpaperaccess.com/full/1244972.jpg' width='20%' className="src" />
        </div>
      </div>

    </>
  )
}
export default ImageSlider;
