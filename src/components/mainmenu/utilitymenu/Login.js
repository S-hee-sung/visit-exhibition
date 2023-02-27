
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import KakaoLogin from './KakaoLogin';


const LoginWrapper = styled.div`
padding: 140px 0;
width: 100%;
.inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  .titleWrap {
    font-size: 32px;
    font-weight: bold;
    padding: 100px;
  }
  .memberWrap {
    display: flex;
    button {
      width: 274px;
      height: 50px;
      padding: 0;
      border: none;
      font-weight: 600;
      &:first-child{
        background: white;
        cursor: pointer;
      }
      &:last-child{
        background: #f0f0f0;
      }
    }
  } 
  .contentWrap {
    margin-top: 20px;
    width: 550px;
    .inputWrap {
      display: flex;
      padding: 16px;
      background: white;
      border-bottom: 1px solid #dadada;
      .input {
        width: 100%;
        outline: none;
        border: none;
        height: 20px;
        font-size: 18px;
        font-weight: 400;
        &::placeholder{
          color: #dadada;
        }
      }
    }
    .errorMessageWrap{
      margin:10px 0;
      color: #ef0000;
      font-size: 12px;
    }
    .chekboxWrap{
      display: flex;
      margin-bottom: 10px;
      gap: 5px;
      font-size: 12px;
      input{
        margin: 0;
        width: 12px;
        height: 12px;
      }
    }
    .bottomButton{
      width: 100%;
      padding: 0;
      height: 40px;
      border: none;
      font-weight: bold;
      background-color: black;
      color: white;
      font-size: 20px;
      padding: 10px 0;
      cursor: pointer;
      &:disabled{
        background-color: #dadada;
        color: white;
      }
    }
    .joinFindWrap{
      height: 30px;
      margin: 0 auto;
      ul{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        cursor: pointer;
        font-size: 12px;
        color: #666;
        margin: 10px 0;
        gap: 10px;
      }
    }
    .socialWrap{
      width: 100%;
      display: flex;
      flex-direction: column;
      button{
        height: 50px;
        font-weight: bold;
        font-size: 16px;
        &:first-child{
          margin:8px 0;
        }
      }
    }
  }
}
`;

const User = {
  id: 'kws04181@naver.com',
  pw: 'react1818@'
}

function Login(props) {

  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const [idValid, setIdValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true)

  const handleId = (e) => {
    setId(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setIdValid(true);
    } else {
      setIdValid(false);
    }
  };
  const handlePw = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const onClickConfirm = () => {
    if (id === User.id && pw === User.pw) {
      alert('로그인에 성공했습니다.');
      navigate("/")
    } else {
      alert('등록되지 않는 회원입니다.')
    }
  }

  useEffect(() => {
    if (idValid && pwValid) {
      setNotAllow(false);
      return
    }
    setNotAllow(true);
  }, [idValid, pwValid]);



  return (
    <LoginWrapper>
      <div className='inner'>
      
        <div className='titleWrap'>
          로그인
        </div>

        <div className='memberWrap'>
          <button onClick={() => navigate('/login')} className='userLogin'>회원 로그인</button>
          <button disabled className='noUser'>비회원 주문조회</button>
        </div>

        <div className='contentWrap'>
          <div className='inputWrap'>
            <input
              type='text'
              className='input'
              placeholder='이메일 입력'
              value={id}
              onChange={handleId}
            />
          </div>

          <div className='errorMessageWrap'>
            {
              !idValid && id.length > 0 && (
                <div>올바른 이메일을 입력해주세요.</div>
              )
            }
          </div>

          <div className='inputWrap' style={{ marginBottom: '12px' }}>
            <input
              type='password'
              className='input'
              placeholder='비밀번호 입력'
              value={pw}
              onChange={handlePw}
            />
          </div>

          <div className='errorMessageWrap'>
            {
              !pwValid && pw.length > 0 && (
                <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
              )
            }
          </div>

          <div className='chekboxWrap'>
            <input type="checkbox">
            </input>
            <p>로그인 상태 유지</p>
            <input type="checkbox">
            </input>
            <p>아이디 저장</p>
          </div>

          <div >
            <button
              className='bottomButton'
              disabled={notAllow}
              onClick={onClickConfirm}
            >
              로그인
            </button>
          </div>

          <div className='joinFindWrap'>
            <ul>
              <li>
                회원가입
              </li>
              <li>
                |
              </li>
              <li>
                아이디 찾기
              </li>
              <li>
                |
              </li>
              <li>
                비밀번호 찾기
              </li>
            </ul>
          </div>

          <div className='socialWrap'>
            <KakaoLogin />
          </div>

        </div>
      </div>

    </LoginWrapper>
  );
}

export default Login;
