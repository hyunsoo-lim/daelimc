import React from 'react';
import './daelimp.css';
import DaelimProductDTO from './daelim_product_dto';



class DaelimPlanDetail extends React.Component{

    constructor(props){
        super(props)
        const pro= this.props.location
        console.log("detail const");
        console.log(pro.state.product);
    }


    componentDidMount(){
        console.log("detail mount");
    
       
    }

    componentDidUpdate(){
        console.log("detail update");
      
    }

    

    render(){
      
     
        // const product = this.props.searchdata;
        

        return(
            <div>
               <h2>{this.props.location.state.product.num}</h2>
            </div>
         )
    }
}

export default DaelimPlanDetail;