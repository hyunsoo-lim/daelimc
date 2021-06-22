import React from 'react';
import styled from "styled-components"
import { useSpring, animated } from 'react-spring'

const NavbarMenuUnder = styled.div
  `
width : 100%;
height : 6px;
background :#489CFF;
position : absolute;
left : 0;
bottom : 0;
margin-top : 10px;
`



function MenuUnderAnimation() {
    const props = useSpring(
        {
            opacity: 1,
            from: { opacity: 0 },
            transition: '0.1s'
        })
return (
    <animated.div style={props}>
                  <NavbarMenuUnder />  
    </animated.div>
)
}


export default MenuUnderAnimation;