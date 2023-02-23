import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "styled-components";
import data from "../../data.json";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SlideWrapper = styled.div`
.inner {
    max-width: 1200px;
    margin: 0 auto;
  }
  img {
    height: 42vh;
    width: 28vh;
  }
`;

export default () => {
  return (
    <SlideWrapper>
    <div className="inner">
      <Swiper
      // install Swiper modules
        autoplay={true}
        loop={true}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        // navigation
        pagination={{
          clickable: true
        }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide><img src={data[0].src}/></SwiperSlide>
        <SwiperSlide><img src={data[1].src}/></SwiperSlide>
        <SwiperSlide><img src={data[2].src}/></SwiperSlide>
        <SwiperSlide><img src={data[3].src}/></SwiperSlide>
        <SwiperSlide><img src={data[4].src}/></SwiperSlide>
        <SwiperSlide><img src={data[5].src}/></SwiperSlide>
        <SwiperSlide><img src={data[6].src}/></SwiperSlide>
      </Swiper>
    </div>
    </SlideWrapper>
    
  );
};
