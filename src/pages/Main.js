import React from 'react';
import LandingPage from '../components/map/LandingPage';
import MainPage from "../components/main(main01)/MainPage";
import LocalExhibition from "../components/local(main03)/LocalExhibition";
import GoodsShop from "../components/shop(main04)/GoodsShop";
import MoveText from '../components/animation/MoveText';


function Main(props) {
  return (
    <>
      <MainPage />
      <LandingPage />
      <LocalExhibition />
      <MoveText />
      <GoodsShop  />
    </>
  );
}

export default Main;