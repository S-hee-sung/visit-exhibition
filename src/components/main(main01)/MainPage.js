import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import mainImage from "./mainImage.png";
import mainImage03 from "./mainImage03.jpg";

const MainWrapper = styled.div`
.inner {
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 140px;
  }
  h4 {
    font-size: 1.2rem;
    color: #656565;
    font-weight: 600;
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
  }
  .subtext {
    color: #656565;
    font-size: 1.0rem;
    text-align: right;
  }
  `;

function MainPage(props) {
  const navigate = useNavigate();

  return (
    <MainWrapper>
      <div className="inner">
        <h4>Main text area</h4>
        <p className="maintext">Lorem ipsum dolor sit amet,</p>
        <div className='imagecontainer'>
          <img src={mainImage} alt="main_image"  />
          <img src={mainImage03} alt="main_image" onClick={() => navigate('/cal')} />
        </div>
        <p className="subtext">consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <br/>labore et dolore magna aliqua, Lorem ipsum dolor sit amet</p>
      </div>
    </MainWrapper>
      
      
  );
}

export default MainPage;