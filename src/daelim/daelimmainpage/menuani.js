import React from 'react';
import { useSpring, animated } from 'react-spring'
import styled, { css } from "styled-components"


const NavbarMenuLi2 = styled.li
    `
background :#38cbae;
display:inline-block;
margin : 0;
padding : 0;
text-align : center;
border solid 1px;
width :100%;
height:65px;
font-size:16px;
line-height: 65px;
`

function MenuAnimation() {
    const props = useSpring(
        {
            opacity: 1,
            from: { opacity: 0 },
            margin: 0,
            padding: 0,
            position: 'absolute',
          
            transition: '0.1s'
        })
return (
    <animated.ul style={props}>
        <NavbarMenuLi2><span>유압장비</span></NavbarMenuLi2>
        <NavbarMenuLi2><span>발전기</span></NavbarMenuLi2>
        <NavbarMenuLi2><span>기타장비</span></NavbarMenuLi2>
    </animated.ul>
)
}


export default MenuAnimation;