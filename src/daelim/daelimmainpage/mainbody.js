import React from 'react'
import styled from "styled-components"
import SimpleSlider from './reactSlider'
import Fade from 'react-reveal/Fade';
import axios from 'axios';
import ProductDTO from '../daelimproduct/productdto';


const BREAK_POINT_MOBILE = 768;
const BREAK_POINT_TABLET = 992;
const BREAK_POINT_PC = 1200;

const BodyDiv = styled.div
  `
overflow:visible;
`

// const BackgroundBody = styled.div
//   `
// position:absolute;
// width:1920px;
// height:540px;
// background:#F6F6F6;
// `
const Body = styled.div
  `

min-height:100%;
margin: 0 auto;

@media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
  width: 80%;
}
@media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
  width:80%;
}
@media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
  width: 80%;
}
@media only screen and (min-width: ${BREAK_POINT_PC}px) {
  width: 1080px;
}
`
const BodyMainDiv = styled.div
  `
min-height : 500px;
margin-top : 30px;

`

class DaelimcMainBody extends React.Component {

  constructor(props) {
    super(props)
    this.state = { product: [] }
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }


  getData() {

    setTimeout(async () => {
      // const response = await axios.get('../api/products');
      // const data= this.state.search;
      this.setState({ product: [] });

      const response = await axios.get('../api/productmainpage');
      console.log("11111111122");
      console.log(response.data.products)
      this.setState({ product: response.data.products });
      // const logdata= this.state.product;
      // console.log(logdata)


    }, 100);
  }

  render() {
    const product = this.state.product
    let c = 0;

    return (
      <BodyDiv>
        {/* <BackgroundBody /> */}
        <Fade>
          <SimpleSlider />
          <Body>
            <BodyMainDiv >
              <section class="work">

                {product.map(product => {

                  var a = <ProductDTO data={product} count={0} />
                  c = c + 1;
                  console.log("product");
                  console.log(product);
                  return a;
                })}
              </section>


            </BodyMainDiv>
          </Body>
        </Fade>
      </BodyDiv >
    )
  }
}

export default DaelimcMainBody;