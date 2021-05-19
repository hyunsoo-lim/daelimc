import React from 'react';
import Menu from './daelimmainpage/dealimcmenu';
import styled, { css } from "styled-components"
import DaelimcMainBody from './daelimmainpage/mainbody';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DaelimcProduct from './daelimproduct/product';
import DaelimcContactUs from './daelimcontact/daelimcontactus';
import DaelimcAboutUs from './daelimabout/daelimaboutus';
import DaelimcMainFooter from './daelimmainpage/footer';


const TopHeader = styled.div
`
height:40px
`

const Body=styled.div
`
width:1080px;
min-height:100%;
margin: 0 auto;
zIndex: '-1';
`

class DaelimcMainPage extends React.Component {

  constructor(props) {
    super(props)

  }




  componentDidMount() {
  }

  render() {

    return (
      <Router>
      <div>
        <TopHeader />
        <Menu />
        <Body>
        
            <Switch>
              <Route exact path="/" component={DaelimcMainBody} />
              <Route path="/product" component={DaelimcProduct} />
              <Route path="/about" component={DaelimcAboutUs} />
              <Route path="/contact" component={DaelimcContactUs} />
            </Switch>
         
        </Body>
        <DaelimcMainFooter/>
      </div>
      </Router>
    )
  }
}

export default DaelimcMainPage;