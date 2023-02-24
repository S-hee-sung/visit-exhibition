import { createGlobalStyle } from "styled-components";

import reset from "styled-reset";

import MainPage from "./components/main(main01)/MainPage";
import LandingPage from "./components/map/LandingPage";

import Header from "./pages/Header";

import Main from "./pages/Main";
import LocalExhibition from "./components/local(main03)/LocalExhibition";
import SwiperSlide from "./components/local(main03)/SwiperSlide";
import Footer from "./pages/Footer";
import { Route, Routes } from "react-router";
import Login from "./components/mainmenu/utilitymenu/Login";
import Layout from "./pages/Layout";

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

      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Route>
      
      </Routes>

        {/* <LocalExhibition /> */}
        <SwiperSlide />

    </>
  );
}

export default App;
