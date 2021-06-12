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



@media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
  width: 100%;
  hegiht:30%;
}
@media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
  width: 100%;
  hegiht:30%;
}
@media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
  width: 100%;
  hegiht:30%;

@media only screen and (min-width: ${BREAK_POINT_PC}px) {
  width: 1080px;
  hegiht:30%;
}

`



const SliderDiv2 = styled.div
`

text-align:center;
background:#EAEAEA;

@media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
  width: 100%;
  hegiht:30%;
}
@media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
  width: 100%;
  hegiht:30%;
}
@media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
  width: 100%;
  hegiht:30%;
}
@media only screen and (min-width: ${BREAK_POINT_PC}px) {
  width: 1080px;
  hegiht:30%;
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