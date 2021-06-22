import React from 'react';
import DaelimSearch from './productsearch';
import styled from "styled-components"

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


class DaelimcProduct extends React.Component {


  render() {

    return (
      <Body>
        <DaelimSearch />
      </Body>
    )
  }
}

export default DaelimcProduct;