import React from 'react';
import axios from 'axios';
import DaelimProductDTO from './daelim_product_dto';


class DbcSelect extends React.Component{

    constructor(props){
        super(props)
        this.state= { product  : []}
    }


    componentDidMount(){
        this.getData();
    }


    getData = async() => {
        const response = await axios.get('api/products');
        this.setState({product:response.data.products});
        console.log(this.state);
      }


    render(){
        const {product} = this.state;

        

        return(
        <div>
            <h2>data</h2>
            {product ? `${product}` : 'data error'}

            <table>
                <tr>
                    <td>타입</td>
                    <td>타입2</td>
                    <td>이름</td>
                    <td>text1</td>
                    <td>text2</td>
                    <td>src</td>
                </tr>
               
               {product.map(product =>{
                 var a= <DaelimProductDTO  type1={product.type} type2={product.type2} name={product.name} text1={product.text1} text2={product.text2} src={product.imgsrc}/>
                return a;
                     })}
                
            </table>
            
        </div>
         )
    }
}

export default DbcSelect;