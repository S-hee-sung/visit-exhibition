import React from 'react';
import { Icon } from '@iconify/react';
import { format } from 'date-fns';
import styled from "styled-components";


const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 40px;

  .col {
    display: flex;
    justify-content: center;
  }
  .textYear {
    font-size: 24px;
  }
  .textMonth {
    font-size: 32px;
    font-weight: 600;
  }
  .textIcon {
    font-size: 24px;
    padding-left: 20px;
    margin-top: 10px;

    &:hover {
      transform: scale(1.15);
      color: #686868;
    }
  }
`;


function RenderHeader(props) {
  const { prevMonth, nextMonth, currentMonth } = props;
  
  return (
    <HeaderWrapper>
      <div className="row">
        <div className="col col-start">
          <span className="textYear">
            <span className="textMonth">
              {format(currentMonth, 'M')}월
            </span>
            {format(currentMonth, 'yyyy')}
          </span>
          <div className='textIcon'>
            <Icon icon="bi:arrow-left-circle-fill" onClick={prevMonth} />
            <Icon icon="bi:arrow-right-circle-fill" onClick={nextMonth} />
          </div>
        </div>
      </div> 
    </HeaderWrapper>
  );
};


export default RenderHeader;