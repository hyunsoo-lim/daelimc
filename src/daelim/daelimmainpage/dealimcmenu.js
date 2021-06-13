import React from 'react';
import styled from "styled-components"
import MenuAnimation from './menuani'
import MenuUnderAnimation from './menuunderani';
import { BrowserRouter as BrowserRouter, Link } from 'react-router-dom';


const BREAK_POINT_MOBILE2 = 600;
const BREAK_POINT_MOBILE = 768;
const BREAK_POINT_TABLET = 992;
const BREAK_POINT_PC = 1200;

const Logo = styled.p
`
height: 50px;
object-fit: cover;
font-size: 35px;
color:#6CC0FF;
font-weight:500;
text-align:center;

@media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
  width: 80%;
  margin:0 auto;
  line-height: 50px;
}
@media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
  width: 80%;
  margin:0 auto;
  line-height: 50px;
}
@media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
  width: 80%;
  margin:0 auto;
  line-height: 50px;
}
@media only screen and (min-width: ${BREAK_POINT_PC}px) {
  width: 80%;
  margin-left:20px;
  line-height: 50px;
}
`
const LogoTop = styled.div
`
width: 120px;


@media only screen and (max-width: 600px) {
  height: 0px;
}

@media only screen and (min-width: 600px) {
  height: 0px;
}
`


// const calcWidthPercent = div => {
//   if (!div) return;

//   const width = (div / 12) * 100;
//   return width;
// };

const NavbarMenu = styled.div
  `


 
  margin: 0 auto;

@media only screen and (max-width: 600px) {
  width: 100%;
  height: 20%;
}

@media only screen and (min-width: 600px) {
  width:  100%;
  height: 20%;
}

@media only screen and (min-width: 768px) {
  width:  100%;
  height: 120px;
}

@media only screen and (min-width: 992px) {
  width: 992px;
  height: 120px;
}

@media only screen and (min-width: 1200px) {
  width: 1080px;
  height: 120px;
}
`

const LogoSide = styled.div
`


padding:0;


@media only screen and (max-width: 600px) {
  width: 100%;
  height:100px;
  margin:0 auto;
}

@media only screen and (min-width: 600px) {
  width: 100%;
  height:60px;
  margin:0 auto;
}

@media only screen and (min-width: 768px) {
  width:100%;
  height:80px;
  margin:0 auto;
}
@media only screen and (min-width: 992px) {
  width: 100%;
  height:80px;
  margin:0 auto;
}

@media only screen and (min-width: 1200px) {
  width: 440px;
  height:120px;
  margin:0;
  float:left;

`

const NavbarMenuSide = styled.div
  `

padding:0;
@media only screen and (max-width: 600px) {
  width: 100%;
  margin:0 auto;
  height:50px;
}
@media only screen and (min-width: 600px) {
  width: 100%;
  margin:0 auto;
  height:50px;
}
@media only screen and (min-width: 768px) {
  width: 100%;
  margin:0 auto;
  height:50px;
}
@media only screen and (min-width: 992px) {
  width: 100%;
  margin:0 auto;
  height:50px;
}
@media only screen and (min-width: 1200px) {
  width: 640px;
  margin:0;
  float:left;
  height:120px;
}
`

const NavbarMenuUl = styled.ul
  `
margin:0;
padding:0;
`
const NavbarMenuLi = styled.li
  `


display: block;
position : relative;
float: left;
font-size: 20px;
font-weight: 550;
color:#5A5A5A;
text-transform: uppercase;
text-align : center;


@media only screen and (max-width: ${BREAK_POINT_MOBILE2}px) {
  width: 25%;
  height:50px;
}
@media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
  width: 25%;
  height:20%;
}
@media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
  width: 25%;
  height:20%;
}
@media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
  width: 25%;
  height:20%;
 
}
@media only screen and (min-width: ${BREAK_POINT_PC}px) {
  width: 160px;
}
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



// const NavbarMenuUnder = styled.div
//   `
// width : 100%;
// height : 10px;
// background :#ffffff;
// position : absolute;
// left : 0;
// bottom : 0;
// margin-top : 10px;
// `

const NavbarMenuText = styled.span
  `


@media only screen and (max-width: ${BREAK_POINT_MOBILE2}px) {
  height:80px;
  line-height: 80px;
}
@media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
  height:80px;
  line-height: 80px;
}
@media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
  height:80px;
  line-height: 80px;
}
@media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
  height:80px;
  line-height: 80px;
 
}
@media only screen and (min-width: ${BREAK_POINT_PC}px) {
  height:120px;
  line-height: 120px;
}
`
const NavbarMenuUnderLine = styled.div
  `
width : 100%;
height : 6px;
background :#489CFF;
position : absolute;
left : 0;
bottom : 0;
margin-top : 10px;
`


const NavbarBottom = styled.div
  `
clear: both;
width : 100%;
height : 1px;
background: #E1E1E1;
`



class Menu extends React.Component {

  constructor(props) {
    super(props)
    this.state = { activeItem: 'home', activeA: 'blue', isHovering: [false, false, false, false] }
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.handleMouseHoverBottom = this.handleMouseHoverBottom.bind(this);
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
    e.currentTarget.style.color = '#489CFF'

    // if (e.currentTarget.value === 3) { }
    // else {
    //   document.getElementById("menu3").style.backgroundColor = '#38cbae';
    //  }

    this.setState({ isHovering: nextState })
  }

