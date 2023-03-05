import React, { useState } from 'react';
import styled from 'styled-components';

const CalenderWrap = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  .header{
    display: flex;
    gap: 20px;
    font-size: 20px;
    justify-content: center;
    color: #333;
    padding: 10px 0;
    button{
      color: #333;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      background: none;
      font-size: 25px;
      padding: 0;
    }
    .month-year{
      display: flex;
      align-items: center;
    }
  }
  .days-of-week{
    display: flex;
    gap: 10px;
    background: #f6f6f6;
    justify-content: space-between;
    padding: 10px;
    font-size: 18px;
    color: #333;
  }
  
  .days-of-month{
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    font-size: 18px;
    gap: 10px;
    /* background: wheat; */
    justify-content: space-between;
    height: 100%;
    div{
      cursor: pointer;
      font-weight: bold;
      font-size: 20px;
    }
    .day{
      /* background: red; */
      padding: 10px;
    }
  }
  .selected-date{
    display: flex;
    background: #ec7d2c;
    color: white;
    gap: 10px;
    justify-content: center;
    padding: 20px;
    font-weight: bold;
    cursor: pointer;
  }
`;

const MiniCalendar = () => {

  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const monthsOfYear = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];


  const prevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const renderDaysOfMonth = () => {
    const days = [];
    const daysInMonthCount = daysInMonth(date.getMonth(), date.getFullYear());
    const firstDay = firstDayOfMonth(date.getMonth(), date.getFullYear());

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={i}></div>);
    }

    for (let i = 1; i <= daysInMonthCount; i++) {
      const day = new Date(date.getFullYear(), date.getMonth(), i);
      const isToday = day.toDateString() === new Date().toDateString();
      const isSelected = selectedDate && day.toDateString() === selectedDate.toDateString();
      const className = `day ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''}`;

      days.push(
        <div
          key={i + firstDay}
          className={className}
          onClick={() => setSelectedDate(day)}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <CalenderWrap>
      <div className="header">
        <button onClick={prevMonth}>{'<'}</button>
        <div className="month-year">
          {date.getFullYear()}년 {monthsOfYear[date.getMonth()]}
        </div>
        <button onClick={nextMonth}>{'>'}</button>
      </div>
      <div className="days-of-week">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="day-of-week">{day}</div>
        ))}
      </div>
      <div className="days-of-month">
        {renderDaysOfMonth()}
      </div>
      <div className="selected-date">
        {selectedDate ? `${selectedDate.toDateString()} 선택 완료` : '관람 날짜를 선택해주세요.'}
      </div>
    </CalenderWrap>
  );
};

export default MiniCalendar;