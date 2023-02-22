import React from 'react';
import styled from "styled-components";
import HorizonLine from "../components/horizonLine";
import LocalButton from "../components/localButton";

const LocalExhibitionWrapper = styled.div`
.inner {
    max-width: 1200px;
    margin: 0 auto;
  }
  h4 {
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
        <LocalButton />
        <LocalButton />
        <LocalButton />
        <LocalButton />
        <LocalButton />
      </div>
      
      </div>
    </LocalExhibitionWrapper>
    
  );
}

export default localExhibition;