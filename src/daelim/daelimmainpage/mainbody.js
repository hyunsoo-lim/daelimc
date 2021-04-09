import React from 'react'
import styled, { css } from "styled-components"
import SimpleSlider from './reactSlider'

const BodyMainDiv = styled.div
`
background : #38cbae;
height : 100px;
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
        <div>
            <SimpleSlider/>
            <BodyMainDiv/>
        </div>
      )
    }
  }
  
  export default DaelimcMainBody;