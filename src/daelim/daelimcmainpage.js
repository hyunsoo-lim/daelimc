import React from 'react';
import Menu from './daelimmainpage/dealimcmenu';
import SimpleSlider from './daelimmainpage/reactSlider';



class DaelimcMainPage extends React.Component {

  constructor(props) {
    super(props)
  
  }

 
  

  componentDidMount() {
  }

  render() {

    return (
      <div>
        <Menu/>
        <SimpleSlider/>
      </div>
    )
  }
}

export default DaelimcMainPage;