import  React from "react";
import pannel from "../../images/pannel.jpeg"
import {Link} from 'react-router-dom';

class ProductDTO extends React.Component{
 
   

    render(){
        // const data= this.state.data
        const product=this.props.data;
        // const product_one=this.props.data.num;
        const json =JSON.parse(product.download);
        return(
          
            <figure class="white">
               
                <Link to ={{
                    pathname :'/detail',
                    state: {product: product}        
                }}>
                   
                { 
                    product.download===null
                    ? <img src= {pannel}/>
                    : <img src= {"/uploads/"+product.name+"/"+json.data[0]}/>}
               
                    <div id="part-info">{product.name}</div>
                   
                </Link>
            </figure>
        )
    }

}

export default ProductDTO;
