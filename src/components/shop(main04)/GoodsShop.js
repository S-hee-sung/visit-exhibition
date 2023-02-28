import React from 'react';
import styled from "styled-components";
import HorizonLine from '../main(main01)/HorizonLine';
import SwiperSlide6 from './ShopSwiperSlide';

const GoodsShopWrapper = styled.div`
.inner {
  max-width: 1200px;
  margin: 0 auto;
}
h4 {
  padding-top: 20vh;
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
        <SwiperSlide6 />
      </div>
    </GoodsShopWrapper>
  )
}

export default GoodsShop;