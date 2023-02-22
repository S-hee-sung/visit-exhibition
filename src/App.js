import { Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Header from "./pages/Header";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  body: {
    box-sizing: border-box;
  }

  * {
    box-sizing: inherit;
  }
  
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  );
}

export default App;
