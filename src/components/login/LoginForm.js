import {  Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from '../common/Button';

const LoginFormWrapper = styled.div`
  h3{
    margin: 0;
    color: gray;
    margin-bottom: 1rem;
  }
`;

const ButtonWithMarinTop = styled(Button)`
  margin-top: 1rem;
`

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid black;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus{
    color: black;
    border-bottom:1px solid aqua;
  }
  &+&{
    margin-top: 1rem;
  }
`

const LoginFooter = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: 1px solid black;
    text-decoration: underline;
    &:hover{
        color: 1px solid auqa;
    }
  }
`


const textList = {
  login: '로그인',
  register: '회원가입'
};


function LoginForm({ type }) {
  const text = textList[type];

  return (
    <LoginFormWrapper>
      <h3>{text}</h3>
      <form>
        <StyledInput 
          autoComplete= "username" 
          name= "username"
          placeholder= "아이디"
        />
        <StyledInput 
          autoComplete= "current-password" 
          name= "password" 
          placeholder= "비밀번호" 
          type= "password"
        />
        {/* type이 회원가입이면, 비밀번호 확인 스타일 인풋 추가 */}
        {type === 'register' &&(
            <StyledInput 
              autoComplete= "new-password" 
              name= "passwordConfirm" 
              placeholder= "비밀번호 확인" 
              type= "password" 
            />
        )}
        <ButtonWithMarinTop fullWidth>
          {text}
        </ButtonWithMarinTop>
      </form>
      <LoginFooter>
        {type === 'login' 
        ? (
          <Link to = "/register">회원가입</Link>
        )
        :(
          <Link to = "/login">로그인</Link>
        )
        }
      </LoginFooter>
    </LoginFormWrapper>
  );
};

export default LoginForm;