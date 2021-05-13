import React ,  { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import styled, { css } from "styled-components"


const NavbarNavbarMenuLi2Back =styled.ul
`
width :100%;

margin : 0;
padding : 5;
`
const NavbarMenuLi2 = styled.li
    `
background :#38cbae;
display:inline-block;
text-align : center;
border solid 1px;
width :80%;
height:55px;
font-size:16px;
line-height: 65px;
`

function MenuAnimation(props) {
    const prop = useSpring(
        {
            opacity: 1,
            from: { opacity: 0 },
            margin: 0,
            padding: 0,
            position: 'absolute',
          
            transition: '0.1s'
        })
        
       const handelr=(e)=>{
            console.log("aaaaaaaa");
        }

return (
    <animated.div style={prop}   >
        <NavbarNavbarMenuLi2Back onMouseEnter={props.handelr} onMouseLeave={props.handelr}>
        <NavbarMenuLi2  onMouseEnter={handelr} onMouseLeave={handelr}><span>유압장비</span></NavbarMenuLi2>
       
        <NavbarMenuLi2 onMouseEnter={props.handelr}><span>발전기</span></NavbarMenuLi2>
       
        <NavbarMenuLi2><span>기타장비</span></NavbarMenuLi2>
        </NavbarNavbarMenuLi2Back>
    </animated.div>
)
}


export default MenuAnimation;