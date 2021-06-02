
import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import DaelimPlan from './daelimplan/daelimplan';
import DaelimcMainPage from './daelim/daelimcmainpage';



function App() {


  console.log('herf')
  const url = window.location.href;



  return (
    <Router>
      <div className="header_main">
        <head>
          <title>DAELIM CONTROL</title>
          <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=b5a927e117bc1ecc5ba1cba8e9131ad9&autoload=false"></script>
        </head>

        <body>


          {url === 'http://daelimc.co.kr/'
            ? (<Route exact path="/" component={DaelimcMainPage} />)

            : (url === 'http://sub.daelimc.co.kr/'
              ? <Route path="/" component={DaelimPlan} />
              // ? url
              : <Route path="/" component={DaelimcMainPage} />)
            // : url)
          }
        </body>
      </div>
    </Router>
  );
}


export default App;