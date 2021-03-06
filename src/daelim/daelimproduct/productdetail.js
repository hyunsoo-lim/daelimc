import React from 'react';
import styled from "styled-components"
// import DraftViewer from './daelim_editor_viewer';
import axios from 'axios';
import Fade from 'react-reveal/Fade';

const DetailMenuLayout = styled.div
`
width: 1080px;
height : 60px; 
background :#6CC0FF;
`

const DetailMenu1 = styled.div
`
width: 120px;
height : 60px; 
`


const DetailMenuText1 = styled.div
`
font-size: 20px;
font-weight: 600;
color:#ffffff;
text-align:center;
line-height:60px;
`




const Body = styled.div
`
min-height:600px;
margin: 0 auto;

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
    width:1080px;
  }
`

const Topdiv = styled.div
`
height:30px;

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
    width:1080px;
  }
`


// const DownloadDiv = styled.div
// `

// height:40px;

// @media only screen and (max-width: 600px) {
//     width: 100%;
//   }
//   @media only screen and (min-width: 600px) {
//     width: 100%;
//   }
//   @media only screen and (min-width: 768px) {
//     width: 100%;
//   }
//   @media only screen and (min-width: 992px) {
//     width: 100%;
//   }
//   @media only screen and (min-width: 1200px) {
//     width:1080px;
//   }
// `

// const DownloadA = styled.a
// `
// height:40px;
// float:right;
// margin-right:30px;
// `


const ImgDiv = styled.div
`
@media only screen and (max-width: 600px) {
    width: 100%;
    height:45%;
  }
  @media only screen and (min-width: 600px) {
    width: 100%;
    height:45%;
  }
  @media only screen and (min-width: 768px) {
    width: 100%;
    height:45%;
  }
  @media only screen and (min-width: 992px) {
    width: 100%;
    height:45%;
  }
  @media only screen and (min-width: 1200px) {
    width:1080px;
    height:400px;
  }
`

const Img = styled.img
`
display:block;

margin-top:26px;

@media only screen and (max-width: 600px) {
    width: 80%;
    margin : 0 auto;
    height:45%;
  }
  @media only screen and (min-width: 600px) {
    margin : 0 auto;
    width: 80%;
    height:45%;
  }
  @media only screen and (min-width: 768px) {
    margin : 0 auto;
    width: 80%;
    height:45%;
  }
  @media only screen and (min-width: 992px) {
    margin : 0 auto;
    width: 60%;
    height:45%;
  }
  @media only screen and (min-width: 1200px) {
    margin-left:20px;
    float:left;
    width:465px;
    height:315px;
  }
`

const SideDiv = styled.div
`
display:block;
height:400px;


@media only screen and (max-width: 600px) {
    margin : 0 auto;
    margin-top:10%;
    width: 80%;
  }
  @media only screen and (min-width: 600px) {
    margin : 0 auto;
    margin-top:10%;
    width: 80%;
  }
  @media only screen and (min-width: 768px) {
    margin : 0 auto;
    margin-top:10%;
    width: 80%;
  }
  @media only screen and (min-width: 992px) {
    margin : 0 auto;
    width: 80%;
  }
  @media only screen and (min-width: 1200px) {
    margin-left:50px;
    float:left;
    width:525px;
  }
`

const SideProductDiv = styled.div
`
height:61px;

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
    width:525px;
  }
`
const SideProductDivSide = styled.div
`
height:1px;
border:1px solid #E1E1E1;
`

const SideProductSubject = styled.div
`
height:61px;
margin-left:20px;
line-height:61px;

font-weight:300;
float:left;

@media only screen and (max-width: 600px) {
    width: 30%;
    font-size:14px;
  }
  @media only screen and (min-width: 600px) {
    width: 30%;
    font-size:14px;
  }
  @media only screen and (min-width: 768px) {
    width: 30%;
    font-size:14px;
  }
  @media only screen and (min-width: 992px) {
    width: 30%;
    font-size:14px;
  }
  @media only screen and (min-width: 1200px) {
    width:90px;
    font-size:16px;
  }
`
const SideProductText= styled.div
`

height:61px;
line-height:61px;
font-size:16px;
float:left;

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
    margin-left:80px;
    width:200px;
  }
`

