import React, { useCallback } from 'react';
import styled from 'styled-components';
import backgroundImg from '../images/logo-no-background.png';
import backgroundWhiteImg from '../images/logo-white.png';
import MainNavbar from '../components/mainmenu/MainNavbar';
import UtilityMenu from '../components/mainmenu/utilitymenu/UtilityMenu';
import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';



const HeaderContainer = styled.header`
  width: 100%;
  /* position: fixed; */
  height: 140px;
  margin: 0 auto;
  position: fixed;
  background: white;
  z-index: 999;

  .original_header {
    width: 100%;
    height: 140px;
    margin: 0 auto;
    position: fixed;
    background: white;
    z-index: 999;
  }

  .change_header {
    width: 100%;
    height: 140px;
    margin: 0 auto;
    position: fixed;
    z-index: 999;
  }
  
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
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  useEffect(() => {
    window.addEventListener("scroll", updateScroll)
  }, []);

  return (
    <>
      <HeaderContainer >
        <div className={scrollPosition < 60 ? "original_header" : "change_header"}>
          <div className='header_inner'>
            <div className='header_Area' onClick={() => navigate('/')}>
              <img src={backgroundImg} />
            </div>
            {/* <div className='mainMenu_Area'>
          </div> */}
            <MainNavbar />
            <UtilityMenu />
          </div>
        </div>
      </HeaderContainer>
    </>
  );
}

export default Header;

