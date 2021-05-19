import React from 'react'
import styled, { css } from "styled-components"
import SimpleSlider from './reactSlider'

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
        <div>
            <SimpleSlider/>
            <BodyMainDiv/>
        </div>
      )
    }
  }
  
  export default DaelimcMainBody;