import React from 'react';
import axios from 'axios';

import MyEditor from './daelim_editor';
import { withRouter } from 'react-router-dom';
import styled from "styled-components"

const Body = styled.div
    `
width:1080px;
margin:0 auto;
`

const ComponentDiv = styled.div
    `
width:91.5%;
height:720px;
margin-left:60px;
border: 1px solid #E1E1E1;
border-radius: 10px;
`


const ComponentDiv2 = styled.div
    `
width:100%;
height:600px;
margin-left:30px;
margin-top:20px;
`


const ComponentTextarea = styled.textarea
    `
width:580px;
height:200px;
border: 1px solid #E1E1E1;
`
const ComponentBottomdiv = styled.div
    `
height:30px;
`

const ComponentBottomdiv2 = styled.div
    `
height:50px;
`

const ComponentTopText = styled.div
    `
margin-left: 70px;
margin-bottom: 5px;
`

class DaelimPlanInsert extends React.Component {

    constructor(props) {
        super(props)
        this.state = { params: { download: null }, uploadfile: [], detail: { ctype: null, csize: null, ccolor: null, ccomponent: null, cetc: null, cdetail: null } }
        this.handleClick = this.handleClick.bind(this)
        this.handleClickFile = this.handleClickFile.bind(this)
        this.addUploadElement = this.addUploadElement.bind(this)
        this.handleComponent = this.handleComponent.bind(this)
    }


    handleComponent = (e) => {
        const nextState = this.state.detail;
        nextState[e.target.name] = e.target.value;
        this.setState({ detail: nextState });
        console.log(nextState)
        // console.log(this.state.params.type);

    }

    handleClick = (e) => {
        const nextState = this.state.params;
        nextState[e.target.name] = e.target.value;
        this.setState({ params: nextState });
        console.log(nextState)
        console.log(this.state.params.type);

    }

    handleClickFile = (e) => {
        let nextUploadFile = this.state.uploadfile;
        const targetfile = e.target.files[0];
        console.log(targetfile.name);

        // const params_src={};
        const nextState = this.state.params;



        if (nextState.download != null) {
            let jsonparse = JSON.parse(nextState.download);
            jsonparse.data.push(targetfile.name);
            let jsonstr = JSON.stringify(jsonparse);
            nextState["download"] = jsonstr;
            console.log("params_src11");
            console.log(nextState);
        } else {
            let jsonstr = JSON.stringify({ data: [targetfile.name] });
            nextState["download"] = jsonstr;
            console.log("params_src22");
            console.log(nextState);
        }

        this.setState({ params: nextState });

        nextUploadFile.push(e.target.files[0]);
        console.log(nextUploadFile);
        this.setState({ uploadfile: nextUploadFile });
    }


    //에디터의 내용 통채로 가져와서 setstate 
    textHandler = (value) => {
        let nextState = this.state.params;
        nextState["text1"] = JSON.stringify(value);
        this.setState({ params: nextState });
        console.log(this.state.params.text1);
    }


    //다운로드 파일 업로드시 추가로 넣을 input 생성하는 function
    addUploadElement = () => {
        const newDIV = document.createElement("input");
        newDIV.setAttribute("class", "daelim_ins_from3");
        newDIV.setAttribute("type", "file");
        newDIV.setAttribute("name", "src");
        newDIV.onchange = this.handleClickFile;
        document.getElementById("daelim_ins_fileupload_wrapper").appendChild(newDIV);
    }



    //db 입력 파일 업로드
    setData = async () => {
        let nextState = this.state.params;
        let cdetail = this.state.detail;
        nextState["text1"] = JSON.stringify(cdetail);  //상세 설명쪽은 모아서 json으로 통으로 올린다
        this.setState({ params: nextState });


        const updata = this.state.uploadfile;
        console.log(updata);

        const uploadData = new FormData();
        for (let i = 0; i < updata.length; i++) {
            uploadData.append("files", updata[i]);
        }
        const responseMultiUpload = await axios.post('../api/imageuploadmulti', uploadData);

        //사진 업로드후 db입력에서 파일 이동
        const data = this.state.params;
        const response = await axios.post('../api/productsins', data);
        const resposedata = await response.data;
        console.log(resposedata);

        this.props.getData();
        this.props.history.push("/plan/search");
    }


