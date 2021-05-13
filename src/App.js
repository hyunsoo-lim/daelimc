
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
        </head>

        <body>

          {/* <Route exact path="/home" component={DaelimcMainPage} />
          <Route path="/plan" component={DaelimPlan} /> */}


          <DaelimcMainPage />
        </body>
      </div>
    </Router>
  );
}

export default App;