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

function NaverLogin({ setGetToken, setUserInfo }) {

  const { naver } = window
  const NAVER_CLIENT_ID = 'YrwSEQ1V45KSMRgkt6mS';
  const NAVER_CALLBACK_URL = 'http://localhost:3000'

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: 'YrwSEQ1V45KSMRgkt6mS',
      callbackUrl: 'http://localhost:3000',
      isPopup: false,
      loginButton: { color: 'green', type: 4, height: 50 },
      callbackHandle: true,
    })
    naverLogin.init()

    naverLogin.getLoginStatus(async function (status) {
      if (status) {

        const userid = naverLogin.user.getEmail();
        const username = naverLogin.user.getName();
      }
    })
  }

  const userAccessToken = () => {
    window.location.href.includes('access_token') && getToken()
  }

  const getToken = () => {
    const token = window.location.href.split('=')[1].split('&')[0]
  }

  // 화면 첫 렌더링이후 바로 실행하기 위해 useEffect 를 사용하였다.
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
              <img src='https://image.nbkorea.com/NBRB_PC/common/icon_kakao.jpg' />
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