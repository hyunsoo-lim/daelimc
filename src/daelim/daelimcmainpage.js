import React from 'react';
import Menu from './daelimmainpage/dealimcmenu';
import styled, { css } from "styled-components"
import DaelimcMainBody from './daelimmainpage/mainbody';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DaelimcProduct from './daelimproduct/product';
import DaelimcContactUs from './daelimcontact/daelimcontactus';
import DaelimcAboutUs from './daelimabout/daelimaboutus';
import DaelimcMainFooter from './daelimmainpage/footer';
import DaelimProductDetail from './daelimproduct/productdetail';



const TopHeader = styled.div
`
height:40px
`

const Body=styled.div
`
min-width:1080px;
margin:0 auto;
`

class DaelimcMainPage extends React.Component {

  constructor(props) {
    super(props)
    const meta = document.createElement('meta');
    meta.name = "viewport";
    meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
    document.getElementsByTagName('head')[0].appendChild(meta);
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
              <Route path="/detail" component={DaelimProductDetail}/>
            </Switch>
         
        </Body>
        <DaelimcMainFooter/>
      </div>
      </Router>
    )
  }
}

export default DaelimcMainPage;