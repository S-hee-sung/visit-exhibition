import React from 'react';
import styled from "styled-components";
import HorizonLine from '../main(main01)/HorizonLine';
import ShopSwiperSlide from './ShopSwiperSlide';

const GoodsShopWrapper = styled.div`
.inner {
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  padding-bottom: 20px;
}
h4 {
  padding-top: 10vh;
  font-size: 1.2rem;
  color: #000;
  font-weight: 600;
}
`;

function GoodsShop(props) {
  
  return (
    <GoodsShopWrapper>
      <div className='inner'>
        <h4>Goods shop</h4>
        <HorizonLine />
        <ShopSwiperSlide />
      </div>
    </GoodsShopWrapper>
  )
}

export default GoodsShop;