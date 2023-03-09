import { useEffect } from "react";
import styled from "styled-components";
import data from "./mapData.json";

const { kakao } = window;

const MapWrapper = styled.div`
	padding-top: 50px;

	.customoverlay {
		position: relative;
		bottom: 40px;
		border-radius: 6px;
		border: 1px solid #ccc;
		border-bottom: 2px solid #ddd;
		float: left;
	}
	.customoverlay:after {
		content: "";
		position: absolute;
		margin-left: -12px;
		left: 50%;
		bottom: -12px;
		width: 22px;
		height: 12px;
		background: url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png);
	}
	.customoverlay a {
		display: block;
		text-decoration: none;
		color: #000;
		text-align: center;
		border-radius: 6px;
		font-size: 14px;
		font-weight: bold;
		overflow: hidden;
		background: #000
			url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png)
			no-repeat right 14px center;
	}
	.customoverlay .title {
		display: block;
		text-align: center;
		background: #fff;
		margin-right: 35px;
		padding: 10px 15px;
		font-size: 14px;
		font-weight: bold;
	}
	.radius_border{border:1px solid #919191;border-radius:5px;}     
	.custom_zoomcontrol {
		position:absolute;
		top:50px;
		right:10px;
		width:36px;
		height:80px;overflow:hidden;z-index:1;background-color:#f5f5f5;} 
	.custom_zoomcontrol span {display:block;width:36px;height:40px;text-align:center;cursor:pointer;}     
	.custom_zoomcontrol span img {width:15px;height:15px;padding:12px 0;border:none;}             
	.custom_zoomcontrol span:first-child{border-bottom:1px solid #bfbfbf;} 
`;

