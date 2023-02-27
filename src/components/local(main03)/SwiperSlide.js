import React, { useState } from "react";
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "styled-components";
import data from "../../data.json";

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/loop';
import 'swiper/css/pagination';
import SubButton from "./SubButton";
// import 'swiper/css/scrollbar';


const SlideWrapper = styled.div`
.inner {
    max-width: 1200px;
    margin: 0 auto;
  }
  img {
    height: 40vh;
    width: 14vw;
  }
  /* ul {
    line-height: 1.2rem;
  } */
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
  }`;

export default () => {
  return (
    <SlideWrapper>
    <div className="inner">
      <Swiper
      // install Swiper modules
        autoplay={{ delay: 1500 }}
        loop={true}
        modules={[Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={4}
        // navigation
        pagination={{
          clickable: true
        }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        {data.map((swiperList)=> {
          return <SwiperSlide>
            <ul>
              <li className="imageContainer">
                <img src={swiperList.src}/>
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
              <li style={{fontWeight: 400}}>
                <SubButton/>
                </li>
            </ul>
            </SwiperSlide>
        })}
      </Swiper>
    </div>
    </SlideWrapper>
    
  );
};
