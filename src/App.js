
import React from 'react';
// import axios from 'axios';

import './App.css';
import {BrowserRouter as BrowserRouter,Route} from 'react-router-dom';
// import DaelimHeadNavigation from './daelim/DaelimHeadNavigation';
import DaelimMain from './daelim/DaelimMain';
import Insert from './dbcontrol/insert';

function App() {
  return (    
      <div className ="header_main">
        <head>
            <title>DAELIM CONTROL</title>     
        </head>

        <body>
            <p class="title">Daelim Control</p>
                <BrowserRouter>
                  {/* <DaelimMain/> */}
            
              <Route exact path="/"  component={DaelimMain} />
              <Route path="/ins"  component={Insert} />
            
                </BrowserRouter>
        </body>
      </div>   
  );
}

export default App;

// class App extends React.Component {

//   constructor(props) {
//       super(props);
//       this.state = {
//           username:null
//       };
//   }

//   componentDidMount() {
//     axios.get("api")
//      .then(response => {      // .then : 응답(상태코드200~300미만)성공시
//       console.log(response);

//      this.setState({username:response.data.username})
//      })
//      .catch(error => {
//       console.log(error);
//     });
//   }

// render() {
//   const {username} = this.state;
//   return (
//       <div className="App">
//         <header className="App-header">
//           {username ? `Hello ${username}` : 'Hello World'}
//         </header>
//       </div>
//      );
//   }
// }

// export default App;