import { blue } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';
import styled from "styled-components";


const MapWrapper = styled.div`
  display: flex;

  #result-list {
    width: 40%;
    height: 500px;
    overflow: auto;
    border-color: red;
  }

  #result-list > div {
    width: 100%;
    text-align: center;
  }

  #pagination {
    margin-top: 3rem;
    text-align: center;
  }

  #pagination a {
  color: blue;
  font-size: 20px;
  text-decoration: none;
  margin: 0 10px;

  #pagination a.on {
  color: lightblue;
  font-weight: bold;
  }
}
`;


const { kakao } = window;




const MapContainer = ({ searchPlace }) => {

  // 검색결과 배열에 담아줌
  const [Places, setPlaces] = useState([])
  
  useEffect(() => {
    let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 })
    let markers = []
    const container = document.getElementById('myMap')
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    }
    const map = new kakao.maps.Map(container, options)
    const ps = new kakao.maps.services.Places()

    // HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function(position) {
      
      const lat = position.coords.latitude, // 위도
            lon = position.coords.longitude; // 경도
      
      const locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
          message = '<div style="padding:5px;">현 위치</div>'; // 인포윈도우에 표시될 내용입니다
      
      // 마커와 인포윈도우를 표시합니다
      displayMarker(locPosition, message);
    });

  
    } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
  
      const locPosition = new kakao.maps.LatLng(33.450701, 126.570667),    
            message = 'geolocation을 사용할수 없어요..'
      
      displayMarker(locPosition, message);
    }

    // 지도에 마커와 인포윈도우를 표시하는 함수입니다
    function displayMarker(locPosition, message) {
      // 마커를 생성합니다
      const marker = new kakao.maps.Marker({  
        map: map, 
        position: locPosition
      }); 
  
      const iwContent = message, // 인포윈도우에 표시할 내용
            iwRemoveable = true;

      // 인포윈도우를 생성합니다
      const infowindow = new kakao.maps.InfoWindow({
        content : iwContent,
        removable : iwRemoveable
      });
  
      // 인포윈도우를 마커위에 표시합니다 
      infowindow.open(map, marker);
  
      // 지도 중심좌표를 접속위치로 변경합니다
      map.setCenter(locPosition);      

      ps.keywordSearch(searchPlace, placesSearchCB)

      function placesSearchCB(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
          let bounds = new kakao.maps.LatLngBounds()

          for (let i = 0; i < data.length; i++) {
            displayMarker(data[i])
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
          }

          map.setBounds(bounds)
          // 페이지 목록 보여주는 displayPagination() 추가
          displayPagination(pagination)
          setPlaces(data)
        }
      }

      // 검색결과 목록 하단에 페이지 번호 표시
      function displayPagination(pagination) {
        let paginationEl = document.getElementById('pagination'),
            fragment = document.createDocumentFragment(),i

        // 기존에 추가된 페이지 번호 삭제
        while (paginationEl.hasChildNodes()) {
          paginationEl.removeChild(paginationEl.lastChild)
        }

        for (i = 1; i <= pagination.last; i++) {
          const el = document.createElement('a')
          el.href = '#'
          el.innerHTML = i

          if (i === pagination.current) {
            el.className = 'on'
          } else {
            el.onclick = (function (i) {
              return function () {
                pagination.gotoPage(i)
              }
            })(i)
          }

          fragment.appendChild(el)
        }
        paginationEl.appendChild(fragment)
      }

    function displayMarker(place) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      })

      kakao.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent('<div style="padding:5px; font-size:16px;">' + place.place_name + '</div>')
        infowindow.open(map, marker)
      })
    }    
  }
}, [searchPlace])

  return (
    <MapWrapper>
      <div
        id="myMap"
        style={{
          width: '700px',
          height: '500px',
        }}
      ></div>
      <div id="result-list">
        {Places.map((item, i) => (
          <div key={i} style={{ marginTop: '30px' }}>
            <span>{i + 1}</span>
            <div>
              <h5>{item.place_name}</h5>
              {item.road_address_name ? (
                <div>
                  <span>{item.road_address_name}</span>
                  <span>{item.address_name}</span>
                </div>
              ) : (
                <span>{item.address_name}</span>
              )}
              <span>{item.phone}</span>
            </div>
          </div>
        ))}
        <br />
        <div id="pagination"></div>
      </div>
    </MapWrapper>
  );
}
export default MapContainer;