import React from 'react';

import axios from 'axios';
import ReactPaginate from "react-paginate";
import ProductDTO from './productdto';


class ProductSearch extends React.Component{

    constructor(props){
        super(props)
        this.state= {product:[],checkedNum:[],count:0,currentPage:0,search:[""]}
        this.getData = this.getData.bind(this);
        this.searchHandler=this.searchHandler.bind(this);
        this.checkedItemHandler=this.checkedItemHandler.bind(this);
        this.changePage = this.changePage.bind(this);
        this.getDataCount = this.getDataCount.bind(this);
    }


    componentDidMount(){
        console.log("search didmount");
        this.getDataCount();
        this.getData();
    }


    getData (){

        setTimeout(async() => {
            // const response = await axios.get('../api/products');
            // const data= this.state.search;
            const data= {search:this.state.search, currentpage:this.state.currentPage}
            console.log("getData");
            console.log(data);
            const response = await axios.post('../api/productssearch',data);
            console.log("11111111122");
            console.log(response.data.products)
            
            // response.data.products.map
            for(let i=0; i<response.data.products.length; i++){
                response.data.products[i].checked = false;
                response.data.products[i].num = i;
                // checkdata+=({no:response.data.products[i].no,checked:"off"});
            }
            console.log("checkdata");
            this.setState({product:response.data.products});
            // const logdata= this.state.product;
            // console.log(logdata)
        }, 100);
      }
    

      searchHandler=(e)=>{
        let value=[e.target.value];
        this.setState({search:value});
        console.log(this.state.search);
    }

   
    changePage=(e)=>{
        console.log("changePage");
        console.log(e.selected);
        this.setState({currentPage:e.selected});
        this.getData();
    }


    getDataCount = async() =>{
        const response = await axios.get('../api/productscount');
        console.log(response.data[0].cnt);
        this.setState({count:response.data[0].cnt})
    }


    render(){
        const product = this.state.product
        

        return(
            <div>
                {/* 검색 */}
                <div id="main_tip_search"> 
                    <form>
                        <input type="text" name="search" id="tip_search_input" list="search" onChange={this.searchHandler} />
                    </form>
                    <button id="tip_search_btn" onClick={this.getData}> 검색</button>
                </div>

                <h2>data</h2>
                <section class="work">
                
                {product.map(product =>{
                    var a= <ProductDTO  data={product}/>
                    return a;
                        })}
                    
                </section>
                <div>
                    <ReactPaginate 
                        pageCount={this.state.count/10}
                        pageRangeDisplayed={10}
                        marginPagesDisplayed={0}
                        breakLabel={""}
                        previousLabel={"이전"}
                        nextLabel={"다음"}
                        onPageChange={this.changePage}
                        containerClassName={"pagination-ul"}
                        activeClassName={"currentpage"}
                        previousClassName={"pageLabel-btn"}
                        nextClassName={"pageLabel-btn"}
                       />  
                </div>
            </div>
            
         )
    }
}

export default ProductSearch;