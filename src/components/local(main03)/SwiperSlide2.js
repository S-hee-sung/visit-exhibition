import React, { useState } from "react";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "styled-components";
import data2 from "../../data2.json";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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

  
ul {
  line-height: 1.2rem;
}
/* ul .imageContainer {
    width: 10px
  } */
ul *:nth-child(2) {
  font-size: 1.0rem;
  font-weight: 700;
}
ul *:nth-child(3) {
  font-size: 0.9rem;
}
ul *:nth-child(4) {
  font-size: 0.9rem;
}
`;

export default () => {
  return (
    <SlideWrapper>
    <div className="inner">
      <Swiper
      // install Swiper modules
        autoplay={{ delay: 1500 }}
        loop={true}
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        // navigation
        pagination={{
          clickable: true
        }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        {/* <SwiperSlide><img src={data[0].src}/>{data[0].name}</SwiperSlide>
        <SwiperSlide><img src={data[1].src}/>{data[1].name}</SwiperSlide>
        <SwiperSlide><img src={data[2].src}/>{data[2].name}</SwiperSlide>
        <SwiperSlide><img src={data[3].src}/>{data[3].name}</SwiperSlide>
        <SwiperSlide><img src={data[4].src}/>{data[4].name}</SwiperSlide>
        <SwiperSlide><img src={data[5].src}/>{data[5].name}</SwiperSlide>
        <SwiperSlide><img src={data[6].src}/>{data[6].name}</SwiperSlide> */}
        {data2.map((swiperList)=> {
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
            </ul>
              
            </SwiperSlide>
        })}
      </Swiper>
    </div>
    </SlideWrapper>
    
  );
};
