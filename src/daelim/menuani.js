import { useSpring, animated } from 'react-spring'
import styled, { css } from "styled-components"


const NavbarMenuLi2 = styled.li
    `
background :#38cbae;
display:inline-block;
margin : 0;
padding : 0;
text-align : left;
width :120%;
width:'200px',
height:'50px'
`

function MenuAnimation() {
    const props = useSpring(
        {
            opacity: 1,
            from: { opacity: 0 },
            margin: 0,
            padding: 0,
            position: 'absolute',
          
            transition: '0.2s'
        })
return (
    <animated.ul style={props}>
        <NavbarMenuLi2><span>It Home Page</span></NavbarMenuLi2>
        <NavbarMenuLi2><span>It Dark Home Page</span></NavbarMenuLi2>
    </animated.ul>
)
}


export default MenuAnimation;