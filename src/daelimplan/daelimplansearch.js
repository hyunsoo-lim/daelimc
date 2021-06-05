import React from 'react';
// import './daelimp.css';
import DaelimProductDTO from './daelim_product_dto';
import ReactPaginate from "react-paginate";
import styled from "styled-components"

const Body = styled.div
`
width:1080px;
margin:0 auto;
`

class DaelimPlanSearch extends React.Component {

    constructor(props) {
        super(props)
    }


    componentDidMount() {
        console.log("search didmount");
        console.log(this.props.count);

    }





    render() {
        const product = this.props.searchdata;


        return (
            <Body>
                {/* 검색 */}
                <div id="main_tip_search">
                    <form>
                        <input type="text" name="search" id="tip_search_input" list="search" onChange={this.props.searchHandler} />
                    </form>
                    <button id="tip_search_btn" onClick={this.props.getData}> 검색</button>
                </div>



                <section class="work" >

                    {product.map(product => {
                        
                        var a = <DaelimProductDTO data={product} checkhandler={this.props.checkhandler} />
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

export default DaelimPlanSearch;