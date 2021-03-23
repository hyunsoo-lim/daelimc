import React from 'react';
import './daelimp.css';
import axios from 'axios';
import {BrowserRouter as BrowseRouter,Switch,Route,Link} from 'react-router-dom';
import DaelimPlanSearch from './daelimplansearch';
import DaelimPlanDetail from './daelimplandetail';
import DaelimPlanInsert from './daelimplaninsert';

// import DbcInsert from './dbcInsert';
// import DaelimEditor from './daelim_editor';
// import MyEditor from './daelim_editor';



class DaelimPlan extends React.Component{

    constructor(props){
        super(props)
        this.state= {product:[],checkedNum:[],count:0,currentPage:0,search:[""]}
        this.checkedItemHandler=this.checkedItemHandler.bind(this);
        this.getData = this.getData.bind(this);
        this.getDataCount = this.getDataCount.bind(this);
        this.deleteData = this.deleteData.bind(this);
        this.changePage = this.changePage.bind(this);
        this.searchHandler=this.searchHandler.bind(this);
    }


    componentDidMount(){

        console.log("didmount");
        this.getDataCount();
        this.getData();
    }

    


    checkedItemHandler = (e) =>{
        let nextState=this.state.product;
        console.log( "nextState");
        console.log(Number(e.target.value))
        if(e.target.checked){
             nextState[Number(e.target.value)].checked=true;
        }else if(!e.target.checked){
            nextState[Number(e.target.value)].checked=false;
        }
        this.setState({product: nextState})

    }

    searchHandler=(e)=>{
        let value=[e.target.value];
        this.setState({search:value});
        console.log(this.state.search);
    }

    changePage=(e)=>{
        console.log("changePage");
        console.log(e.selected);
        this.setState({currentPage:e.selected});
        this.getData();
    }

    getDataCount = async() =>{
        const response = await axios.get('../api/productscount');
        console.log(response.data[0].cnt);
        this.setState({count:response.data[0].cnt})
    }

    getData (){

        setTimeout(async() => {
            // const response = await axios.get('../api/products');
            // const data= this.state.search;
            const data= {search:this.state.search, currentpage:this.state.currentPage}
            console.log("getData");
            console.log(data);
            const response = await axios.post('../api/productssearch',data);
            console.log("11111111122");
            console.log(response.data.products)
            
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
    


      deleteData = async() => {
              console.log("delllll");
        let checkData = [];
        for(let i=0; i<this.state.product.length; i++){
            if(this.state.product[i].checked){
                checkData.push(this.state.product[i].no)
            }
        }
        const responsedel= await axios.post('../api/productsdel',checkData)
        console.log("delllll");
        console.log(checkData);
        // this.setState({checkedNum:[]})
        this.getData();
}
    

    render(){
      
        // let {product} = this.state.product;
        

        return(
            // /Users/grandmaster/react/dealim_c/src/img/
        <div>
             <BrowseRouter>
                <div id="wrapper-header">
                    <div id="main-header" >
                        <div class="logo"><div id="logo_img"/></div>
                        
                        <div id="stripes"></div>
                    </div>
                </div>

                {/* <!-- NAVBAR --> */}

                <div id="wrapper-navbar">
                    <div class="navbar object">
                        <div id="wrapper-sorting">
                            <div id="wrapper-title-1">
                            <Link to ="/plan/search"><div class="top-rated object">발전기</div></Link>
                                <div id="fleche-nav-1"></div>
                            </div>
                            
                            <div id="wrapper-title-2">
                            <Link to ="/plan/search"><div class="recent object">유압</div></Link>
                                <div id="fleche-nav-2"></div>
                            </div>
                            
                            <div id="wrapper-title-3">
                            <Link to ="/plan/search"><div class="oldies object">기타</div></Link>
                                <div id="fleche-nav-3"></div>
                            </div>

                            <div id="wrapper-title-4">
                                <Link to ="/plan/ins">
                                    <div class="oldies object">입력</div>
                                </Link>
                                <div id="fleche-nav-4"></div>
                            </div>

                            <div id="wrapper-title-3">
                            <div class="oldies object">편집</div>
                                <div id="fleche-nav-3"></div>
                            </div>

                            <div id="wrapper-title-3">
                           <div class="oldies object" onClick={this.deleteData}>삭제</div>
                                <div id="fleche-nav-3"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 라우터 */}
            
                {/* {console.log("router")} */}
                {/* {console.log(this.state.product)} */}
                    <Switch>
                        <Route exact path="/plan/search"  
                            render={() => <DaelimPlanSearch searchdata={this.state.product} checkhandler={this.checkedItemHandler} 
                                                            searchHandler={this.searchHandler} getData={this.getData} changePage={this.changePage} count={this.state.count}/>} 
                        />
                        <Route path="/plan/detail" component={DaelimPlanDetail}/>
                        <Route path="/plan/ins" 
                         render={() => <DaelimPlanInsert getData={this.getData}/>}/> 
                    </Switch>

                  
           </BrowseRouter>
        </div>
         )
    }
}

export default DaelimPlan;