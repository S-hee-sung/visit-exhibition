import React from 'react';
import styled from 'styled-components';
import backgroundImg from '../images/logo-no-background.png';
import MainNavbar from '../components/mainmenu/MainNavbar';
import UtilityMenu from '../components/mainmenu/utilitymenu/UtilityMenu';

const HeaderContainer = styled.header`
  width: 100%;
  /* position: fixed; */
  height: 140px;
  margin: 0 auto;
  
  .header_inner {
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
    font-family: 'Noto Sans';
    display: flex;
    justify-content: space-between;

    .header_Area {
      justify-content: center;
      align-items: center;
      display: flex;
      cursor: pointer;
        img {
          width: 154px;
        }
    }
  }
`;


function Header() {

  return (
    <>
      <HeaderContainer>
        <div className='header_inner'>
          <div className='header_Area'>
            <img src={backgroundImg} />
          </div>
          {/* <div className='mainMenu_Area'>
          </div> */}
          <MainNavbar />
          <UtilityMenu />
        </div>
      </HeaderContainer>
    </>
  );
}

export default Header;

