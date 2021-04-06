
import React from 'react';
import './App.css';
import {BrowserRouter as BrowserRouter, Route} from 'react-router-dom';
import DaelimPlan from './daelimplan/daelimplan';
import DaelimcMainPage from './daelim/daelimcmainpage';


function App() {
  return (    
      <div className ="header_main">
        <head>
            <title>DAELIM CONTROL</title>     
        </head>

        <body>
                <BrowserRouter>
                  {/* <DaelimMain/> */}
            
              <Route exact path="/"  component={DaelimcMainPage} />
              <Route path="/plan"  component={DaelimPlan} />
            
                </BrowserRouter>
        </body>
      </div>   
  );
}

export default App;