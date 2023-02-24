import { createGlobalStyle } from "styled-components";

import reset from "styled-reset";

import MainPage from "./components/main(main01)/MainPage";
import LandingPage from "./components/map/LandingPage";

import Header from "./pages/Header";

import Main from "./pages/Main";
import LocalExhibition from "./components/local(main03)/LocalExhibition";
import SwiperSlide from "./components/local(main03)/SwiperSlide";
import Footer from "./pages/Footer";

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
      <LocalExhibition />
      <SwiperSlide />
      <Footer />
    </>
  );
}

export default App;
