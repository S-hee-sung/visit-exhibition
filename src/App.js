import { createGlobalStyle } from "styled-components";

import reset from "styled-reset";

import MainPage from "./components/main(main01)/MainPage";
import LandingPage from "./components/map/LandingPage";

import Header from "./pages/Header";

import Main from "./pages/Main";
import Footer from "./pages/Footer";
import { Route, Routes } from "react-router";
import Login from "./components/mainmenu/utilitymenu/Login";
import Layout from "./pages/Layout";
import CalendarPage from "./components/book/CalendarPage";
import Signup from "./components/mainmenu/utilitymenu/Signup";
import Reservation from "./components/Reservation/Reservation";
import Cart from "./components/shop(main04)/Cart";
import Chat from "./components/messenger/Chat";

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
          <Route path="/cal" element={<CalendarPage />} />
          <Route index element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
          <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  );
}

export default App;
