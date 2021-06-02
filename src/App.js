
import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import DaelimPlan from './daelimplan/daelimplan';
import DaelimcMainPage from './daelim/daelimcmainpage';



class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { herf: null };
    this.handleLiActive = this.handleLiActive.bind(this);
  }


  handleLiActive() {
    console.log('handleLiActive')
    const url = window.location.href;

    switch (url) {

      case 'http://daelimc.co.kr/':
        this.setState({herf:0});
        break;

      default:
        this.setState({herf:1});
        break;
    }
  }
  render() {
    return (
      <Router>
        <div className="header_main">
          <head>
            <title>DAELIM CONTROL</title>
            <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=b5a927e117bc1ecc5ba1cba8e9131ad9"></script>
          </head>

          <body>


            {this.state.herf===0 
            ? ( <Route exact path="/" component={DaelimcMainPage} /> ) 
            : ( 
              // this.state.herf===1
                // ?
                <Route exact path="/plan" component={DaelimPlan} />
                // :<Route exact path="/"component={DaelimPlan}/>
              )
            }


            {/* <Route exact path="/" component={DaelimcMainPage} /> */}
            {/* <Route path="/plan" component={DaelimPlan} /> */}


            <DaelimcMainPage />
          </body>
        </div>
      </Router>
    );
  }
}

export default App;