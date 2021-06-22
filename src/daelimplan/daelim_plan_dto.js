import  React from "react";
import pannel from "../images/pannel.jpeg"
import {Link} from 'react-router-dom';
import styled from "styled-components"
import ImgResize from "../util/ImgResize";



const Dcheckbox = styled.input
`
z-index:2;
`



class DaelimPlanDTO extends React.Component{

   
     
   

    render(){
        // const data= this.state.data
        const product=this.props.data;
        // const product_one=this.props.data.num;
        const json =JSON.parse(product.download);

        var imgsrc = "";
        if(json!=null){
            imgsrc="/uploads/plan/"+product.name+"/"+json.data[0];
        }
      
        return(
          
            <figure className="white">
               
                <Link to ={{
                    pathname :'/plandetail/'+product.name,
                    state: {product: product}        
                }}>
                   
                { 
                    product.download===null
                    ? <img src= {pannel}/>
                    : <img src= {pannel}/>
                    // : <img src= {"/uploads/"+product.name+"/"+json.data[0]}/>}
                     
                  
                    }

                    <div id="part-info">{product.name}</div>
                  
                </Link>
                <Dcheckbox type="checkbox" checked={product.checked} value={product.num} onChange={this.props.checkhandler}/>
            </figure>
        )
    }

}

export default DaelimPlanDTO;
