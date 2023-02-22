import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import MainPage from "./components/mainPage";
// import Youtube from "./components/youtube";
import reset from "styled-reset";
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

  .cursor-pointer {
    cursor: pointer;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
        <MainPage/>
        <LandingPage />
    </>
  );
}

export default App;
