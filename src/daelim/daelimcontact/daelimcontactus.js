import React from 'react';
import FromEmail from './contactform';
import styled, { css } from "styled-components"

const ContactTopDiv = styled.div
`
width :100%;
height: 200px;
border 1px solid;
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
        <ContactTopDiv/>
        <FromEmail/>
      </div>
    )
  }
}

export default DaelimcContactUs;