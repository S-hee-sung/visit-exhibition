import React from 'react';
import { useNavigate } from 'react-router';
import styled from "styled-components";

const SubButtonWrapper = styled.div`
  .buttons {
    display: flex;
  }
  button {
    cursor: pointer;
    box-sizing: border-box;
    margin: 0 auto;
    margin-top: 10px;
    width: 140px;
    height: 40px;
    border: 1px solid #C8C8C8;
    background-color: #fff;
    border-radius: 5px;
  }
  button:hover {
    border: 1px solid dodgerblue;
    color: dodgerblue;
  }
`;

function SubButton(props) {
  const navigate = useNavigate()
  return (
    <SubButtonWrapper>
      <div className='buttons'>
        <button onClick={() => navigate(`/reservation`)}>바로예약</button>
      </div>
    </SubButtonWrapper>
  )
};

export default SubButton;