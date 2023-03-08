import React from 'react';
import styled from 'styled-components';
import { Search, Person, Place, AddShoppingCart } from '@mui/icons-material';
import { useState, useEffect } from 'react';

import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { Nav } from 'react-bootstrap';


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
// const windowFeatures = "left=100,top=100,width=320,height=320";
//   const handleOpen = window.open(
//     "http://localhost:3000/chat",
//     "mozillaWindow",
//     windowFeatures
//   );

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
            {/* <a href='http://localhost:3000/chat' target='_blank' rel='noreferrer'>고객센터</a> */}
          </li>
        </ul>
      </UtilityTopMenuArea>
    </UtilityMenuArea>
  );
}

export default UtilityMenu;