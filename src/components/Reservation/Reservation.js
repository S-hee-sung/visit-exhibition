import React from 'react';
import styled from 'styled-components';
import TitelLine from './TitelLine';
import data from '../../data.json';
import { fontWeight } from '@mui/system';
import InfoProduct from './InfoProduct';

const ReservationWrap = styled.div`
  width: 100%;
  padding-top: 140px;
  .inner {
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
  }
`;

const ContentWrap = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  overflow: hidden;
  gap: 50px;
  padding-bottom: 20px;
  .imageArea{
    flex: 3;
    background: yellow;
    padding: 20px;
  }
`;

const contents = [
  {
    imageSrc: "https://www.drawingroom.kr/exhibition/current",
    content: "슬픔은 파도처럼 밀려와",
    location: "[drawingRoom]",
    address: "서울 종로구 자하문로7길 68-4 2층"
  },
  {
    imageSrc: "./images/slide01-2.jpg",
    content: "NEW WAVE",
    location: "[스페이스 사직]",
    address: "서울 종로구 경희궁3가길 8-4"
  },
  {
    imageSrc: "./images/slide01-3.jpg",
    content: "이현정초대전",
    location: "[정문규 미술관]",
    address: "서울 종로구 성균관로5길 55-3"
  },
  {
    imageSrc: "./images/slide01-4.jpg",
    content: "최민솔개인전",
    location: "[갤러리 도스]",
    address: "서울 종로구 삼청로7길 37 갤러리도스"
  },
];


function Reservation() {

  return (
    <ReservationWrap>
      <div className='inner'>
        <TitelLine />
        <ContentWrap>
          <div className='imageArea'>
            {/* {data.map((img)=>{
              return <img src={img.src} key={img.id} alt={img.name}/>
            })} */}
            <img src={data[1].src} width='100%' />
          </div>
          <InfoProduct testname="김성원" contents={contents}/>
        </ContentWrap>

      </div >
    </ReservationWrap >
  );
}

export default Reservation;