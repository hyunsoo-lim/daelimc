import  React from "react";


class DaelimProductDTO extends React.Component{

    constructor(props){
            super(props);
            this.state={data :{name:"", type1:"", type2:"", text1:"", text2:"", src:""}}

            this.setState=this.state.data.type1=props.type1;
            this.setState=this.state.data.type2=props.type2;
            this.setState=this.state.data.name=props.name;
            this.setState=this.state.data.text1=props.text1;
            this.setState=this.state.data.text2=props.text2;
            this.setState=this.state.data.src=props.src;
    }

    render(){
        const data= this.state.data
        return(
            <tr>
            <td>{data.type1}</td>
            <td>{data.type2}</td>
            <td>{data.name}</td>
            <td>{data.text1}</td>
            <td>{data.text2}</td>
            <td>{data.src}</td>
            </tr>
        )
    }

}

export default DaelimProductDTO;
