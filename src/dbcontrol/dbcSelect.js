import React from 'react';
import axios from 'axios';
import DbcInsert from './dbcInsert';
import DaelimProductDTO from './daelim_product_dto';
import DaelimEditor from './daelim_editor';
import MyEditor from './daelim_editor';



class DbcSelect extends React.Component{

    constructor(props){
        super(props)
        this.state= {product:[],checkedNum:[]}
        this.checkedItemHandler=this.checkedItemHandler.bind(this);
        this.getData = this.getData.bind(this)
        this.deleteData = this.deleteData.bind(this)
        this.checkAllOff=this.checkAllOff.bind(this)
    }


    componentDidMount(){

        console.log("didmount");
        this.getData();
    }


    

    checkedItemHandler = (e)=>{
        let nextState=this.state.product;
        console.log( "nextState");
        console.log(Number(e.target.value))
        if(e.target.checked){
             nextState[Number(e.target.value)].checked=true;
            // nextState.push(Number(e.target.value));
        }else if(!e.target.checked){
            // nextState.splice(nextState.indexOf(Number(e.target.value)),1);
            nextState[Number(e.target.value)].checked=false;
        }
        this.setState({product: nextState})

    }

    checkAllOff(){
       this.getData();
    }



    // componentDidUpdate(prevProps) {
    //     // 전형적인 사용 사례 (props 비교를 잊지 마세요)
    //     if (this.props.userID !== prevProps.userID) {
    //       this.fetchData(this.props.userID);
    //     }
    //   }

    getData (){

        setTimeout(async() => {
            const response = await axios.get('api/products');
            console.log("111111111");
            console.log(response.data.products.length)
            
            // response.data.products.map
            for(let i=0; i<response.data.products.length; i++){
                response.data.products[i].checked = false;
                response.data.products[i].num = i;
                // checkdata+=({no:response.data.products[i].no,checked:"off"});
            }
            console.log("checkdata");
            this.setState({product:response.data.products});
            // const logdata= this.state.product;
            // console.log(logdata)
        }, 100);
      }

      componentDidUpdate(){
          console.log("update")
          console.log(this.state.product);      
      }
  
     deleteData = async() => {
            
            let checkData = [];
            for(let i=0; i<this.state.product.length; i++){
                if(this.state.product[i].checked){
                    checkData.push(this.state.product[i].no)
                }
            }
            const responsedel= await axios.post('api/productsdel',checkData)
            console.log("delllll");
            console.log(checkData);
            // this.setState({checkedNum:[]})
            this.getData();
    }
    

    render(){
        console.log("render");
        console.log(this.state.product)
        let {product} = this.state;

        

        return(
        <div>
             <DbcInsert getData={this.getData}/>
             <MyEditor/>
            <h2>data</h2>
            <table>
                <tr>
                    <td>num</td>
                    <td>no</td>
                    <td>타입</td>
                    <td>타입2</td>
                    <td>이름</td>
                    <td>text1</td>
                    <td>text2</td>
                    <td>src</td>
                    <td><button onClick={this.deleteData}>삭제</button></td>
                    <td><button onClick={this.checkAllOff}>해제</button></td>
                </tr>
               
               {product.map(product =>{
                 var a= <DaelimProductDTO  num={product.num} no={product.no} type1={product.type} type2={product.type2} name={product.name} text1={product.text1} text2={product.text2} 
                                           src={product.imgsrc} checked={product.checked} handler={this.checkedItemHandler}/>
                return a;
                     })}
                
            </table>
            
        </div>
         )
    }
}

export default DbcSelect;