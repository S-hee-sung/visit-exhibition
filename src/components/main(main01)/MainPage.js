import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import Youtube from "./Youtube";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArrowForwardIos } from '@mui/icons-material';


const MainWrapper = styled.div`
  background: url(https://weaverloft.com/common/img/main/new/main.png) no-repeat;
  width: 100%;
  height: 100%;
  background-size: 100%;
  background-position: bottom;
  padding-bottom: 30px;
.inner {
  max-width: 1200px;
  margin: 0 auto;
  padding-top:200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .textContainer{
    display: flex;
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    padding-bottom: 10px;
  }
}
  .maintext {
    width: 600px;
    color: #656565;
    font-size: 1.0rem;
  }
  .imagecontainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .youbuteWrap {
      position: relative;
      .youtubeCover {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
      }
    }
  }
  .buttonArea{
    display: flex;
    justify-content: center;
    gap: 10px;
    .calendarButtonLeft {
      padding: 20px 10px;
      text-align: center;
      width: 320px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
    cursor: pointer;
      font-weight: bold;
      font-size: 16px;
      background: white;
      color: black;
      transition: 0.3s ease-in-out;
      white-space: nowrap;
      &:hover{
        background: black;
        color: white;
      }
    }
  }
`;

function MainPage(props) {
  const navigate = useNavigate();
  return (
    <MainWrapper>
      <div className="inner">
        <div className='textContainer'>
          <h4>visit exhibihion.</h4>
        </div>
        <div className='imagecontainer'>
          <div className='youbuteWrap'>
            <Youtube />
            <div className='youtubeCover' />
          </div>
          <img src='https://cdn.pixabay.com/photo/2019/05/31/13/35/art-gallery-4242219_1280.jpg' alt="main_image" style={{ width: '550px', height: '360px' }} />
        </div>
        <div className='buttonArea'>
          <div
            className="calendarButtonLeft"
            onClick={() => navigate('/cal')}
          >
            전체 전시 일정 확인하기<br />
            <ArrowForwardIos />
          </div>
        </div>
      </div>
    </MainWrapper>
  );
}

export default MainPage;