import React from 'react';
import styled from "styled-components";

const ButtonTodoWrapper = styled.div`

.btn-outline {
  padding: 15px 30px;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  font-weight: 600;
  transition: 0.25s;
  cursor: pointer;
}

.w-btn-outline:active {
    transform: scale(1.5);
}

.btn-skin-outline {
  border: 3px solid #f8e6e0;
  color: #6e6e6e;
}

.btn-skin-outline:hover {
    background-color: #f8e6e0;
    color: #6e6e6e;
}


`;

function ButtonTodo(props) {

  return (
    <ButtonTodoWrapper>
      <button className='btn-outline btn-skin-outline'>
        일정 보러가기
      </button>
    </ButtonTodoWrapper>
  );
}

export default ButtonTodo;