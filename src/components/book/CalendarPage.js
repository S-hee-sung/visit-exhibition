import React from 'react';
import styled from "styled-components";
import HorizonLine from '../main(main01)/HorizonLine';
import Calendar  from "./Calendar";
import CalendarSwiper from './CalendarSwiper';

const CalendarPageWrapper = styled.div`
  max-width: 1800px;
  margin: 0 auto;
  height: 800px;
  /* background-color: #ccc; */

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
  justify-content: space-around;
  
  .left {
    width: 60%;
    margin-top:20px;
  }
  /* .right {
    width: 40%
  } */
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