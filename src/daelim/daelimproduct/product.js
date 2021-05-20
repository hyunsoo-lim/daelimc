import React from 'react';
import DaelimSearch from './productsearch';
import styled, { css } from "styled-components"

const Body = styled.div
  `
width:1080px;
min-height:100%;
margin: 0 auto;
`


class DaelimcProduct extends React.Component {

  constructor(props) {
    super(props)

  }




  componentDidMount() {
  }

  render() {

    return (
      <Body>
        <DaelimSearch />
      </Body>
    )
  }
}

export default DaelimcProduct;