import React from 'react';
import axios from 'axios';
import styled from "styled-components"
import { Document,Page,pdfjs } from "react-pdf";
import { StyleSheet,View  } from "@react-pdf/renderer";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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

class DaelimPlanDetail2 extends React.Component{

    constructor(props){
        super(props)
        const pro= this.props.location;
        console.log("detail const");
        console.log(pro.state.product);
        this.downloadHandle=this.downloadHandle.bind(this);
    }


    componentDidMount(){
        console.log("detail mount");
    
       
    }

    componentDidUpdate(){
        console.log("detail update");
      
    }

    downloadHandle(){
        const downloadId= 'aaa.png'
        const responsedownload=axios.get('../../download/'+downloadId);
        console.log("download");
        const blob = new Blob([responsedownload], {type: 'image/png'})
        const url = window.URL.createObjectURL(blob)

        const a = document.createElement("a")
        a.href = url
        a.download = `aaa`
        a.click()
        a.remove()

        window.URL.revokeObjectURL(url);
    }
    

    render(){
      
     
        // const product = this.props.searchdata;
        console.log(this.props.location.state.product.text1);
        // const jsonDetail= JSON.parse(this.props.location.state.product.text1);
        const jsonDownload =JSON.parse(this.props.location.state.product.download);
        const imgDir= "/uploads/plan/"+this.props.location.state.product.name+"/"+jsonDownload.data[0];

        return(
            <Body>
               <h2>{this.props.location.state.product.name}</h2>
               <div id="download_div">
                   <a href={"http://localhost:3000/download/aaa.png"}>down</a>
               </div>

               <Document size="a1"
                    file={imgDir}
                    onLoadSuccess={this.onDocumentLoadSuccess}>
                    <Page pageNumber={1}  ></Page>
                  </Document>
               
            </Body>
         )
    }
}

export default DaelimPlanDetail2;