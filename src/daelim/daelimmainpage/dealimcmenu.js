import React from 'react';
import styled, { css } from "styled-components"
import MenuAnimation from './menuani'
import MenuUnderAnimation from './menuunderani';
import { BrowserRouter as BrowserRouter, Link } from 'react-router-dom';

const NavbarMenu = styled.div
  `
width: auto;
background :#38cbae;
height: 100px;
margin: 2px;
`

const NavbarMenuSide = styled.div
  `
float: right;
width: auto;
height:100px;
margin-right: 100px;
background :#38cbae;
`

const NavbarMenuUl = styled.ul
  `
margin:0;
`
const NavbarMenuLi = styled.li
  `
width: 160px;
height:100px;
display: block;
position : relative;
float: left;
font-size: 20px;
font-weight: 600;
color:#ffffff;
text-transform: uppercase;
text-align : center;
`

// const NavbarMenuUl2 = styled.ul
//   `
// position:absolute;
// margin : 0;
// padding : 0;
// transition: all .5s ease;
// `
// const NavbarMenuLi2 = styled.li
//   `
// background :#38cbae;
// border solid 1px;
// display:inline-block;
// margin : 0;
// padding : 0;
// text-align : left;
// width :120%;
// `



const NavbarMenuUnder = styled.div
  `
width : 100%;
height : 10px;
background :#ffffff;
position : absolute;
left : 0;
bottom : 0;
margin-top : 10px;
`

const NavbarMenuText = styled.span
  `
height:100px;
line-height: 100px;
`
const NavbarMenuUnderLine = styled.div
  `
width : 100%;
height : 10px;
background :#ffffff;
position : absolute;
left : 0;
bottom : 0;
margin-top : 10px;
`



class Menu extends React.Component {

  constructor(props) {
    super(props)
    this.state = { activeItem: 'home', activeA: 'blue', isHovering: [false, false, false, false] }
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleLiActive = this.handleLiActive.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


    handleClick(linum) {
        
        // setTimeout(() => {
            // css의 적용이 느려 timeout을 준다
            document.getElementsByClassName("active").item(0).style.display = 'none'
            document.getElementsByClassName("active").item(1).style.display = 'none'
            document.getElementsByClassName("active").item(2).style.display = 'none'
            document.getElementsByClassName("active").item(3).style.display = 'none'
            document.getElementsByClassName("active").item(linum).style.display = 'block'
            
        // }, 100);
    }


  handleMouseHover = (e) => {
    const nextState = this.state.isHovering;
    nextState[0] = false
    nextState[1] = false
    nextState[2] = false
    nextState[3] = false
    nextState[e.currentTarget.value] = true
    e.currentTarget.style.background = '#39B4CC'
    if (e.currentTarget.value === 3) { }
    else {
      document.getElementById("menu3").style.backgroundColor = '#38cbae';
    }

    this.setState({ isHovering: nextState })
  }

  handleMouseLeave = (e) => {
    e.currentTarget.style.background = '#38cbae';
    console.log(e.currentTarget.value);
    // document.getElementsByClassName("active").item(1).style.display = 'block'
  }


  handleLiActive() {

    document.getElementsByClassName("active").item(0).style.display = 'block'
    document.getElementsByClassName("active").item(1).style.display = 'none'
    document.getElementsByClassName("active").item(2).style.display = 'none'
    document.getElementsByClassName("active").item(3).style.display = 'none'
  }

  componentDidMount() {
    this.handleLiActive()
  }

  render() {

    return (
      <div>
        <NavbarMenu>

          {/* <!-- menu start --> */}
          <NavbarMenuSide>
            <NavbarMenuUl>
              <NavbarMenuLi value='0' onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseLeave}>
                <div>
                  <Link to="/" onClick={() => this.handleClick(0)}><NavbarMenuText>홈</NavbarMenuText></Link>
                  <NavbarMenuUnderLine className='active' />
                  {this.state.isHovering[0]
                    && <MenuUnderAnimation />}
                </div>
              </NavbarMenuLi>

              <NavbarMenuLi value='1' onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseLeave}>
                <div>
                  <Link to="/about" onClick={() => this.handleClick(1)}><NavbarMenuText>회사소개</NavbarMenuText></Link>
                  <NavbarMenuUnderLine className='active' />
                  {this.state.isHovering[1]
                    && <MenuUnderAnimation />}
                </div>
              </NavbarMenuLi>

              <NavbarMenuLi value='2' onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseLeave}>
                <div>
                  <Link to="/product" onClick={() => this.handleClick(2)}><NavbarMenuText>제품</NavbarMenuText></Link>
                  <NavbarMenuUnderLine className='active' />
                  {this.state.isHovering[2]
                    && <MenuUnderAnimation />}
                </div>
                {this.state.isHovering[2]
                  && <MenuAnimation />}
              </NavbarMenuLi>

              <NavbarMenuLi id="menu3" value='3' onMouseEnter={this.handleMouseHover} >
                <div>
                  <Link to="/contact" onClick={() => this.handleClick(3)}><NavbarMenuText>문의</NavbarMenuText></Link>
                  <NavbarMenuUnderLine className='active' />
                  {this.state.isHovering[3]
                    && <MenuUnderAnimation />}
                </div>
              </NavbarMenuLi>

            </NavbarMenuUl>
          </NavbarMenuSide>
        </NavbarMenu>
        {/* <!-- menu end --> */}
      </div>
    )
  }
}

export default Menu;