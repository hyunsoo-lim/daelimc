import  React from "react";
import pannel from "../images/pannel.jpeg"
import {BrowserRouter as BrowserRouter,Link} from 'react-router-dom';

class DaelimProductDTO extends React.Component{

    constructor(props){
            super(props);
    }

     
   

    render(){
        // const data= this.state.data
        const product=this.props.data;
        // const product_one=this.props.data.num;
        return(
          
            <figure class="white">
                <input type="checkbox" checked={product.checked} value={product.num} onChange={this.props.checkhandler}/>
                <Link to ={{
                    pathname :'/plan/detail/$}',
                    state: {product: product}        
                }}>
                {/* <Link to={'/plan/detail/${product}'} onClick={()=>this.props.handler(product.num)}> */}
                 
                    <img src= {pannel}/>
                    {/* <div>{this.props.no} </div> */}
                    <div id="part-info">{product.name}</div>
                    {/* <div>{this.props.type1}</div> */}
                    {/* <div>{this.props.type2}</div> */}
                    {/* <div>{this.props.text1}</div> */}
                    {/* <div>{this.props.text2}</div> */}
                </Link>
            </figure>
        )
    }

}

export default DaelimProductDTO;
