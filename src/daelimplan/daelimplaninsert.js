import React from 'react';
import axios from 'axios';
import './daelimp.css';
import MyEditor from './daelim_editor';
import { withRouter } from 'react-router-dom';

class DaelimPlanInsert extends React.Component{

    constructor(props){
        super(props)
        this.state= { params  : {}}
        this.handleClick=this.handleClick.bind(this)
        this.addUploadElement=this.addUploadElement.bind(this)
    }


    
    handleClick=(e)=>{
        const nextState=this.state.params;
        nextState[e.target.name]=e.target.value;
        this.setState({params:nextState});
        console.log(nextState)
        console.log(this.state.params.type);

    }
    textHandler=(value)=>{
        // const nextState=this.state.params;
        // nextState["text1"]=e.target.editorState;
        // this.setState({params:nextState});
        // console.log(nextState)
        // console.log(this.state.params.type);
        let nextState=this.state.params;
        nextState["text1"]=JSON.stringify(value);
        this.setState({params:nextState});
        console.log(this.state.params.text1);
    }

    addUploadElement(){
       
        const newDIV = document.createElement("input");
        newDIV.setAttribute("class","daelim_ins_from3");
        newDIV.setAttribute("type","file");
        newDIV.setAttribute("name","src");
        newDIV.setAttribute("onChange",this.handleClick);

        // const element= "<input class='daelim_ins_from2' type='file' name='src' onChange={this.handleClick}/>";
        document.getElementById("daelim_ins_fileupload_wrapper").appendChild(newDIV);
    }

    setData = async() => {
        const data = this.state.params;
        const response=axios.post('../api/productsins',data );
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
                <input class="daelim_ins_from2" type="file" name="src" onChange={this.handleClick}/>
            </div>
            </div>

            <div class="daelim_plan_container_right">
                <div class="daelim_plan_insert_text">내용</div>
                <MyEditor textHandler={this.textHandler}/>
            </div>

           

            <div class="daelim_ins_wrapper3">
                <div id ="daelim_ins_wrapper3_text">파일 올리기</div>
                <button id="daelim_ins_wrapper3_btn" onClick={this.addUploadElement}>추가</button>
                <div id="daelim_ins_fileupload_wrapper">
                    <input class="daelim_ins_from3" type="file" name="src" onChange={this.handleClick}/>
                </div>
            </div>

           <button onClick={this.setData}> 입력 </button>
        </div>
         )
    }
}

export default withRouter(DaelimPlanInsert);