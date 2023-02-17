import React from 'react';
import LoginForm from '../login/LoginForm';
import LoginTemplate from '../login/LoginTemplate';


function LoginPage(props) {
  
  return (
    <LoginTemplate>
      <LoginForm />
    </LoginTemplate>
  );
}

export default LoginPage;