import React from "react";
import pannel from "../../images/pannel.jpeg"
import { Link } from 'react-router-dom';
import ImgResize from "../../util/ImgResize";

class ProductDTO extends React.Component {

    constructor(props) {
        super(props)
        this.state = { bounce: true };
        this.handleHover = this.handleHover.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
        console.log("dto ProductDTO");
        // console.log(this.state.src);
        // this.setState({src:this.props.data})
    }

    

    handleHover = (e) => {
        document.getElementsByClassName("white").item(this.props.count).style.background = '#EEEEEE';
        // this.setState({ bounce: false });
        console.log(this.props.count);
     
    }

    handleLeave = (e) => {
        document.getElementsByClassName("white").item(this.props.count).style.background = '#ffffff';
        // this.setState({ bounce: false });
    }


    render() {
        // const data= this.state.data

        const product = this.props.data;
       
        // const product_one=this.props.data.num;
        console.log("dto render");
        const json = JSON.parse(product.download);
        var imgsrc = "";
        if(json!=null){
            imgsrc="/uploads/"+product.name+"/"+json.data[0];
        }
        
        
        return (

            <figure class="white" onMouseEnter={this.handleHover} onMouseLeave={this.handleLeave}>
               
                    <Link to={{
                        pathname: '/detail',
                        state: { product: product }
                    }}>

                        {
                            product.download === null
                                ? <img src={pannel} />
                               // : <img src= {"/uploads/"+product.name+"/"+json.data[0]}/>}
                                 : <ImgResize imgsrc={imgsrc}/>
                                 
                                 }
                                
                        <div id="part-info">{product.name}</div>

                    </Link>
               
            </figure>

        )
    }

}

export default ProductDTO;