  handleMouseLeave = (e, num) => {
    const nextState = this.state.isHovering;
    nextState[num] = false
    this.setState({ isHovering: nextState })

    e.currentTarget.style.color = '#5A5A5A';
    console.log(e.currentTarget.value);
    // document.getElementsByClassName("active").item(1).style.display = 'block'
  }


  handleMouseHoverBottom = (e) => {

    console.log('handleMouseHoverBottom');
    const nextState = this.state.isHovering;

    nextState[0] = false
    nextState[1] = false
    nextState[2] = false
    nextState[3] = false
    this.setState({ isHovering: nextState })
  }


  handleLiActive() {
    console.log('handleLiActive')
    const url = window.location.href;
    var url_value = 0;
    document.getElementsByClassName("active").item(0).style.display = 'none'
    document.getElementsByClassName("active").item(1).style.display = 'none'
    document.getElementsByClassName("active").item(2).style.display = 'none'
    document.getElementsByClassName("active").item(3).style.display = 'none'
    console.log(url);
    switch (url) {

      case 'http://daelimc.co.kr/':
        url_value = 0;
        break;
      case 'http://www.daelimc.co.kr/':
        url_value = 0;
        break;
      case 'http://localhost:3000/':
        url_value = 0;
        break;

      case 'http://daelimc.co.kr/about':
        url_value = 1;
        break;
      case 'http://www.daelimc.co.kr/about':
        url_value = 1;
        break;
      case 'http://localhost:3000/about':
        url_value = 1;
        break;

      case 'http://daelimc.co.kr/product':
        url_value = 2;
        break;
      case 'http://www.daelimc.co.kr/product':
        url_value = 2;
        break;
      case 'http://localhost:3000/product':
        url_value = 2;
        break;

      case 'http://daelimc.co.kr/contact':
        url_value = 3;
        break;
      case 'http://www.daelimc.co.kr/contact':
        url_value = 3;
        break;
      case 'http://localhost:3000/contact':
        url_value = 3;
        break;
      default:
        break;
    }
    document.getElementsByClassName("active").item(url_value).style.display = 'block'

  }


  componentDidUpdate() {
    this.handleLiActive()
  }

  componentDidMount() {
    this.handleLiActive()
  }

  render() {

    return (
      <div>
        <NavbarMenu>
          <LogoSide>
            <LogoTop id='logotop'/>
               <Link style={{ color: 'inherit' }} to="/" onClick={() => this.handleClick(0)}><Logo>DAELIM CONTROL</Logo></Link>
          </LogoSide>

          <NavbarMenuSide>
            <NavbarMenuUl>
              <NavbarMenuLi value='0' onMouseEnter={this.handleMouseHover} onMouseLeave={(e) => this.handleMouseLeave(e, 0)}>
                <div>
                  <Link style={{ color: 'inherit' }} to="/" onClick={() => this.handleClick(0)}><NavbarMenuText>홈</NavbarMenuText></Link>
                  <NavbarMenuUnderLine className='active' />
                  {this.state.isHovering[0]
                    && <MenuUnderAnimation />}
                </div>
              </NavbarMenuLi>

              <NavbarMenuLi value='1' onMouseEnter={this.handleMouseHover} onMouseLeave={(e) => this.handleMouseLeave(e, 1)}>
                <div>
                  <Link style={{ color: 'inherit' }} to="/about" onClick={() => this.handleClick(1)}><NavbarMenuText>회사소개</NavbarMenuText></Link>
                  <NavbarMenuUnderLine className='active' />
                  {this.state.isHovering[1]
                    && <MenuUnderAnimation />}
                </div>
              </NavbarMenuLi>

              <NavbarMenuLi value='2' onMouseEnter={this.handleMouseHover} onMouseLeave={(e) => this.handleMouseLeave(e, 2)}>
                <div>
                  <Link style={{ color: 'inherit' }} to="/product" onClick={() => this.handleClick(2)}><NavbarMenuText>제품</NavbarMenuText></Link>
                  <NavbarMenuUnderLine className='active' />
                  {this.state.isHovering[2]
                    && <MenuUnderAnimation />}
                </div>
                {/* {this.state.isHovering[2]
                  && <MenuAnimation handler={this.handleMouseHoverBottom}/>} */}
              </NavbarMenuLi>

              <NavbarMenuLi value='3' onMouseEnter={this.handleMouseHover} onMouseLeave={(e) => this.handleMouseLeave(e, 3)} >
                <div>
                  <Link style={{ color: 'inherit' }} to="/contact" onClick={() => this.handleClick(3)}><NavbarMenuText>문의</NavbarMenuText></Link>
                  <NavbarMenuUnderLine className='active' />
                  {this.state.isHovering[3]
                    && <MenuUnderAnimation />}
                </div>
              </NavbarMenuLi>

            </NavbarMenuUl>
          </NavbarMenuSide>
        </NavbarMenu>

        <NavbarBottom />
        {/* <NavbarBottom2 onMouseEnter={this.handleMouseHoverBottom}/> */}
        {/* <!-- menu end --> */}
      </div>
    )
  }
}

export default Menu;