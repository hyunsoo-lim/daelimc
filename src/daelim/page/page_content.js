import React from 'react';
import axios from 'axios';


class Content extends React.Component{

    constructor(props){
        super(props)
        this.state= { product  : ""}
    }


    componentDidMount(){
        // this.getData();
    }


    getData = async() => {
        const response = await axios.get('api/products');
        this.setState({product:response.data.products[0].type});
        console.log(this.state);
      }


    render(){
        const {product} = this.state;
        return(
        <div>
            <h2>Content Page</h2>
            {product ? `${product}` : 'data error'}
            
        </div>
         )
    }
}

export default Content;