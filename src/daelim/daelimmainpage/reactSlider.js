import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components"

const SliderImg= styled.img
`
overflow:visible;
`

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
        autoplaySpeed: 4000,
    };
    return (
        <Slider {...settings}>
            <div>
               <SliderImg src ='vimg.jpg'/>
            </div>
            <div>
                <SliderImg src ='vimg.jpg'/>
            </div>
            <div>
                <SliderImg src ='vimg.jpg'/>
            </div>
        </Slider>
    );
}