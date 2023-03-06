import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import mainImage03 from "./mainImage03.png";
import Youtube from "./Youtube";

const MainWrapper = styled.div`
    background: url(https://weaverloft.com/common/img/main/new/main.png) no-repeat fixed;
    width: 100%;
    height: 100%;
    padding-bottom: 50px;
    background-size: 100%;
.inner {
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 140px;
  }
  h4 {
    padding-top: 100px;
    font-size: 1.2rem;
    /* color: #fff; */
    font-weight: 600;
    padding-bottom: 10px;
  }
  .maintext {
    width: 600px;
    color: #656565;
    font-size: 1.0rem;
  }
  .imagecontainer {
    display: flex;
    flex-direction: row;
    gap: 10px;
    .youbuteWrap{
      position: relative;
      .youtubeCover{
        position: absolute;
        width: 100%;
        height: 100%;
        /* background: black; */
        top: 0;
      }
    }
  }
  img {
    height: 360px;
    width: 540px;
    overflow: hidden;
  }
  .calendarButton {
    border: 1px solid #fff;
    background-color: #fff;
    color: #8d8d8d;
    font-size: 0.8rem;
    border-top: 2px solid #C8C8C8;;
    border-bottom: 2px solid #C8C8C8;
    line-height: 1.5rem;
    padding-top: 14px;
    /* position: absolute; */
    /* right: 0; */
    cursor: pointer;
    white-space: nowrap;
  }
  `;

function MainPage(props) {
  const navigate = useNavigate();

  return (
    <MainWrapper>
      <div className="inner">
        <h4>visit exhibihion.</h4>
        {/* <p className="maintext">Lorem ipsum dolor sit amet,</p> */}
        <div className='imagecontainer'>
          <div className='youbuteWrap'>
            <Youtube style={{ width: '1200px', height: '720px' }} />
            <div className='youtubeCover' />
          </div>
          <img src='https://cdn.pixabay.com/photo/2019/05/31/13/35/art-gallery-4242219_1280.jpg' alt="main_image" />
          <button className="calendarButton" onClick={() => navigate('/cal')}>전시 일정 확인하기<br /><br />&gt;</button>
        </div>
      </div>
    </MainWrapper>


  );
}

export default MainPage;