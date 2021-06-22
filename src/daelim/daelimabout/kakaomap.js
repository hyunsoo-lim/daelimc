import React from 'react';
import styled from "styled-components";

const Kmap = styled.div
  `

margin-top:10px;

@media only screen and (max-width: 600px) {
  width: 100%;
  margin: 0 auto;
  height:400px;
}

@media only screen and (min-width: 600px) {
  width: 100%;
  margin: 0 auto;
  height:400px;
}

@media only screen and (min-width: 768px) {
  width: 100%;
  margin: 0 auto;
  height:400px;
}

@media only screen and (min-width: 992px) {
  width: 100%;
  margin: 0 auto;
  height:600px;
}

@media only screen and (min-width: 1200px) {
  width: 1080px;
  height:600px;
}
`


/*global kakao*/

class KakaoMap extends React.Component {

  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=b5a927e117bc1ecc5ba1cba8e9131ad9&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById("map");
        let options = {
          center: new kakao.maps.LatLng(37.52435077221122, 126.91065280399162),
          level: 3
        };


        const map = new kakao.maps.Map(container, options);

        var markerPosition = new kakao.maps.LatLng(37.52435077221122, 126.91065280399162);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
          position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        var iwContent = '<div style="padding:5px;">영등포구 버드나루로12가길12 205호 대림컨트롤 ..... </div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
          iwPosition = new kakao.maps.LatLng(37.5247077221122, 126.9106528039900), //인포윈도우 표시 위치입니다
          iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

        // 인포윈도우를 생성하고 지도에 표시합니다
        var infowindow = new kakao.maps.InfoWindow({
          map: map, // 인포윈도우가 표시될 지도
          position: iwPosition,
          content: iwContent,
          removable: iwRemoveable
        });
      });
    };
  }
  render() {
    return (
      <div>
        <Kmap id="map" />
      </div>
    )
  }
}

// const Head = styled.h1`
// text-align: center;
// `

export default KakaoMap;