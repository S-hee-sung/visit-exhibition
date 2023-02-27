import React from 'react';
import styled from "styled-components";


const SubButtonWrapper=styled.div`
  .buttons {
    display: flex;
  }
  button {
    cursor: pointer;
    box-sizing: border-box;
    margin: 0 auto;
    margin-top: 20px;
    width: 120px;
    height: 30px;
    border: 1px solid #656565;
    background-color: #fff;
    border-radius: 8px;
  }
  button:hover {
    border: 1px solid dodgerblue;
    color: dodgerblue;
  }
`;

const SubButton = (props) => {
  const { onClick } = props;

  return (
    <SubButtonWrapper>
      <div className='buttons'>
        <button onClick={onClick}>상세보기</button>
        <button onClick={onClick}>바로예약</button>
      </div>
      
    </SubButtonWrapper>
  )
}


export default SubButton;