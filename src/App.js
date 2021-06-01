
import React from 'react';
import './App.css';
import { Route,BrowserRouter as Router} from 'react-router-dom';
import DaelimPlan from './daelimplan/daelimplan';
import DaelimcMainPage from './daelim/daelimcmainpage';


function App() {
  return (
    <Router>
      <div className="header_main">
        <head>
          <title>DAELIM CONTROL</title>
          <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=b5a927e117bc1ecc5ba1cba8e9131ad9"></script>
        </head>

        <body>

          {/* <Route exact path="/" component={DaelimcMainPage} /> */}
          {/* <Route path="/plan" component={DaelimPlan} /> */}


          <DaelimcMainPage />
        </body>
      </div>
    </Router>
  );
}

export default App;