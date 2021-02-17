import React from 'react';
import axios from 'axios';



class DbcSelect extends React.Component{

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


    setData = async() => {
        const data = this.state.params;
        const response=axios.post('api/productsins',data );
        this.props.getData()
      }


    render(){
        return(
        <div>
           <input type="text" name="type" onChange={this.handleClick}/>
           <input type="text" name="type2" onChange={this.handleClick}/>
           <input type="text" name="name" onChange={this.handleClick}/>
           <input type="text" name="text1" onChange={this.handleClick}/>
           <input type="text" name="text2" onChange={this.handleClick}/>
           <input type="text" name="src" onChange={this.handleClick}/>
           <button onClick={this.setData}> 입력 </button>
        </div>
         )
    }
}

export default DbcSelect;