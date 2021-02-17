import React from 'react';
import './daelimp.css';
import DaelimProductDTO from './daelim_product_dto';



class DaelimPlanSearch extends React.Component{

    constructor(props){
        super(props)
    }


    componentDidMount(){

       
    }

    render(){
        const product = this.props.searchdata;
        

        return(
            <div>
                {/* 검색 */}
                <div id="main_tip_search"> 
                    <form>
                        <input type="text" name="search" id="tip_search_input" list="search" onChange={this.props.searchHandler} />
                    </form>
                    <button id="tip_search_btn" onClick={this.props.getData}> 검색</button>
                </div>

                <h2>data</h2>
                <section class="work">
                
                {product.map(product =>{
                    var a= <DaelimProductDTO  data={product} checkhandler={this.props.checkhandler}/>
                    return a;
                        })}
                    
                </section>
            </div>
         )
    }
}

export default DaelimPlanSearch;