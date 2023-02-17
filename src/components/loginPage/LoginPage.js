import React from 'react';
import LoginForm from '../login/LoginForm';
import LoginTemplate from '../login/LoginTemplate';


function LoginPage(props) {
  
  return (
    <LoginTemplate>
      <LoginForm type='login' />
    </LoginTemplate>
  );
}

export default LoginPage;