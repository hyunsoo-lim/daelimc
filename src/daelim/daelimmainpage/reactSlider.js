import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green"}}
        onClick={onClick}
      />
    );
  }


export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight:true,
        // fade:true,
        // arrows: true,
        autoplay: true,
        autoplaySpeed: 10000,
    };
    return (
        <Slider {...settings}>
            <div>
               <img src ='engine01.jpg'/>
            </div>
            <div>
                <img src ='engine01.jpg'/>
            </div>
            <div>
                <img src ='engine01.jpg'/>
            </div>
        </Slider>
    );
}