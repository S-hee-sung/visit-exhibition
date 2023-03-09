import React from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';

const NaverBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  font-size: 18px;
  ul{
    display: flex;
    gap: 10px;
    font-weight: bold;
  }
`;

function NaverLogin() {

  const { naver } = window


  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: 'YrwSEQ1V45KSMRgkt6mS',
      callbackUrl: 'http://localhost:3000',
      isPopup: false,
      loginButton: { color: 'green', type: 4, height: 50 },
      callbackHandle: true,
    })
    naverLogin.init()
  }

  const userAccessToken = () => {
    window.location.href.includes('access_token') && getToken()
  }

  const getToken = () => {
    const token = window.location.href.split('=')[1].split('&')[0]
  }

  useEffect(() => {
    initializeNaverLogin()
    userAccessToken()
  }, [])

  return (
    <>
      <NaverBtn>
        <div id='naverIdLogin'>
          <ul>
            <li>
              <img src='https://image.nbkorea.com/NBRB_PC/common/icon_kakao.jpg' alt='네이버 로그인 이미지' />
            </li>
            <li>
              네이버 로그인
            </li>
          </ul>
        </div>
      </NaverBtn>
    </>
  );
}

export default NaverLogin;