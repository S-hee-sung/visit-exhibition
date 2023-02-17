import styled from "styled-components";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";



const LoginTemplateWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  box-shadow: 0 0 8px rgba(0,0,0,0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;

  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align:center;
    font-weight: bold;
    letter-spacing:2px;
  }
  
`


const LoginTemplate = (props) => {
  // const { children } = props;

  return (  
    <LoginTemplateWrapper>
      <WhiteBox>
        <div className="logo-area">
          {/* <Link to='/'> */}
            TITLE
          {/* </Link> */}
        </div>
        <LoginForm type={'login'} />
      </WhiteBox>
    </LoginTemplateWrapper>
  );
};

export default LoginTemplate;


