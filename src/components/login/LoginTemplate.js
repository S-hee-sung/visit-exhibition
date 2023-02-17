import styled from "styled-components";
import { Link } from "react-router-dom";



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


function LoginTemplate({childeren}) {
  return (  
    <LoginTemplateWrapper>
      <WhiteBox>
        <div className=".logo-area">
          <Link to='/' >
            Title
          </Link>
        </div>
        {childeren}
      </WhiteBox>
    </LoginTemplateWrapper>
  );
}

export default  LoginTemplate;


