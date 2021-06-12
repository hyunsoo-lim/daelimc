import React from 'react';
import styled from "styled-components"
import axios from 'axios';
import ReactPaginate from "react-paginate";
import ProductDTO from './productdto';
import Fade from 'react-reveal/Fade';

const AboutMenuLayout = styled.div
    `
margin-top:-1px;

height : 180px; 
postion:fixed;
@media only screen and (max-width: 600px) {
    width: 100%;
  
  }
  
  @media only screen and (min-width: 600px) {
    width:  100%;
  
  }
  
  @media only screen and (min-width: 768px) {
    width:  100%;
  
  }
  
  @media only screen and (min-width: 992px) {
    width: 992px;
  
  }
  
  @media only screen and (min-width: 1200px) {
    width: 1080px;
  
  }
`

const AboutMenuLayout2 = styled.div
    `

height : 60px; 
background :#6CC0FF;

@media only screen and (max-width: 600px) {
    width: 100%;
  
  }
  
  @media only screen and (min-width: 600px) {
    width:  100%;
  
  }
  
  @media only screen and (min-width: 768px) {
    width:  100%;
  
  }
  
  @media only screen and (min-width: 992px) {
    width: 992px;
  
  }
  
  @media only screen and (min-width: 1200px) {
    width: 1080px;
  
  }
`

const AboutMenu1 = styled.div
    `
width: 120px;
height : 60px; 
float:right;
`

const AboutMenu2 = styled.div
    `
width: 120px;
height : 60px; 
float:right;
`
const AboutMenu3 = styled.div
    `
width: 120px;
height : 60px; 
float:right;
margin-right:65px;
`

const AboutMenuText1 = styled.div
    `
font-size: 16px;
font-weight: 400;
color:#ffffff;
text-align:center;
line-height:60px;
`


const AboutMenuText2 = styled.p
    `
font-size: 16px;
font-weight: 400;
color:#ffffff;
text-align: center;
line-height:60px;
`
const InputDiv = styled.div
    `
clear:both;
margin: 0 auto;
margin-top:40px;
height : 100px; 

@media only screen and (max-width: 600px) {
    width: 80%;
  
  }
  
  @media only screen and (min-width: 600px) {
    width: 80%;
  
  }
  
  @media only screen and (min-width: 768px) {
    width: 80%;
  
  }
  
  @media only screen and (min-width: 992px) {
    width: 80%;
  
  }
  
  @media only screen and (min-width: 1200px) {
    width: 520px;
  
  }

`

const FormEl = styled.form
    `
height : 40px; 
margin : 0 auto;
text-align:center;
@media only screen and (max-width: 600px) {
    width: 100%;
  
  }
  
  @media only screen and (min-width: 600px) {
    width: 100%;
  
  }
  
  @media only screen and (min-width: 768px) {
    width: 100%;
  
  }
  
  @media only screen and (min-width: 992px) {
    width: 100%;
  
  }
  
  @media only screen and (min-width: 1200px) {
    width: 100%;
  
  }
`
const InputEl = styled.input
    `

height : 40px; 
line-height : 100px;
border: 1px solid #8f8f8f;
margin : 0 auto;
@media only screen and (max-width: 600px) {
    width: 50%;
  
  }
  
  @media only screen and (min-width: 600px) {
    width: 50%;
  
  }
  
  @media only screen and (min-width: 768px) {
    width: 50%;
  
  }
  
  @media only screen and (min-width: 992px) {
    width: 50%;
  
  }
  
  @media only screen and (min-width: 1200px) {
    width: 340px;
  
  }
`
const ButtonEl = styled.button
`
width: 15%;
height : 40px; 
`

const Body = styled.div
 `
min-height:600px;
@media only screen and (max-width: 600px) {
    width: 100%;
  
  }
  
  @media only screen and (min-width: 600px) {
    width: 100%;
  
  }
  
  @media only screen and (min-width: 768px) {
    width: 100%;
  
  }
  
  @media only screen and (min-width: 992px) {
    width: 100%;
  
  }
  
  @media only screen and (min-width: 1200px) {
    width: 100%;
  
  }
`

