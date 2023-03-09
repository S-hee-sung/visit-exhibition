import React from 'react';

const { Kakao } = window;
const loginWithKakao = () => {
  Kakao.Auth.authorize({
    redirectUri: 'http://localhost:3000'
  })
}

const KakaoLogin = () => {
  return (
    <a id="custom-login-btn" onClick={loginWithKakao}>
      <img
        src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
        width="231" alt='카카오톡 로그인 이미지'
      />
    </a >
  );
};

export default KakaoLogin;