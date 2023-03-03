import React from 'react';
import styled from 'styled-components';
import MiniCalendar from './MiniCalender';

const InfoArea = styled.div`
    flex: 6;
    background: white;
    display: flex;
    flex-direction: column;
    /* background: #f6f6f6; */
    .infoProductArea1{
      height: 100%;
      display: flex;
      gap: 30px;
      white-space: nowrap;
      ul{
        display: flex;
        flex-direction: column;
        font-weight: bold;
        font-size: 18px;
        li{
          margin: 20px 0;
          &li:last-child{
            margin: 0;
          }
        }
        .focus{
          font-weight: bold;
          color: #ed4037;
        }
      }
      .calChoice{
        width: 100%;
        margin-left: 80px;
      }
    }
`;


function InfoProduct(props) {
  return (
    <InfoArea>
      <div className='infoProductArea1'>
        <ul>
          <li>등급</li>
          <li>관람시간</li>
          <li>작가</li>
          <li>가격</li>
        </ul>
        <ul style={{ fontWeight: "500", color: "#333" }}>
          <li>전체이용가능</li>
          <li>총 예상60분</li>
          <li>김효선</li>
          <li>입장 <span className='focus'>12,000</span>원</li>
        </ul>
        <div className='calChoice'>
          <ul>
            <li>관람 날짜 선택</li>
          </ul>
          <MiniCalendar />
          {/* <DateCalender /> */}
        </div>
      </div>
    </InfoArea>
  );
}

export default InfoProduct;