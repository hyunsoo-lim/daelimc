
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


<<<<<<< HEAD
          {/* {url === 'http://daelimc.co.kr/'
=======
          {url === 'http://daelimc.co.kr/'
>>>>>>> 6b22837d10935bf0aaa7c882502defe8b5681edc
            ? <DaelimcMainPage/>

            : (url === 'http://sub.daelimc.co.kr/'
              ? <DaelimPlan/>
<<<<<<< HEAD

              : 
              <DaelimcMainPage/>
              )
          } */}


<DaelimPlan/>

=======
              // ? url
              : <DaelimcMainPage/>)
            // : url)
          }
>>>>>>> 6b22837d10935bf0aaa7c882502defe8b5681edc
        </body>
      </div>
    </Router>
  );
}


export default App;