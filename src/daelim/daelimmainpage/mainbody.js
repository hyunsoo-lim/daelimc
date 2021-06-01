import React from 'react'
import styled, { css } from "styled-components"
import SimpleSlider from './reactSlider'
import Fade from 'react-reveal/Fade';

const BodyDiv = styled.div
`
overflow:visible;
`
const BodyTopDiv = styled.div
`
height : 20px;
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
margin-right : 2px;
margin-left :  2px;
`

class DaelimcMainBody extends React.Component {

  constructor(props) {
    super(props)

  }


  componentDidMount() {
  }

  render() {

    return (
      <BodyDiv>
        <Fade>
          <BodyTopDiv />
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