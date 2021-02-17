import  React from "react";


class DaelimProductDTO extends React.Component{

    constructor(props){
            super(props);
            console.log("dto");
          
    }

     
   

    render(){
        // const data= this.state.data
        return(
            <tr>
            <td><input type="checkbox" checked={this.props.checked} value={this.props.num} onChange={this.props.handler}/></td>
            <td>{this.props.no} </td>
            <td>{this.props.type1}</td>
            <td>{this.props.type2}</td>
            <td>{this.props.name}</td>
            <td>{this.props.text1}</td>
            <td>{this.props.text2}</td>
            <td>{this.props.src}</td>
            </tr>
        )
    }

}

export default DaelimProductDTO;
