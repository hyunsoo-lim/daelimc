import React from 'react';
import AboutMenu from './aboutmenu';
import styled, { css } from "styled-components"

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
        <Body>
          <AboutMenu />
        </Body>
    )
  }
}

export default DaelimcAboutUs;