import React from 'react';
import styled from "styled-components";

const DaysWrapper = styled.div`
  display: flex;
  justify-content: space-around; 
  align-items: center;

  color: black;
  padding: 2px;
  font-weight: 600;
  font-size: 16px;
  margin-top: 40px;

  .col {
    background-color: #ebcfc6;
    opacity: 0.6;
    border-radius: 10px;
  }
`;



function RenderDays(props) {
  const days = [];
  const date = ['Sun', 'Mon', 'Thu', 'Wed', 'Thrs', 'Fri', 'Sat'];

  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="col" key={i}>
        {date[i]}
      </div>,
    );
  }

  return (
    <DaysWrapper>
      {days}
    </DaysWrapper>
  );  
}

export default RenderDays;