//제품구성이 길어서 추가
const SideProductText2= styled.div 
`

margin : 0 auto;
font-size:16px;
float:left;

@media only screen and (max-width: 600px) {
    width: 50%;
    padding-top: 4%;
    padding-bottom:4%;

  }
  @media only screen and (min-width: 600px) {
    width: 50%;
    padding-top: 4%;
    padding-bottom:4%;
  }
  @media only screen and (min-width: 768px) {
    width: 50%;
    padding-top: 3%;
    padding-bottom:3%;
  }
  @media only screen and (min-width: 992px) {
    width: 50%;
    padding-top: 2%;
    padding-bottom:2%;
  }
  @media only screen and (min-width: 1200px) {
    padding-top: 2%;
    padding-bottom:2%;
    margin-left:80px;
    width:320px;
  }
`

const DetailDiv =styled.div
`
clear:both;
min-height:300px;
margin-top :100px;
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
    width:1080px;
  }
`

class DaelimProductDetail extends React.Component {

    constructor(props) {
        super(props)
        const pro = this.props.location;
        console.log("detail const");
        console.log(pro.state.product);
        this.downloadHandle = this.downloadHandle.bind(this);
    }


    componentDidMount() {
        console.log("detail mount");


    }

    componentDidUpdate() {
        console.log("detail update");

    }

    downloadHandle() {
        const downloadId = 'aaa.png'
        const responsedownload = axios.get('../../download/' + downloadId);
        console.log("download");
        const blob = new Blob([responsedownload], { type: 'image/png' })
        const url = window.URL.createObjectURL(blob)

        const a = document.createElement("a")
        a.href = url
        a.download = `aaa`
        a.click()
        a.remove()

        window.URL.revokeObjectURL(url);
    }


    render() {

        console.log(this.props.location.state.product.text1);
        // const json = JSON.parse(this.props.location.state.product.download);
        const jsonDetail = JSON.parse(this.props.location.state.product.text1);
        const jsonDownload = JSON.parse(this.props.location.state.product.download);
        const imgDir = "/uploads/" + this.props.location.state.product.name + "/" + jsonDownload.data[0];

        return (
            <Body>
                <Fade>
                    <DetailMenuLayout>
                        <DetailMenu1>
                            <DetailMenuText1>{this.props.location.state.product.name}</DetailMenuText1>
                        </DetailMenu1>
                    </DetailMenuLayout>
                    <Topdiv />


                    <ImgDiv>
                        <Img src={imgDir} />
                        <SideDiv>
                            <SideProductDivSide />
                            <SideProductDiv>
                                <SideProductSubject>제품명</SideProductSubject>
                                <SideProductText>{this.props.location.state.product.name}</SideProductText>
                            </SideProductDiv>
                            <SideProductDivSide />
                            <SideProductDiv>
                                <SideProductSubject>제품 종류</SideProductSubject>
                                <SideProductText>{jsonDetail.ctype}</SideProductText>
                            </SideProductDiv>
                            <SideProductDivSide />
                            <SideProductDiv>
                                <SideProductSubject>제품 색상</SideProductSubject>
                                <SideProductText>{jsonDetail.ccolor}</SideProductText>
                            </SideProductDiv>
                            <SideProductDivSide />
                            <SideProductDiv>
                                <SideProductSubject>제품 사이즈</SideProductSubject>
                                <SideProductText>{jsonDetail.csize}</SideProductText>
                            </SideProductDiv>
                            <SideProductDivSide />
                            <SideProductDiv>
                                <SideProductSubject>제품 구성</SideProductSubject>
                                <SideProductText2>{jsonDetail.ccomponent}</SideProductText2>
                            </SideProductDiv>
                            <SideProductDivSide />
                            <SideProductDiv>
                                <SideProductSubject>기타</SideProductSubject>
                                <SideProductText>{jsonDetail.cetc}</SideProductText>
                            </SideProductDiv>
                            <SideProductDivSide />

                        </SideDiv>
                    </ImgDiv>
                    {/* <DraftViewer text={this.props.location.state.product.text1} /> */}

                    
                    <DetailDiv>{jsonDetail.cdetail}</DetailDiv>
                    

                </Fade>
            </Body>
        )
    }
}

export default DaelimProductDetail;