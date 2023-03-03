import React from 'react';
import styled from 'styled-components';

const TitleWrap = styled.div`
    h1{
      font-size: 1.2rem;
      font-weight: 600;
      color: #000;
      padding-top: 50px;
    }
    .dateWrap{
      display: flex;
      gap: 10px;
      li{
        font-size: 0.8rem;
        margin-top: 10px;
      }
    }
    .line{
      width: 100%;
      height: 2px;
      background: black;
      margin: 10px 0 20px 0;
    }
`;

function TitelLine(props) {
  return (
    <TitleWrap>
      <h1>Exhibition</h1>
      <ul className='dateWrap'>
        <li>2023.03.11 ~ 2023.03.12</li>
        <li>|</li>
        <li>서울 종로구 성균관로5길 55-3 </li>
      </ul>
      <div className='line'/>
    </TitleWrap>
  );
}

export default TitelLine;