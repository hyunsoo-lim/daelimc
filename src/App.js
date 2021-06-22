
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
      


          {url === 'http://daelimc.co.kr/'
            ? <DaelimcMainPage/>

            : (url === 'http://sub.daelimc.co.kr/'
              ? <DaelimPlan/>

              : 
              <DaelimcMainPage/>
              )
          }


{/* <DaelimcMainPage/> */}

      
      </div>
    </Router>
  );
}


export default App;