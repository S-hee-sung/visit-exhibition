import { createGlobalStyle } from "styled-components";

import reset from "styled-reset";

import MainPage from "./components/MainPage";
import LandingPage from "./components/map/LandingPage";

import Header from "./pages/Header";
import Main from "./pages/Main";


const GlobalStyle = createGlobalStyle`
  ${reset};


  body: {
    box-sizing: border-box;
    font-family: 'Nanum Gothic', sans-serif;
  }
  * {
    box-sizing: inherit;
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
        <Main />


    </>
  );
}

export default App;
