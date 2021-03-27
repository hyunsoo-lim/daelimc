import React from 'react';
import styled, { css } from "styled-components"
import {useSpring, animated} from 'react-spring'
import MenuAnimation from './menuani';

const NavbarMenu = styled.div
  `
width: auto;
background :#38cbae;
height: 100px;
`


const NavbarMenuSide = styled.div
  `
float: right;
width: auto;
background :#38cbae;
`


const NavbarMenuUl = styled.ul
  `

`

const NavbarMenuLi = styled.li
  `
margin-top : 10px;
padding-right: 50px;
display: block;
position : relative;
float: left;

font-size: 14px;
font-weight: 600;
text-transform: uppercase;
`

const NavbarMenuUl2 = styled.ul
  `

// display : none;
position:absolute;
margin : 0;
padding : 0;
transition: all .5s ease;
`

const NavbarMenuLi2 = styled.li
  `
background :#38cbae;
border solid 1px;
display:inline-block;
margin : 0;
padding : 0;
text-align : left;
width :120%;
`


class DaelimcMainPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = { activeItem: 'home', activeA: 'blue', isHovering : [false,false,false,false] }
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.handleMouseHover1 = this.handleMouseHover1.bind(this);
    this.handleMouseHover2 = this.handleMouseHover2.bind(this);
    this.handleMouseHover3 = this.handleMouseHover3.bind(this);
   
  }





  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleMouseHover =(e) =>{
    const nextState = this.state.isHovering;
    if(nextState[0])
      nextState[0] = false 
    else{
      nextState[0] = true
      nextState[1] = false 
       }
    this.setState ({isHovering: nextState}) 
  }
  handleMouseHover1 =(e) =>{
    const nextState = this.state.isHovering;
    if(nextState[1])
      nextState[1] = false 
    else{
      nextState[1] = true
      nextState[0] = false 
      nextState[2] = false 
    }
    this.setState ({isHovering: nextState}) 
  }
  handleMouseHover2 =(e) =>{
    const nextState = this.state.isHovering;
    if(nextState[2])
      nextState[2] = false 
    else{
      nextState[2] = true
      nextState[1] = false 
      nextState[3] = false 
   }
    this.setState ({isHovering: nextState}) 
  }
  handleMouseHover3 =(e) =>{
    const nextState = this.state.isHovering;
    if(nextState[3])
      nextState[3] = false 
    else{
      nextState[3] = true
      nextState[2] = false 
   }
    this.setState ({isHovering: nextState}) 
  }
    
    
 


  

  componentDidMount() {
  }

  render() {
   
    return (

      <NavbarMenu>

        {/* <!-- logo start --> */}
        <div class="logo"> <a href="it_home.html"><img src="images/logos/it_logo.png" alt="logo" /></a> </div>
        {/* <!-- logo end --> */}


        {/* <!-- menu start --> */}
        <NavbarMenuSide>
          <NavbarMenuUl>
            <NavbarMenuLi value='0' onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}> <span>Home</span>
            {this.state.isHovering[0]
              && <MenuAnimation/>}
               
            </NavbarMenuLi>

            <NavbarMenuLi><span>About Us</span></NavbarMenuLi>

            <NavbarMenuLi value='1' onMouseEnter={this.handleMouseHover1} onMouseLeave={this.handleMouseHover1}> <span>Service</span>
            {this.state.isHovering[1]
              &&<NavbarMenuUl2>
                <NavbarMenuLi2><span>Services list</span></NavbarMenuLi2>
                <NavbarMenuLi2><span>Services Detail</span></NavbarMenuLi2>
              </NavbarMenuUl2>}
            </NavbarMenuLi>

            <NavbarMenuLi value='2' onMouseEnter={this.handleMouseHover2} onMouseLeave={this.handleMouseHover2}> <span>Pages</span>
             
              {this.state.isHovering[2]
              &&<NavbarMenuUl2>
                <NavbarMenuLi2><span>Career</span></NavbarMenuLi2>
                <NavbarMenuLi2><span>Pricing</span></NavbarMenuLi2>
                <NavbarMenuLi2><span>Faq</span></NavbarMenuLi2>
                <NavbarMenuLi2><span>Privacy Policy</span></NavbarMenuLi2>
                <NavbarMenuLi2><span>Error 404</span></NavbarMenuLi2>
              </NavbarMenuUl2>}
            </NavbarMenuLi>

            <NavbarMenuLi value='3' onMouseEnter={this.handleMouseHover3} onMouseOut={this.handleMouseHover3}> <span>Contact</span>
            {this.state.isHovering[3]
              &&<NavbarMenuUl2>
                <NavbarMenuLi2><span>Contact Page 1</span></NavbarMenuLi2>
                <NavbarMenuLi2><span>Contact Page 2</span></NavbarMenuLi2>
              </NavbarMenuUl2>}
            </NavbarMenuLi>
          </NavbarMenuUl>

        </NavbarMenuSide>
      </NavbarMenu>




      // <Segment inverted color='blue'>
      //   <Menu inverted secondary pointing size='large'>
      //     <Menu.Item
      //       name='home'
      //       active={this.state.activeItem === 'home'}
      //       onClick={this.handleItemClick}
      //       // color={this.state.activeA}

      //     />
      //     <Menu.Item
      //       name='messages'
      //       active={this.state.activeItem === 'messages'}
      //       onClick={this.handleItemClick}
      //       // color={this.state.activeA}
      //     />
      //     <Menu.Item
      //       name='friends'
      //       active={this.state.activeItem === 'friends'}
      //       onClick={this.handleItemClick}
      //       // color={this.state.activeA}
      //     />
      //   </Menu>
      //  </Segment>
    )
  }
}

export default DaelimcMainPage;