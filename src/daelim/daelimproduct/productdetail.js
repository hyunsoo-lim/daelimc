import React from 'react';
import styled from "styled-components"
import DraftViewer from './daelim_editor_viewer';
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
width:1080px;
min-height:600px;
margin: 0 auto;
`

const Topdiv = styled.div
`
width:1080px;
height:30px;
`


const DownloadDiv = styled.div
`
width:1080px;
height:40px;
`

const DownloadA = styled.a
`
height:40px;
float:right;
margin-right:30px;
`
const ImgDiv = styled.div
`
width:1080px;
height:400px;
`

const Img = styled.img
`
display:block;
width:465px;
height:315px;
margin-left:20px;
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
        const json = JSON.parse(this.props.location.state.product.download);
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
                    </ImgDiv>
                    {/* <DraftViewer text={this.props.location.state.product.text1} /> */}

                    <p>{jsonDetail.ctype}</p>
                    <p>{jsonDetail.ccolor}</p>
                    <p>{jsonDetail.csize}</p>
                    <p>{jsonDetail.ccomponent}</p>
                    <p>{jsonDetail.cetc}</p>
                    <p>{jsonDetail.cdetail}</p>

                </Fade>
            </Body>
        )
    }
}

export default DaelimProductDetail;