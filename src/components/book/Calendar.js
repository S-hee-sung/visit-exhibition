import { addMonths, subMonths } from 'date-fns';
import React, { useState } from 'react';
import styled from "styled-components";
import RenderCells from '../calendarComponents/RenderCells';
import RenderDays from '../calendarComponents/RenderDays';
import RenderHeader from '../calendarComponents/RenderHeader';

const CalendarWrapper = styled.div`
  width: 100%;
  height: 600px;
`;


function Calendar(props) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
  };

  const onDateClick = () => {
    setSelectedMonth();
  };

  return (
    <CalendarWrapper>
      <RenderHeader 
        currentMonth={currentMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <RenderDays />
      <RenderCells
        currentMonth={currentMonth}
        selectedMonth={selectedMonth}
        onDateClick={onDateClick}

      />
    </CalendarWrapper>
  );
}

export default Calendar;
