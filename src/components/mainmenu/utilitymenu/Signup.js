import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

const SignupWrap = styled.div`
  padding-top: 140px;
  padding-bottom: 140px;
  width: 100%;
  .inner {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    background: white;
  .titleWrap {
    font-size: 32px;
    font-weight: bold;
    padding: 100px;
  }
  .contentWrap {
    margin-top: 20px;
    width: 550px;
    .nameWrap{
      margin-top: 15px;
    }
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
      margin-top: 2px;
      cursor: pointer;
      &:disabled{
        background-color: #dadada;
        color: white;
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
      gap: 8px;
      font-size: 12px;
      flex-direction: column;
      div{
        display: flex;
        gap: 10px;
      }
      input{
        margin: 0;
        width: 12px;
        height: 12px;
      }
    }
    
  }
  }
`;

const User = {
  id: 'kws04181@naver.com',
  pw: 'react1818@'
}


function Signup(props) {

  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pwReconfirm, setPwReconfirm] = useState('');
  const [reName, setReName] = useState('');

  const [idValid, setIdValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [pwReconfirmValid, setPwReconfirmValid] = useState(false);
  const [reNameValid, setreNameValid] = useState(false);
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

  const handlePwReconfirm = (e) => {
    setPwReconfirm(e.target.value);
  };

  const handleReplaceName = (e) => {
    setReName(e.target.value);
    const regex =
      /^[가-힣]+$/
    if (regex.test(e.target.value)) {

    }
  }

  const onClickConfirm = () => {
    if (id === User.id && pw === User.pw) {
      alert('로그인에 성공했습니다.');
      navigate("/")
    } else {
      alert('등록되지 않는 회원입니다.')
    }
  }

  useEffect(() => {
    if (idValid && pwValid && pwReconfirmValid && reNameValid) {
      setNotAllow(false);
      return
    }
    setNotAllow(true);
  }, [idValid, pwValid, pwReconfirmValid, reNameValid]);


  return (
    <SignupWrap>
      <div className='inner'>

        <div className='titleWrap'>
          회원가입
        </div>
        <div className='contentWrap'>

          <div className='nameWrap'>
            이름
          </div>
          <div className='inputWrap'>
            <input
              type='text'
              className='input'
              placeholder='이름 입력'
              value={reName}
              onChange={handleReplaceName}
            />
          </div>

          <div className='errorMessageWrap'>
            {
              !reNameValid && reName.length > 0 && (
                <div>한글만 입력 가능합니다.</div>
              )
            }
          </div>

          <div className='nameWrap'>
            이메일
          </div>
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

          <div className='nameWrap'>
            비밀번호
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

          <div className='nameWrap'>
            비밀번호 재확인
          </div>
          <div className='inputWrap' style={{ marginBottom: '12px' }}>
            <input
              type='password'
              className='input'
              placeholder='비밀번호 재확인'
              value={pwReconfirm}
              onChange={handlePwReconfirm}
            />
          </div>

          <div className='errorMessageWrap'>
            {
              pw !== pwReconfirm && (
                <div>동일하지 않은 비민번호 입니다.</div>
              )
            }
          </div>

          <div className='chekboxWrap'>
            <div>
              [필수] 이용약관 동의
              <input type="checkbox">
              </input>
              <p>동의</p>
            </div>
            <div>
              <input type="checkbox">
              </input>
              <p>[선택] 이메일 수신을 동의하십니까?</p>
            </div>
          </div>

          <div >
            <button
              className='bottomButton'
              disabled={notAllow}
              onClick={onClickConfirm}
            >
              회원가입
            </button>
          </div>
        </div>

      </div>
    </SignupWrap>
  );
}

export default Signup;