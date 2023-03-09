import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { Route, Routes } from "react-router";

import Layout from "./pages/Layout";
import CalendarPage from "./components/book/CalendarPage";
import Main from "./pages/Main";
import Login from "./components/mainmenu/utilitymenu/Login";
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
