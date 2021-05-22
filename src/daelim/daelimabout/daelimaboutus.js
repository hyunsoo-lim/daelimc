import React from 'react';
import AboutMenu from './aboutmenu';
import styled, { css } from "styled-components"
import Fade from 'react-reveal/Fade';
const Body = styled.div
  `
width:1080px;
min-height:100%;
margin: 0 auto;
`

class DaelimcAboutUs extends React.Component {

  constructor(props) {
    super(props)

  }




  componentDidMount() {
  }

  render() {

    return (
      <Fade>
        <Body>
          <AboutMenu />
        </Body>
      </Fade>
    )
  }
}

export default DaelimcAboutUs;