class ProductSearch extends React.Component {

    constructor(props) {
        super(props)
        this.state = { product: [], checkedNum: [], count: 0, currentPage: 0, search: [""] }
        this.getData = this.getData.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
        // this.checkedItemHandler=this.checkedItemHandler.bind(this);
        this.changePage = this.changePage.bind(this);
        this.getDataCount = this.getDataCount.bind(this);
    }



    componentDidMount() {
        console.log("search didmount");
        this.getDataCount();
        this.getData();
        window.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }


    onScroll = (e) => {
        // 스크롤 할때마다 state에 scroll한 만큼 scrollTop 값 증가하므로 이를 업데이트해줌, 
        //따라서 스크롤 시점에 따라 특정액션을 추후에 state를 활용하여 구현 가능
        const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
        // this.setState({ scrollTop });
        // console.log(scrollTop);
        // if (scrollTop > 235) {
        // //     document.getElementById("submenu").style.top = 0;
        //     document.getElementById("submenu").style.position = "fixed";
        // //     // document.getElementById("submenu").style.opacity = 1;

        // } else {
        //     document.getElementById("submenu").style.position = "relative";
        // }
    };

    getData() {

        setTimeout(async () => {
            // const response = await axios.get('../api/products');
            // const data= this.state.search;
            this.setState({ product: [] });
            const data = { search: this.state.search, currentpage: this.state.currentPage }
            console.log("getData");
            console.log(data);
            const response = await axios.post('../api/productssearch', data);
            console.log("11111111122");
            console.log(response.data.products)

            // response.data.products.map
            for (let i = 0; i < response.data.products.length; i++) {
                response.data.products[i].checked = false;
                response.data.products[i].num = i;
                // checkdata+=({no:response.data.products[i].no,checked:"off"});
            }
            console.log("checkdata");
            this.setState({ product: response.data.products });
            // const logdata= this.state.product;
            // console.log(logdata)


        }, 100);
    }


    searchHandler = (e) => {
        let value = [e.target.value];
        this.setState({ search: value });
        console.log(this.state.search);
    }


    changePage = (e) => {
        console.log("changePage");
        console.log(e.selected);
        this.setState({ currentPage: e.selected });
        this.getData();
    }


    getDataCount = async () => {
        const response = await axios.get('../api/productscount');
        console.log(response.data[0].cnt);
        this.setState({ count: response.data[0].cnt })
    }


    render() {
        const product = this.state.product
        let c = 0;
        return (
            <Fade>

                <AboutMenuLayout id='submenu'>
                    <AboutMenuLayout2>
                        <AboutMenu3>
                            <AboutMenuText2>기타</AboutMenuText2>
                        </AboutMenu3>
                        <AboutMenu2>
                            <AboutMenuText2>발전기</AboutMenuText2>
                        </AboutMenu2>
                        <AboutMenu1>
                            <AboutMenuText1>유압</AboutMenuText1>
                        </AboutMenu1>
                    </AboutMenuLayout2>
                    {/* 검색 */}
                    <InputDiv>
                        
                        <FormEl>
                            <InputEl type="text" onChange={this.searchHandler} />
                        </FormEl>
                        <ButtonEl onClick={this.getData}>검색</ButtonEl>

                    </InputDiv>
                </AboutMenuLayout>

                <Fade>
                    <Body id='search body'>
                        <section class="work">

                            {product.map(product => {

                                var a = <ProductDTO data={product} count={c} />
                                c = c + 1;
                                console.log("product");
                                console.log(product);
                                return a;
                            })}
                        </section>
                    </Body>
                </Fade>
                <div>
                    <ReactPaginate
                        pageCount={this.state.count / 10}
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
            </Fade>

        )
    }
}

export default ProductSearch;