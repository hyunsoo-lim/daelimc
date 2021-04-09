import React from 'react';
import styled, { css } from "styled-components"
import MenuAnimation from './daelimMainPage/menuani'



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
height:100px;
margin-right: 100px;
background :#38cbae;
`

const NavbarMenuUl = styled.ul
  `
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




class MenuMain extends React.Component {

  constructor(props) {
    super(props)
    this.state = { activeItem: 'home', activeA: 'blue', isHovering: [false, false, false, false] }
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleMouseHover = this.handleMouseHover.bind(this);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleMouseHover = (e) => {
    const nextState = this.state.isHovering;
      nextState[0] = false
      nextState[1] = false
      nextState[2] = false
      nextState[3] = false
      nextState[e.currentTarget.value] = true
    this.setState({ isHovering: nextState })
  }

  componentDidMount() {
  }

  render() {

    return (
      <div>
        <NavbarMenu>

          {/* <!-- menu start --> */}
          <NavbarMenuSide>
            <NavbarMenuUl>
              <NavbarMenuLi id='aaaa' value='0' onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                <div>
                  <NavbarMenuText>Home</NavbarMenuText>
                  <NavbarMenuUnder />
                </div>
              </NavbarMenuLi>

              <NavbarMenuLi value='1' onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                <div>
                  <NavbarMenuText>About us</NavbarMenuText>
                  <NavbarMenuUnder/>
                </div>
              </NavbarMenuLi>

              <NavbarMenuLi value='2' onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                <div>
                  <NavbarMenuText>Service</NavbarMenuText>
                  <NavbarMenuUnder />
                </div>
              </NavbarMenuLi>

              <NavbarMenuLi value='3' onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                <div>
                  <NavbarMenuText>Reperence</NavbarMenuText>
                  <NavbarMenuUnder />
                </div>
                {this.state.isHovering[3]
                  && <MenuAnimation/>}
              </NavbarMenuLi>

            </NavbarMenuUl>
          </NavbarMenuSide>
        </NavbarMenu>
        {/* <!-- menu end --> */}
      </div>
    )
  }
}

export default MenuMain;