import React from 'react';
import styled from 'styled-components';
import { Search, Person, AddShoppingCart } from '@mui/icons-material';
import { useState, useEffect } from 'react';

import { useNavigate } from "react-router-dom";



const UtilityMenuArea = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    position: relative;
      ul {
        display: flex;
        width: 100%;
        justify-content: space-between;
        cursor: pointer;
        li {
          padding-left: 10px;
          opacity: 70%;
        }
      }
`;

const UtilityTopMenuArea = styled.div`
  position: absolute;
  white-space: nowrap;
  top: 10px;
  right: 0;
  font-weight: bold;
  font-size: 15px;
`;


function UtilityMenu(props) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  useEffect(() => {
    window.addEventListener("scroll", updateScroll)
  }, []);

  return (
    <UtilityMenuArea>
      <ul>
        <li>
          <Search sx={{ fontSize: 35, color: 'black' }}>
          </Search>
        </li>
        <li onClick={() => navigate('/login')}>
          <Person sx={{ fontSize: 35, color: 'black' }} >
          </Person>
        </li>
        <li onClick={() => navigate('/cart')}>
          <AddShoppingCart sx={{ fontSize: 32, color: 'black' }}>
          </AddShoppingCart>
        </li>
      </ul>
      <UtilityTopMenuArea>
        <ul>
          <li onClick={() => navigate('/login')}>
            {isLoggedIn ? '로그아웃' : '로그인'}
          </li>
          <li onClick={() => navigate('/signup')}>
            회원가입
          </li>
          <li onClick={() => { window.open("http://localhost:3000/chat", "Popup", "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=400, height=400, top=800, left=1700") }}>
            고객센터
          </li>
        </ul>
      </UtilityTopMenuArea>
    </UtilityMenuArea>
  );
}

export default UtilityMenu;