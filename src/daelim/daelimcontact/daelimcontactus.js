import React from 'react';
import FromEmail from './contactform';
import styled, { css } from "styled-components"
import Fade from 'react-reveal/Fade';

const ContactTopDiv = styled.div
`
width :100%;
height: 200px;


text-align: center;
font-size : 30px;
font-weight : 400;
color: #489CFF;
background:#C8FFFF;


@media only screen and (max-width: 600px) {
  line-height:80px;

}

@media only screen and (min-width: 600px) {
  line-height:80px;
 
}

@media only screen and (min-width: 768px) {
  line-height:200px;
  
}

@media only screen and (min-width: 992px) {
  line-height:200px;
 
}

@media only screen and (min-width: 1200px) {
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
        
        <ContactTopDiv> 문의를 남겨주시면 최대한 빠르게 답변 드리겠습니다 </ContactTopDiv>
        <FromEmail/>
        <ContactEndDiv/>
      </Fade>
    )
  }
}

export default DaelimcContactUs;