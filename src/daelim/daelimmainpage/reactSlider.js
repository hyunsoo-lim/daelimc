import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components"


const BREAK_POINT_MOBILE = 768;
const BREAK_POINT_TABLET = 992;
const BREAK_POINT_PC = 1200;


const SliderImg = styled.img
`
display: block; 
margin:0 auto;
hegiht:600px;
width: 1080px;

@media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
  width: 768px;
  hegiht:444px;
}
@media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
  width: 768px;
  hegiht:444px;
}
@media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
  width: 1080px;
  hegiht:600px;

@media only screen and (min-width: ${BREAK_POINT_PC}px) {
  width: 1080px;
  hegiht:600px;
}

`



const SliderDiv2 = styled.div
`
hegiht:600px;
text-align:center;
background:#EAEAEA;

@media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
  width: 768px;
  hegiht:444px;
}
@media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
  width: 768px;
  hegiht:444px;
}
@media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
  width: 1080px;
  hegiht:600px;
}
@media only screen and (min-width: ${BREAK_POINT_PC}px) {
  width: 1080px;
  hegiht:600px;
}
`

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    // fade:true,
    // arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
   
      <Slider {...settings}>
        <SliderDiv2>
          <SliderImg src='bannerimg1.png' />
        </SliderDiv2>
        <SliderDiv2>
          <SliderImg src='bannerimg1.png' />
        </SliderDiv2>
        <SliderDiv2>
          <SliderImg src='bannerimg1.png' />
        </SliderDiv2>
      </Slider>
   
  );
}