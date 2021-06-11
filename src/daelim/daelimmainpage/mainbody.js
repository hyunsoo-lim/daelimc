import React from 'react'
import styled, { css } from "styled-components"
import SimpleSlider from './reactSlider'
import Fade from 'react-reveal/Fade';

const BREAK_POINT_MOBILE = 768;
const BREAK_POINT_TABLET = 992;
const BREAK_POINT_PC = 1200;

const BodyDiv = styled.div
  `
overflow:visible;
`

const BackgroundBody = styled.div
  `
position:absolute;
width:1920px;
height:540px;
background:#F6F6F6;
`
const Body = styled.div
  `

min-height:100%;
margin: 0 auto;

@media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
  width: 650px;
}
@media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
  width: 768px;
}
@media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
  width: 992px;
}
@media only screen and (min-width: ${BREAK_POINT_PC}px) {
  width: 1080px;
}
`
const BodyMainDiv = styled.div
  `
border: 1px solid ;
min-height : 500px;
margin-top : 30px;

`

class DaelimcMainBody extends React.Component {


  render() {

    return (
      <BodyDiv>
        {/* <BackgroundBody /> */}
        <Fade>
          <SimpleSlider />
          <Body>
            <BodyMainDiv />
          </Body>
        </Fade>
      </BodyDiv>
    )
  }
}

export default DaelimcMainBody;