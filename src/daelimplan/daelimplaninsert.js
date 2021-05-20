import React from 'react';
import axios from 'axios';

import MyEditor from './daelim_editor';
import { withRouter } from 'react-router-dom';

class DaelimPlanInsert extends React.Component{

    constructor(props){
        super(props)
        this.state= { params  : {download: null}, uploadfile:[]}
        this.handleClick=this.handleClick.bind(this)
        this.handleClickFile=this.handleClickFile.bind(this)
        this.addUploadElement=this.addUploadElement.bind(this)
    }


    
    handleClick=(e)=>{
        const nextState=this.state.params;
        nextState[e.target.name]=e.target.value;
        this.setState({params:nextState});
        console.log(nextState)
        console.log(this.state.params.type);

    }

    handleClickFile =(e)=>{
        let nextUploadFile= this.state.uploadfile;
        const targetfile=e.target.files[0];
        console.log(targetfile.name);

        // const params_src={};
        const nextState=this.state.params;
     
       

        if(nextState.download != null){
            let jsonparse=JSON.parse(nextState.download);
            jsonparse.data.push(targetfile.name);
            let jsonstr=JSON.stringify(jsonparse);
            nextState["download"]=jsonstr;
            console.log("params_src11");
            console.log(nextState);
        }else{
            let jsonstr=JSON.stringify({data:[targetfile.name]});
            nextState["download"]=jsonstr;
            console.log("params_src22");
            console.log(nextState);
        }
        
        this.setState({params:nextState});
       
        nextUploadFile.push(e.target.files[0]);
        console.log(nextUploadFile);
        this.setState({uploadfile: nextUploadFile});
    }


    //에디터의 내용 통채로 가져와서 setstate 
    textHandler=(value)=>{
        let nextState=this.state.params;
        nextState["text1"]=JSON.stringify(value);
        this.setState({params:nextState});
        console.log(this.state.params.text1);
    }


    //다운로드 파일 업로드시 추가로 넣을 input 생성하는 function
    addUploadElement=()=>{
        const newDIV = document.createElement("input");
        newDIV.setAttribute("class","daelim_ins_from3");
        newDIV.setAttribute("type","file");
        newDIV.setAttribute("name","src");
        newDIV.onchange=this.handleClickFile;
        document.getElementById("daelim_ins_fileupload_wrapper").appendChild(newDIV);
    }



    //db 입력 파일 업로드
    setData = async() => {
        const updata=this.state.uploadfile;
        console.log(updata);

        const uploadData = new FormData();
        for (let i = 0 ; i < updata.length ; i++) {
                uploadData.append("files", updata[i]);
         }
        const responseMultiUpload=await axios.post('../api/imageuploadmulti',uploadData );

        //사진 업로드후 db입력에서 파일 이동
        const data = this.state.params;
        const response= await axios.post('../api/productsins',data );
        const resposedata= await response.data;
        console.log(resposedata);

        this.props.getData();
        this.props.history.push("/plan/search");
      }


    render(){
        return(
        <div class="daelim_plan_wrapper">
            <div class="daelim_plan_container_left">
                <div class="daelim_ins_wrapper">
                    <div class="daelim_plan_insert_text">제품 타입</div>
                    <select class="daelim_ins_from" name="type" onChange={this.handleClick}>
                        <option value="발전기">발전기</option>
                        <option value="유압">유압</option>
                        <option value="기타">기타</option>    
                    </select>
                </div>
            
                <div class="daelim_ins_wrapper">
                    <div class="daelim_plan_insert_text">엔진 타입</div>
                    <select class="daelim_ins_from" name="type2" onChange={this.handleClick}>
                        <option value="scania">스카니아</option>
                        <option value="commins">커민스</option>
                        <option value="volvo">볼보</option>
                        <option value="caterpillar">캐터필러</option>
                    </select>
                </div>

                <div class="daelim_ins_wrapper2">
                    <div class="daelim_plan_insert_text">모델명</div>
                    <input class="daelim_ins_from2" type="text" name="name" onChange={this.handleClick}/>
                </div>

                <div class="daelim_ins_wrapper2">
                    <div class="daelim_plan_insert_text">태그</div>
                    <input class="daelim_ins_from2" type="text" name="text2" onChange={this.handleClick}/>
                </div>

                <div class="daelim_ins_wrapper2">
                <div class="daelim_plan_insert_text">메인 이미지</div>
                {/* <input class="daelim_ins_from2" type="text" name="src" onChange={this.handleClick}/> */}
                <div id="daelim_ins_fileupload_wrapper">
                     <input class="daelim_ins_from3"  type="file" name="files"  onChange={this.handleClickFile}/>
                </div>
            </div>
            </div>

            <div class="daelim_plan_container_right">
                <div class="daelim_plan_insert_text">내용</div>
                <MyEditor textHandler={this.textHandler} name={this.state.params.name}/>
            </div>

           

            <div class="daelim_ins_wrapper3">
                <div id ="daelim_ins_wrapper3_text">파일 올리기</div>
                <button id="daelim_ins_wrapper3_btn" onClick={this.addUploadElement}>추가</button>
                <div id="daelim_ins_fileupload_wrapper">
                     <input class="daelim_ins_from3"  type="file" name="files"  onChange={this.handleClickFile}/>
                </div>
            </div>

           <button onClick={this.setData}> 입력 </button>
        </div>
         )
    }
}

export default withRouter(DaelimPlanInsert);