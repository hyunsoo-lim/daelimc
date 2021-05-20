import React from 'react';
// import './daelimp.css';
import DraftViewer from './daelim_editor_viewer';
import axios from 'axios';



class DaelimProductDetail extends React.Component{

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
        

        return(
            <div>
               <h2>{this.props.location.state.product.num}</h2>
               <div id="download_div">
                   <a href={"http://localhost:3000/download/aaa.png"}>down</a>
               </div>
               <DraftViewer text={this.props.location.state.product.text1}/>
            </div>
         )
    }
}

export default DaelimProductDetail;