import React from 'react';
import styled from "styled-components"
import DraftViewer from './daelim_editor_viewer';
import axios from 'axios';
import Fade from 'react-reveal/Fade';

const Body = styled.div
    `
width:1080px;
min-height:600px;
margin: 0 auto;
`

const Topdiv = styled.div
    `
width:1080px;
height:20px;
`

const SubjectDiv = styled.div
    `
width:100px;
heght:100px;
margin-left:20px;
`

const Subject = styled.p
    `
width:100px;
heght:100px;
font-size:50px;
font-weight:500;
color: #38cbae;
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


        // const product = this.props.searchdata;


        return (
            <Body>
                <Fade>
                    <Topdiv />
                    <SubjectDiv>
                        <Subject>{this.props.location.state.product.num}</Subject>
                    </SubjectDiv>
                    <DownloadDiv>
                        <DownloadA href={"http://localhost:3000/download/aaa.png"}>down</DownloadA>
                    </DownloadDiv>
                    <DraftViewer text={this.props.location.state.product.text1} />
                </Fade>
            </Body>
        )
    }
}

export default DaelimProductDetail;