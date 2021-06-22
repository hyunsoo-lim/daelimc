import React from 'react';
// import './daelimp.css';
import ReactPaginate from "react-paginate";
import styled from "styled-components"
import axios from 'axios';
import DaelimPlanDTO from './daelim_plan_dto';

const Body = styled.div
    `
@media only screen and (max-width: 600px) {
  width: 100%;
  margin: 0 auto;
}

@media only screen and (min-width: 600px) {
  width: 100%;
  margin: 0 auto;
}

@media only screen and (min-width: 768px) {
  width: 100%;
  margin: 0 auto;
}

@media only screen and (min-width: 992px) {
  width: 100%;
  margin: 0 auto;
}

@media only screen and (min-width: 1200px) {
  width: 1080px;
}
`

class DaelimPlanSearch2 extends React.Component {

    constructor(props){
        super(props)
        this.state= {product:[],checkedNum:[],count:0,currentPage:0,search:[""]}
        // this.checkedItemHandler=this.checkedItemHandler.bind(this);
        this.getData = this.getData.bind(this);
        this.getDataCount = this.getDataCount.bind(this);
        // this.deleteData = this.deleteData.bind(this);
        this.searchHandler=this.searchHandler.bind(this);
    }
   
    componentDidMount() {
        console.log("search didmount");
        this.getDataCount();
        this.getData();
    }



    searchHandler=(e)=>{
        let value=[e.target.value];
        this.setState({search:value});
        console.log(this.state.search);
    }

    getDataCount = async() =>{
        const response = await axios.get('../api/plancount');
        console.log(response.data[0].cnt);
        this.setState({count:response.data[0].cnt})
    }

    getData (){
        this.setState({product:[]});
        setTimeout(async() => {
            // const response = await axios.get('../api/products');
            // const data= this.state.search;
           
            const data= {search:this.state.search, currentpage:this.state.currentPage}
            console.log("getData");
            console.log(data);
            const response = await axios.post('../api/plansearch',data);
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



    render() {
        const product = this.state.product;

        return (
            <Body>
                {/* 검색 */}
                <div id="main_tip_search">
                    <form>
                        <input type="text" name="search" id="tip_search_input" list="search" onChange={this.searchHandler} />
                    </form>
                    <button id="tip_search_btn" onClick={this.getData}> 검색</button>
                </div>



                <section className="work" >

                    {product.map(product => {
                        
                        var a = <DaelimPlanDTO data={product}  />
                        return a;
                    })}

                </section>

                <div>
                    <ReactPaginate
                        pageCount={this.props.count / 10}
                        pageRangeDisplayed={10}
                        marginPagesDisplayed={0}
                        breakLabel={""}
                        previousLabel={"이전"}
                        nextLabel={"다음"}
                        onPageChange={this.props.changePage}
                        containerClassName={"pagination-ul"}
                        activeClassName={"currentpage"}
                        previousClassName={"pageLabel-btn"}
                        nextClassName={"pageLabel-btn"}
                    />
                </div>
            </Body>

        )
    }
}

export default DaelimPlanSearch2;