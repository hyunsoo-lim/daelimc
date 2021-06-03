import React from 'react'
import styled, { css } from "styled-components"
import SimpleSlider from './reactSlider'
import Fade from 'react-reveal/Fade';

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
width:1080px;
min-height:100%;
margin: 0 auto;
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
         <BackgroundBody />
        <Fade>
          <Body>
            <SimpleSlider />
            <BodyMainDiv />
          </Body>
        </Fade>
      </BodyDiv>
    )
  }
}

export default DaelimcMainBody;