import React from 'react';
import {BrowserRouter as BrowserRouter,Link} from 'react-router-dom';

class DaelimNav extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            liNumber : 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(linum) {
        this.setState({liNumber : linum});
        setTimeout(() => {
            //css의 적용이 느려 timeout을 준다
            document.getElementsByTagName("li").item(0).className="aa";
            document.getElementsByTagName("li").item(1).className="aa";
            document.getElementsByTagName("li").item(2).className="aa";
            document.getElementsByTagName("li").item(this.state.liNumber).className="active";
        }, 100);
    }

    render(){
      return(
        <div id="menu"> 
             <ul>
                <li class="active"><Link to="/" onClick={()=>this.handleClick(0)}>Home</Link></li>
                 <li><Link to="/content" onClick={()=>this.handleClick(1)}>Content</Link></li>
                <li><Link to="/conus" onClick={()=>this.handleClick(2)}>Contect Us</Link></li>
             </ul>
      </div>
      )
    }
}
  export default DaelimNav;
