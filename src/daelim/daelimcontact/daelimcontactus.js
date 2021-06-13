import React from 'react';
import FromEmail from './contactform';
import styled, { css } from "styled-components"
import Fade from 'react-reveal/Fade';


const ContactTopDiv = styled.div
  `
width :100%;
height: 200px;
`

const ContactTopDivText = styled.div
  `
width :100%;
text-align: center;
font-size : 30px;
font-weight : 400;
color: #489CFF;
background:#C8FFFF;

@media only screen and (max-width: 600px) {
  
  padding-top: 16%;
  padding-bottom:16%;
  line-height:120%;

}
@media only screen and (min-width: 600px) {
  
  padding-top: 12%;
  padding-bottom:12%;
  line-height:120%;
}
@media only screen and (min-width: 768px) {
  
  padding-top: 8%;
  padding-bottom:8%;
  line-height:120%;
}
@media only screen and (min-width: 992px) {
 
  padding-top: 8%;
  padding-bottom:8%;
  line-height:120%;
}
@media only screen and (min-width: 1200px) {
  padding-top: 0%;
  padding-bottom:0%;
  height:200px;
  line-height:200px;
}
`


const ContactEndDiv = styled.div
  `
width :100%;
height: 60px;
`

class DaelimcContactUs extends React.Component {

  constructor(props) {
    super(props)

  }




  componentDidMount() {
  }

  render() {

    return (
      <Fade>

        <ContactTopDiv>
          <ContactTopDivText> 문의를 남겨주시면 최대한 빠르게 답변 드리겠습니다 </ContactTopDivText>
        </ContactTopDiv>
        <FromEmail />
        <ContactEndDiv />
      </Fade>
    )
  }
}

export default DaelimcContactUs;