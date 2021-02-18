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

    setData = async() => {
        const data = this.state.params;
        const response=axios.post('../api/productsins',data );
        this.props.getData();
        this.props.history.push("/plan/search");
      }


    render(){
        return(
        <div>
            <p>타입1</p>
            <select name="type" onChange={this.handleClick}>
                <option value="발전기">발전기</option>
                <option value="유압">유압</option>
                <option value="기타">기타</option>    
            </select>

           {/* <input type="text" name="type" onChange={this.handleClick}/> */}
           <p>타입2</p>
           <select name="type2" onChange={this.handleClick}>
                 <option value="scania">스카니아</option>
                 <option value="commins">커민스</option>
                 <option value="volvo">볼보</option>
                 <option value="caterpillar">캐터필러</option>
            </select>
           {/* <input type="text" name="type2" onChange={this.handleClick}/> */}
           <p>모델명</p>
           <input type="text" name="name" onChange={this.handleClick}/>
           {/* <p>내용1</p>
           <input type="text" name="text1" onChange={this.handleClick}/> */}
           <p>내용2</p>
           <input type="text" name="text2" onChange={this.handleClick}/>
           <p>메인 이미지</p>
           <input type="text" name="src" onChange={this.handleClick}/>
           
           <button onClick={this.setData}> 입력 </button>

           <MyEditor textHandler={this.textHandler}/>
        </div>
         )
    }
}

export default withRouter(DaelimPlanInsert);