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
margin:0 auto;
`

class DaelimcMainPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
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