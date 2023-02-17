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
  border-bottom: 1px solid white;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus{
    color: white;
    border-bottom:1px solid black;
  }
  &+&{
      margin-top: 1rem;
    }
`
const textMap = {
  login: '로그인',
  register: '회원가입'
};


function LoginForm({ type }) {
  const text = textMap[type];

  return (
    <LoginFormWrapper>
      <h3>{text}</h3>
      <form>
        <StyledInput 
          autoComplete="username"
          name="username"
          placeholder="아이디"
        />
        <StyledInput 
          autoComplete="current-password" 
          name="password" 
          placeholder="비밀번호" 
          type="password"
        />
        {type === 'register' &&(
            <StyledInput 
              autoComplete="new-password" 
              name="passwordConfirm" 
              placeholder="비밀번호 확인" 
              type="password" />
            )
        }
        <ButtonWithMarinTop fullWidth>
          {text}
        </ButtonWithMarinTop>
      </form>


    </LoginFormWrapper>
  );
};

export default LoginForm;