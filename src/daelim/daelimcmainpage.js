import React from 'react';
import Menu from './daelimmainpage/dealimcmenu';
import styled from "styled-components"
import DaelimcMainBody from './daelimmainpage/mainbody';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DaelimcProduct from './daelimproduct/product';
import DaelimcContactUs from './daelimcontact/daelimcontactus';
import DaelimcAboutUs from './daelimabout/daelimaboutus';
import DaelimcMainFooter from './daelimmainpage/footer';
import DaelimProductDetail from './daelimproduct/productdetail';



const TopHeader = styled.div
`
width:100%;
height:40px;
`

const Body=styled.div
`
width:100%;
`

class DaelimcMainPage extends React.Component {



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