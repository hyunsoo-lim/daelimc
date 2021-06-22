import React from 'react';
import axios from 'axios';

// import MyEditor from './daelim_editor';
import { withRouter } from 'react-router-dom';
import styled from "styled-components"


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

class DaelimPlanInsert2 extends React.Component {

    constructor(props) {
        super(props)
        this.state = { params: { download: null }, uploadfile: []}
        this.handleClick = this.handleClick.bind(this)
        this.handleClickFile = this.handleClickFile.bind(this)
        this.addUploadElement = this.addUploadElement.bind(this)
       
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
        newDIV.setAttribute("className", "daelim_ins_from3");
        newDIV.setAttribute("type", "file");
        newDIV.setAttribute("name", "src");
        newDIV.onchange = this.handleClickFile;
        document.getElementById("daelim_ins_fileupload_wrapper").appendChild(newDIV);
        console.log('addUploadElement');
    }

   
    //db 입력 파일 업로드
    setData = async () => {
      
        const updata = this.state.uploadfile;
        console.log(updata);

        const uploadData = new FormData();
        for (let i = 0; i < updata.length; i++) {
            uploadData.append("files", updata[i]);
        }
        const data = this.state.params;
        const p= this.props
        axios.post('../api/imageuploadmulti', uploadData)
            .then(function (response) {

                console.log(response);
                //사진 업로드후 db입력에서 파일 이동
                axios.post('../api/planins', data)
                    .then(function (response) {
                        console.log(response.data);

                        // p.getData();
                        // p.history.push("/search");
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

            })
            .catch(function (error) {
                console.log(error);
            });


        // const responseMultiUpload = await axios.post('http://localhost:3001/api/imageuploadmulti', uploadData);
        // console.log('responseMultiUpload');
        // console.log(responseMultiUpload);




    }


    render() {
        return (
            <Body>
                 <ComponentBottomdiv2/>
                 
                 <ComponentBottomdiv2/>
                <div className="daelim_plan_wrapper">
                       

                        <div className="daelim_ins_wrapper2">
                            <div className="daelim_plan_insert_text">제목</div>
                            <input className="daelim_ins_from2" type="text" name="name" onChange={this.handleClick} />
                        </div>

                        

                        <div className="daelim_ins_wrapper2">
                            <div className="daelim_plan_insert_text">도면 PDF파일</div>
                            {/* <input className="daelim_ins_from2" type="text" name="src" onChange={this.handleClick}/> */}
                            <div id="daelim_ins_fileupload_wrapper">
                                <input className="daelim_ins_from3" type="file" name="files" onChange={this.handleClickFile} />
                            </div>
                        </div>

                        <div className="daelim_ins_wrapper2">
                            <div className="daelim_plan_insert_text">태그</div>
                            <textarea className="daelim_ins_from2"  name="etc" onChange={this.handleClick} />
                        </div>
                   

                   
                    <ComponentBottomdiv />
                    <button onClick={this.setData}> 입력 </button>
                    <ComponentBottomdiv2 />
                </div>
            </Body>
        )
    }
}

export default withRouter(DaelimPlanInsert2);