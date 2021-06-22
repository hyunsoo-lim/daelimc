import React from 'react';
import AboutMenu from './aboutmenu';
import styled from "styled-components"
import Fade from 'react-reveal/Fade';
const Body = styled.div
  `
min-height:100%;
margin: 0 auto;


@media only screen and (max-width: 600px) {
  width: 100%;

}

@media only screen and (min-width: 600px) {
  width:  100%;

}

@media only screen and (min-width: 768px) {
  width:  100%;

}

@media only screen and (min-width: 992px) {
  width: 992px;

}

@media only screen and (min-width: 1200px) {
  width: 1080px;

}
`

class DaelimcAboutUs extends React.Component {

 

  componentDidMount() {
  }

  render() {

    return (
      
        <Body>
          <Fade>
          <AboutMenu />
          </Fade>
        </Body>
    
    )
  }
}

export default DaelimcAboutUs;