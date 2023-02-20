import { Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import LoginForm from "./components/login/LoginForm";
import LoginTemplate from "./components/login/LoginTemplate";

const GlobalStyle = createGlobalStyle`
  body: {
    box-sizing: border-box;
  }

  .cursor-pointer {
    cursor: pointer;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
    
    </>
  );
}

export default App;
