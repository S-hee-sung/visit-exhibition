import React, { useState } from "react";
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "styled-components";
import data4 from "../../data4.json";

import 'swiper/css';
import SubButton from "./SubButton";

const SlideWrapper = styled.div`
.inner {
    max-width: 1200px;
    margin: 0 auto;
  }
  img {
    height: 40vh;
    width: 14vw;
  }

  
ul {
  line-height: 1.4rem;
}
/* ul .imageContainer {
    width: 10px
  } */
  li:nth-child(2) {
    line-height: 2.0rem;
    font-size: 1.0rem;
    font-weight: 700;
  }
  ul *:nth-child(3) {
    line-height: 2.0;
    font-size: 0.9rem;
  }
  ul *:nth-child(4) {
    font-size: 0.9rem;
  }
  ul *:nth-child(5) {
    padding: 10px 0 50px 0;
  }
`;

export default () => {
  return (
    <SlideWrapper>
      <div className="inner">
        <Swiper
          autoplay={{ delay: 1500 }}
          loop={true}
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={4}
        >
          {data4.map((swiperList) => {
            return <SwiperSlide>
              <div>
                <ul>
                  <li className="imageContainer">
                    <img src={swiperList.src} />
                  </li>
                  <li>
                    {swiperList.name}
                  </li>
                  <li>
                    {swiperList.location}
                  </li>
                  <li>
                    {swiperList.address}
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <SubButton />
                  </li>
                </ul>
              </div>
            </SwiperSlide>
          })}
        </Swiper>
      </div>
    </SlideWrapper>

  );
};
