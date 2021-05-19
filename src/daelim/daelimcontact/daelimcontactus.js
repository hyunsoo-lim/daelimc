import React from 'react';
import FromEmail from './contactform';
import styled, { css } from "styled-components"

const ContactTopDiv = styled.div
`
width :100%;
height: 200px;

line-height:200px;
text-align: center;
font-size : 30px;
font-weight : 400;
color: #489CFF;
background:#C8FFFF;
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
      <div>
        <ContactTopDiv> 문의를 남겨주시면 최대한 빠르게 답변 드리겠습니다 </ContactTopDiv>
        <FromEmail/>
        <ContactEndDiv/>
      </div>
    )
  }
}

export default DaelimcContactUs;