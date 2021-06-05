import React from 'react';
import axios from 'axios';
import styled, { css } from "styled-components"

const Body=styled.div
`
width:1080px;
margin:0 auto;
`


class DaelimPlanDetail extends React.Component{

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
        const jsonDetail= JSON.parse(this.props.location.state.product.text1);
        const jsonDownload =JSON.parse(this.props.location.state.product.download);
        const imgDir= "/uploads/"+this.props.location.state.product.name+"/"+jsonDownload.data[0];

        return(
            <Body>
               <h2>{this.props.location.state.product.name}</h2>
               <div id="download_div">
                   <a href={"http://localhost:3000/download/aaa.png"}>down</a>
               </div>

               <img src={imgDir}/>
               {/* <DraftViewer text={this.props.location.state.product.text1}/> */}
               <p>{jsonDetail.ctype}</p>
               <p>{jsonDetail.ccolor}</p>
               <p>{jsonDetail.csize}</p>
               <p>{jsonDetail.ccomponent}</p>
               <p>{jsonDetail.cetc}</p>
               <p>{jsonDetail.cdetail}</p>
               
            </Body>
         )
    }
}

export default DaelimPlanDetail;