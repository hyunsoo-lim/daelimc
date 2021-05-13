import React from 'react';
import styled from "styled-components";

/*global kakao*/ 

class KakaoMap extends React.Component{

    componentDidMount() {
        const script = document.createElement("script");
        script.async = true;
        script.src =
          "https://dapi.kakao.com/v2/maps/sdk.js?appkey=b5a927e117bc1ecc5ba1cba8e9131ad9&libraries=LIBRARY";
        document.head.appendChild(script);

      script.onload = () => {
        kakao.maps.load(() => {
          let container = document.getElementById("map");
          let options = {
            center: new kakao.maps.LatLng(37.506502, 127.053617),
            level: 7
          };
  
          const map = new window.kakao.maps.Map(container, options);
       
        });
      };
    }
    render(){
        return(
            <>
            <Maps id="map">
            </Maps>
            </>
        )
    }
}
const Maps = styled.div`
width: 400px;
height: 400px;
margin : 100px 100px 0 130%;
`;

// const Head = styled.h1`
// text-align: center;
// `

export default KakaoMap;