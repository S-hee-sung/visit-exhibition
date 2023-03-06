import React from 'react';
import styled from 'styled-components';
import TitelLine from './TitelLine';
import data from '../../data.json';
import { fontWeight } from '@mui/system';
import InfoProduct from './InfoProduct';

const ReservationWrap = styled.div`
  width: 100%;
  padding-top: 140px;
  padding-bottom: 20px;
  height: 100%;
  .inner {
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
  }
`;

const contents = [
  {
    imageSrc: "./images/slide01-1.jpg",
    content: "슬픔은 파도처럼 밀려와",
    location: "[drawingRoom]",
    address: "서울 종로구 자하문로7길 68-4 2층",
    price: "12,000"
  },
  {
    imageSrc: "./images/slide01-2.jpg",
    content: "NEW WAVE",
    location: "[스페이스 사직]",
    address: "서울 종로구 경희궁3가길 8-4",
    price: "10,000"
  },
  {
    imageSrc: "./images/slide01-3.jpg",
    content: "이현정초대전",
    location: "[정문규 미술관]",
    address: "서울 종로구 성균관로5길 55-3",
    price: "11,000"
  },
  {
    imageSrc: "./images/slide01-4.jpg",
    content: "최민솔개인전",
    location: "[갤러리 도스]",
    address: "서울 종로구 삼청로7길 37 갤러리도스",
    price: "14,000"
  },
];


function Reservation() {

  return (
    <ReservationWrap>
      <div className='inner'>
        <TitelLine />

        <InfoProduct contents={contents} />

      </div >
    </ReservationWrap >
  );
}

export default Reservation;