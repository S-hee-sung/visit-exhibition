import React, { useState } from 'react';
import styled from 'styled-components';
import ReactDatePicker from 'react-datepicker';

const MyDatePicker = styled(ReactDatePicker)`
background: blue;
width: 100%;
height: 100%;
  .react-datepicker{
    background: blue;
    display: flex;
  }

`;


function DateCalender(props) {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div>
      <MyDatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
      />
    </div>
  );
}

export default DateCalender;

