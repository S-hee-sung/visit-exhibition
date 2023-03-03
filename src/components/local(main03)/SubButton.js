import React from 'react';
import { useNavigate } from 'react-router';
import styled from "styled-components";
import data from "../../data.json";

const SubButtonWrapper = styled.div`
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
function SubButton(props) {

  const navigate = useNavigate()

  return (
    <SubButtonWrapper>
      <div className='buttons'>
        <button>상세보기</button>
        <button onClick={() => navigate(`/reservation/${data[0].id}`)}>바로예약</button>
      </div>
    </SubButtonWrapper>
  )

}

export default SubButton;

// /${data[0].id}`

// const SubButton = (props) => {

//   const navigate = useNavigate()

//   return (
//     <SubButtonWrapper>
//       <div className='buttons'>
//         <button onClick={slideList}>상세보기</button>
//         <button onClick={() => navigate(`/reservation/${data[0].id}`)}>바로예약</button>
//       </div>


//     </SubButtonWrapper>
//   )
// }