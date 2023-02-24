import React from 'react';
import styled from "styled-components";
import HorizonLine from '../main(main01)/HorizonLine';

const CalendarPageWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  height: 600px;
  background-color: yellow;

  h4 {
    padding-top: 10vh;
    font-size: 1.2rem;
    color: #000;
    font-weight: 600;
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: #656565;
  }
`;


const CalendarPageCenter = styled.div`
  display: flex;
  
`;




function CalendarPage(props) {
  return (
    <CalendarPageWrapper>
      <h4>Exhibition Calendar</h4>
      <HorizonLine />
      <CalendarPageCenter>
        <div></div>
        <div></div>
      </CalendarPageCenter>
    </CalendarPageWrapper>
  );
}

export default CalendarPage;