function Map(props) {
	// ref, state로 만들지 결정
	let markers = [];

	let db = {
		data: [
			{
				"desc": "<div style='padding:5px;'>슬픔은 파도처럼 밀려와</div>",
				"positions": [37.58032083332333, 126.96925189327204]
			},
			{
				"desc": "<div style='padding:5px;'>NEW WAVE</div>",
				"positions": [37.573310499406084, 126.96703604828245]
			},
			{
				"desc": "<div style='padding:5px;'>이현정초대전</div>",
				"positions": [37.58524414470307, 126.99473307753141]
			},
			{
				"desc": "<div style='padding:5px;'>최민솔개인전</div>",
				"positions": [37.58375769355032, 126.97977958632414]
			},
			{
				"desc": "<div style='padding:5px;'>그해 겨울은 따뜻했네</div>",
				"positions": [37.57419344559273, 126.98442797120563]
			},
			{
				"desc": "<div style='padding:5px;'>김종영미술관</div>",
				"positions": [37.613035887615645, 126.97750645009633]
			},
			{
				"desc": "<div style='padding:5px;'>그 겨울의 행복</div>",
				"positions": [37.581663624613455, 126.97886539140995]
			},
			{
				"desc": "<div style='padding:5px;'>The Anonnymous project</div>",
				"positions": [37.57783498645025, 126.9729117732011]
			},
			{
				"desc": "<div style='padding:5px;'>The Anonnymous project</div>",
				"positions": [37.510623559451346, 127.04121569700396]
			},
			{
				"desc": "<div style='padding:5px;'>Tube Seoul</div>",
				"positions": [37.52437717172216, 127.03916888666346]
			},
			{
				"desc": "<div style='padding:5px;'>COLOR IN LIFE</div>",
				"positions": [37.507587841577454, 127.06057692858644]
			},
			{
				"desc": "<div style='padding:5px;'>Touchable moments</div>",
				"positions": [37.48377567696113, 127.0452939029222]
			},
			{
				"desc": "<div style='padding:5px;'>데미안</div>",
				"positions": [37.52437717172216, 127.03916888666346]
			},
			{
				"desc": "<div style='padding:5px;'>조우 : Encounter</div>",
				"positions": [37.52751117108263, 127.04342425587278]
			},
			{
				"desc": "<div style='padding:5px;'>유행이 끝나면 깨워주세요</div>",
				"positions": [37.47202795110733, 126.63431019048306]
			},
			{
				"desc": "<div style='padding:5px;'>vita nova new life</div>",
				"positions": [37.47277758253201, 126.62059155897465]
			},
			{
				"desc": "<div style='padding:5px;'>Alice in Wonderyarn</div>",
				"positions": [37.376705478951344, 126.66765104944392]
			},
			{
				"desc": "<div style='padding:5px;'>Dear future me 展</div>",
				"positions": [37.4424979178226, 126.70150964902709]
			},
			{
				"desc": "<div style='padding:5px;'>놀이터를 부탁해</div>",
				"positions": [37.39281226046901, 126.63588336442947]
			},
			{
				"desc": "<div style='padding:5px;'>봄 소품</div>",
				"positions": [37.35211107764467, 127.0688536240274]
			},
			{
				"desc": "<div style='padding:5px;'>경유지</div>",
				"positions": [37.78888895426441, 126.69939973444019]
			},
			{
				"desc": "<div style='padding:5px;'>백남준 효과</div>",
				"positions": [37.431001358981376, 127.0199261649026]
			},
			{
				"desc": "<div style='padding:5px;'>WE ARE COLLECTORS</div>",
				"positions": [37.20161759922587, 127.00608271822468]
			},
			{
				"desc": "<div style='padding:5px;'>어둠 속의 대화</div>",
				"positions": [37.20067263722487, 127.09791250708346]
			},
			{
				"desc": "<div style='padding:5px;'>harmgerdes : panorama</div>",
				"positions": [37.557273590173374, 127.00645103888694]
			},
			{
				"desc": "<div style='padding:5px;'>마리아 스바르보바 사진전</div>",
				"positions": [37.4802371334905, 127.0142093594949]
			},
			{
				"desc": "<div style='padding:5px;'>서울살이와 집</div>",
				"positions": [37.62017040601401, 127.07692939573413]
			},
			{
				"desc": "<div style='padding:5px;'>나탈리 카르푸셴코 사진전</div>",
				"positions": [37.54676450172011, 127.06527534383493]
			},
			{
				"desc": "<div style='padding:5px;'>눈물의 엔트로피</div>",
				"positions": [37.54575700585124, 127.05501323519256]
			}
		]
	};
	

	useEffect(() => {
		const mapContainer = document.getElementById('map'), // 지도를 표시할 div 
		mapOption = {
			center: new kakao.maps.LatLng(37.56682, 126.97865), // 지도의 중심좌표
			level: 9, // 지도의 확대 레벨
			mapTypeId : kakao.maps.MapTypeId.ROADMAP // 지도종류
		}; 

		// 지도를 생성한다 
		const map = new kakao.maps.Map(mapContainer, mapOption);

		// 마커 클러스터러를 생성합니다 
		const clusterer = new kakao.maps.MarkerClusterer({
			map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
			averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
		});

		// 지도에 마커와 인포윈도우(말풍선)를 표시하는 함수입니다
		function displayMarker(locPosition, message) {
			// 마커를 생성합니다
			const marker = new kakao.maps.Marker({  
				map: map, 
				position: locPosition
			}); 
			
			const iwContent = message, // 인포윈도우(말풍선)에 표시할 내용
						iwRemoveable = true;

			// 인포윈도우(말풍선)를 생성합니다
			const infowindow = new kakao.maps.InfoWindow({
					content : iwContent,
					removable : iwRemoveable
			});
			
			// 인포윈도우(말풍선)를 마커위에 표시합니다 
			infowindow.open(map, marker);
			
			// 지도 중심좌표를 접속위치로 변경합니다
			map.setCenter(locPosition);      
		}
		const geolocationT = () => {
			// geolocation true 기능 함수
			// GeoLocation을 이용해서 접속 위치를 얻어옵니다
			navigator.geolocation.getCurrentPosition((position) => {
				const {latitude, longitude} = position.coords
				const locPosition = new kakao.maps.LatLng(latitude, longitude), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
							message = '<div style="padding:5px;">현재 위치!!</div>'; // 인포윈도우(말풍선)에 표시될 내용입니다
					
				// 마커와 인포윈도우(말풍선)를 표시합니다
				displayMarker(locPosition, message);
			});
		};

		const geolocationF = () => {
			// geolocation false 인경우 기능 함수
			const locPosition = new kakao.maps.LatLng(33.450701, 126.570667),    
			message = 'geolocation을 사용할수 없어요..'

			displayMarker(locPosition, message);
		};

		const makeOverListener = (map, marker, infowindow) => {
			// 인포윈도우(말풍선)를 표시하는 클로저를 만드는 함수입니다
			return function() {
				infowindow.open(map, marker);
			};
		};

		const makeOutListener = (infowindow) => {
			// 인포윈도우(말풍선)를 닫는 클로저를 만드는 함수입니다 
			return function() {
				infowindow.close();
			};
		};
		
    const init = async() => {
			markers = new Array;
			// db = JSON.parse(await getData());
			db = data;
			// HTML5의 geolocSation으로 사용할 수 있는지 확인합니다 
			if (navigator.geolocation) {
				geolocationT();
			} else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우(말풍선) 내용을 설정합니다
				geolocationF();
			}
		}
		

		const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
		
		// data.json있는 데이터 불러와 뿌려준다. //
		db.data.forEach((item, i) => {
			const {desc, positions} = item;
			
			// 마커 이미지의 이미지 크기 입니다
      const imageSize = new kakao.maps.Size(24, 35);

      // 마커 이미지를 생성합니다
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

			// 지도에 마커를 생성하고 표시한다.
			const marker = new kakao.maps.Marker({
				position: new kakao.maps.LatLng(positions[0], positions[1]),
				map: map, //마커를 표시할 지도 객체
				image: markerImage, // 마커 이미지
			});

			// 인포윈도우(말풍선)를 생성합니다
			const infowindow = new kakao.maps.InfoWindow({
				content : desc
			});
			
			// 마커 위에 인포윈도우(말풍선)를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
			markers.push(marker);

			// 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
			// <a href="https://map.kakao.com/link/map/${desc},${positions[0]},${positions[1]}"" target="_blank">
      const temp_html = `<div class="customoverlay">
                        <a>
													<span class="title">${desc}</span>
                        </a>
												</div>`;

      // 커스텀 오버레이를 생성합니다
      new kakao.maps.CustomOverlay({
        map: map,
        position: new kakao.maps.LatLng(positions[0], positions[1]),
        content: temp_html,
        yAnchor: 1,
      });

			// 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
			// 이벤트 리스너로는 클로저를 만들어 등록합니다 
			// for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
			kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
			kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
		});
		// data.json있는 데이터 불러와 뿌려준다. //

		// 클러스터러에 마커들을 추가합니다
		clusterer.addMarkers(markers);
		init();
	}, []);


	return (  
		<MapWrapper>
			<div id="map" style={{ width: '100%', height: '500px' }}></div>
		</MapWrapper>
	);
}

export default Map;