import React from 'react';
import Menu from './daelimmainpage/dealimcmenu';
import styled, { css } from "styled-components"
import DaelimcMainBody from './daelimmainpage/mainbody';
import { BrowserRouter as BrowseRouter, Switch, Route } from 'react-router-dom';
import DaelimcProduct from './daelimproduct/product';
import DaelimcContactUs from './daelimcontact/daelimcontactus';
import DaelimcAboutUs from './daelimabout/daelimaboutus';


const TopHeader = styled.div
  `
height:20px
`

class DaelimcMainPage extends React.Component {

  constructor(props) {
    super(props)

  }




  componentDidMount() {
  }

  render() {

    return (
      <BrowseRouter>
        <TopHeader />
        <Menu />
        <div>
          <Switch>
            <Route exact path="/" component={DaelimcMainBody} />
            <Route exact path="/product" component={DaelimcProduct} />
            <Route exact path="/about" component={DaelimcAboutUs} />
            <Route exact path="/contact" component={DaelimcContactUs} />
          </Switch>
        </div>
      </BrowseRouter>
    )
  }
}

export default DaelimcMainPage;