    render() {
        return (
            <Body>
                <div class="daelim_plan_wrapper">
                    <div class="daelim_plan_container_left">
                        <div class="daelim_ins_wrapper">
                            <div class="daelim_plan_insert_text">제품 타입</div>
                            <select class="daelim_ins_from" name="type" onChange={this.handleClick}>
                                <option value=""></option>
                                <option value="발전기">발전기</option>
                                <option value="유압">유압</option>
                                <option value="기타">기타</option>
                            </select>
                        </div>

                        <div class="daelim_ins_wrapper11">
                            <div class="daelim_plan_insert_text">엔진 타입</div>
                            <select class="daelim_ins_from" name="type2" onChange={this.handleClick}>
                                <option value=""></option>
                                <option value="scania">스카니아</option>
                                <option value="commins">커민스</option>
                                <option value="volvo">볼보</option>
                                <option value="caterpillar">캐터필러</option>
                                <option value="perkins">퍼킨스</option>
                                <option value="fiat">피아트</option>
                                <option value="multi">다중엔진</option>
                                <option value="etc">기타</option>
                            </select>
                        </div>

                        <div class="daelim_ins_wrapper2">
                            <div class="daelim_plan_insert_text">모델명</div>
                            <input class="daelim_ins_from2" type="text" name="name" onChange={this.handleClick} />
                        </div>

                        <div class="daelim_ins_wrapper2">
                            <div class="daelim_plan_insert_text">태그</div>
                            <input class="daelim_ins_from2" type="text" name="text2" onChange={this.handleClick} />
                        </div>

                        <div class="daelim_ins_wrapper2">
                            <div class="daelim_plan_insert_text">메인 이미지</div>
                            {/* <input class="daelim_ins_from2" type="text" name="src" onChange={this.handleClick}/> */}
                            <div id="daelim_ins_fileupload_wrapper">
                                <input class="daelim_ins_from3" type="file" name="files" onChange={this.handleClickFile} />
                            </div>
                        </div>
                    </div>

                    <div class="daelim_plan_container_right">
                        <ComponentTopText> 상세 내용</ComponentTopText>
                        <ComponentDiv>
                            <ComponentDiv2>
                                <div class="daelim_ins_wrapper2">
                                    <div class="daelim_plan_insert_text">제품종류</div>
                                    <input class="daelim_ins_from2" type="text" name="ctype" onChange={this.handleComponent} />
                                </div>
                                <div class="daelim_ins_wrapper2">
                                    <div class="daelim_plan_insert_text">사이즈</div>
                                    <input class="daelim_ins_from2" type="text" name="csize" onChange={this.handleComponent} />
                                </div>
                                <div class="daelim_ins_wrapper2">
                                    <div class="daelim_plan_insert_text">색상</div>
                                    <input class="daelim_ins_from2" type="text" name="ccolor" onChange={this.handleComponent} />
                                </div>

                                <div class="daelim_ins_wrapper2">
                                    <div class="daelim_plan_insert_text">구성품</div>
                                    <input class="daelim_ins_from2" type="text" name="ccomponent" onChange={this.handleComponent} />
                                </div>

                                <div class="daelim_ins_wrapper2">
                                    <div class="daelim_plan_insert_text">기타</div>
                                    <input class="daelim_ins_from2" type="text" name="cetc" onChange={this.handleComponent} />
                                </div>

                                <div class="daelim_ins_wrapper2">
                                    <div class="daelim_plan_insert_text">상세내용</div>
                                    <ComponentTextarea class="daelim_ins_from2" name="cdetail" onChange={this.handleComponent} />
                                </div>
                            </ComponentDiv2>
                        </ComponentDiv>
                    </div>



                    <div class="daelim_ins_wrapper3">
                        <div id="daelim_ins_wrapper3_text">파일 올리기</div>
                        <button id="daelim_ins_wrapper3_btn" onClick={this.addUploadElement}>추가</button>
                        <div id="daelim_ins_fileupload_wrapper">
                            <input class="daelim_ins_from3" type="file" name="files" onChange={this.handleClickFile} />
                        </div>
                    </div>
                    <ComponentBottomdiv />
                    <button onClick={this.setData}> 입력 </button>
                    <ComponentBottomdiv2 />
                </div>
            </Body>
        )
    }
}

export default withRouter(DaelimPlanInsert);