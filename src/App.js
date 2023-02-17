import { createGlobalStyle } from "styled-components";
import LoginPage from "./components/loginPage/LoginPage";

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
