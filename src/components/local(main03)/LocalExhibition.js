import React from 'react';
import styled from "styled-components";
import HorizonLine from "../main(main01)/HorizonLine";
import LocalButton from "./LocalButton";

const LocalExhibitionWrapper = styled.div`
.inner {
    max-width: 1200px;
    margin: 0 auto;
  }
  h4 {
    padding-top: 10vh;
    font-size: 1.2rem;
    color: #000;
    font-weight: 600;
  }
  .buttonComponents {
    display: flex;
    justify-content: space-around;
    padding: 5vh;
    /* gap: 9vh; */
  }
`;

function localExhibition(props) {
  return (
    <LocalExhibitionWrapper>
      <div className='inner'>
      <h4>National Exhibition</h4>
      <HorizonLine />
      <div className='buttonComponents'>
        <LocalButton name="서울"/>
        <LocalButton name="인천"/>
        <LocalButton name="경기 북부"/>
        <LocalButton name="경기 남부"/>
        <LocalButton name="기타"/>
      </div>
      
      </div>
    </LocalExhibitionWrapper>
    
  );
}

export default localExhibition;