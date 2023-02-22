import React from 'react';
import styled from "styled-components";

const ButtonWrapper = styled.div`
  button {
    cursor: pointer;
    width: 140px;
    height: 40px;
    border: 1px solid #656565;
    background-color: #fff;
    color: #000;
    border-radius: 16px;
  }
`;

const localButton = (props) => {
  const { children, onClick } = props;

  return (
    <ButtonWrapper>
      <button onClick={onClick}>Seoul</button>
    </ButtonWrapper>
    
  )
}

export default localButton;