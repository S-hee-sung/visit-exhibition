import React from 'react';
import LandingPage from '../components/map/LandingPage';
import MainPage from "../components/main(main01)/MainPage";
import LocalExhibition from "../components/local(main03)/LocalExhibition";


function Main(props) {
  return (
    <>
      <MainPage />
      <LandingPage />
      <LocalExhibition />
    </>
  );
}

export default Main;