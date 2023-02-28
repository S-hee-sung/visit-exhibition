import React from 'react';
import styled from "styled-components";
import HorizonLine from './HorizonLine2';
import Calendar  from "./Calendar";
import CalendarSwiper from './CalendarSwiper';

const CalendarPageWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;

  h4 {
    padding-top: 140px;
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
  justify-content: space-around;
  padding-top: 80px;
  padding-bottom: 100px;

  
  .left {
    width: 75%;
  }
  
`;




function CalendarPage(props) {
  return (
    <CalendarPageWrapper>
      <h4>Exhibition Calendar</h4>
      <HorizonLine />
      <CalendarPageCenter>
        <div className='left'>
          <Calendar />
        </div>
        <div className='right'>
          <CalendarSwiper />
        </div>
      </CalendarPageCenter>
    </CalendarPageWrapper>
  );
}

export default CalendarPage;