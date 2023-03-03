import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import mainImage03 from "./mainImage03.jpg";
import mainImage02 from "../../../public/images/mainImage02.jpg"
import Youtube from "./Youtube";

const MainWrapper = styled.div`
.inner {
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 140px;
  }
  h4 {
    padding-top: 160px;
    font-size: 1.2rem;
    color: #656565;
    font-weight: 600;
    padding-bottom: 10px;
  }
  .maintext {
    width: 600px;
    color: #656565;
    font-size: 1.0rem;
  }
  img {
    height: 409px;
    overflow: hidden;
  }
  .imagecontainer {
    display: flex;
    gap: 2vh;
    /* margin-top: 160px; */
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
  }
  `;

function MainPage(props) {
  const navigate = useNavigate();

  return (
    <MainWrapper>
      <div className="inner">
        <h4>Main text area</h4>
        {/* <p className="maintext">Lorem ipsum dolor sit amet,</p> */}
        <div className='imagecontainer'>
          {/* <img src={mainImage} alt="main_image"  /> */}
          <Youtube style={{ width: '1200px', height: '720px' }}/>
          {/* <img src={mainImage03} alt="main_image" onClick={() => navigate('/cal')} /> */}
          <img src={mainImage02} alt="main_image" />
          <button className="calendarButton" onClick={() => navigate('/cal')}>전시 일정 확인하기<br/><br/>&gt;</button>
        </div>
        
      </div>
    </MainWrapper>
      
      
  );
}

export default MainPage;