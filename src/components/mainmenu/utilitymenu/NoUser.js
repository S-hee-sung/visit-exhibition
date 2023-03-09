import React from 'react';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";



const LoginWrapper = styled.div`
padding-top: 140px;
width: 100%;
height: 1000px;
background: #f7f7f7;
.inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: coral;
  height: 100%;
  .titleWrap {
    font-size: 32px;
    font-weight: bold;
    padding: 100px;
    background: beige;
  }
  .memberWrap {
    display: flex;
    button {
      width: 274px;
      height: 50px;
      padding: 0;
    }
  } 
  .contentWrap {
    background: skyblue;
    width: 550px;
    .inputWrap {
      display: flex;
      border-radius: 12px;
      padding: 16px;
      background: white;
      border: 1px solid #e2e0c0;
      &:focus-within{
        border: 1px solid beige;
      }
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
      font-size: 14px;
    }
    .bottomButton{
      width: 100%;
      padding: 0;
      height: 40px;
      border: none;
      font-weight: bold;
      cursor: pointer;
      &:disabled{
        background-color: #dadada;
        color: white;
      }
    }
    .joinFindWrap{
      width: 300px;
      height: 30px;
      margin: 0 auto;
      ul{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        cursor: pointer;
        font-size: 12px;
        color: #dadada;
        margin: 10px 0;
        li {
          padding: 0 12px;
        }
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

const User  = {
  id: 'kws04181@naver.com',
  pw: 'react1818@'
}

function NoUser(props) {

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

  const onClickConfirm = () =>{
    if(id === User.id && pw === User.pw){
      alert('로그인에 성공했습니다.');
    } else{
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
          <button onClick={() => navigate('/login')}>회원 로그인</button>
          <button onClick={() => navigate('/nouser')}>비회원 주문조회</button>
        </div>
        <div className='contentWrap'>
          <div className='inputWrap'>
            <input
              type='text'
              className='input'
              placeholder='회원번호 입력'
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

          <div className='inputWrap'>
            <input
              type='password'
              className='input'
              placeholder='주문번호 입력'
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
            <label>
              <input type="checkbox">
              </input>
              <input type="checkbox">
              </input>
            </label>

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
                아이디 찾기
              </li>
              <li>
                비밀번호 찾기
              </li>
            </ul>
          </div>
          <div className='socialWrap'>
            <button>
              구글 아이디로 로그인
            </button>
            <button>
              인스타그램 아이디로 로그인
            </button>
          </div>
        </div>
      </div>

    </LoginWrapper>
  );
}

export default NoUser;
