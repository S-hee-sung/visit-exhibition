import React from 'react';
import { KAKAO_AUTH_URL } from './KaKao_auth_url';
import styled from 'styled-components';

const KakaoBtn = styled.a`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  font-size: 18px;
  background: #fee500;
  margin-top: 15px;
  ul{
    display: flex;
    gap: 10px;
    font-weight: bold;

  }
`;

function KakaoLogin(props) {

  return (
    <>
      <KakaoBtn href={KAKAO_AUTH_URL}>
        <div>
          <ul>
            <li>
              <img src='https://image.nbkorea.com/NBRB_PC/common/icon_kakao.jpg'/>
            </li>
            <li>
              카카오톡 로그인
            </li>
          </ul>
        </div>
      </KakaoBtn>
    </>
  );
}

export default KakaoLogin;
