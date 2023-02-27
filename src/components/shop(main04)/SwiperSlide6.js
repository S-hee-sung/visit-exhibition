import React from "react";
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "styled-components";
import data from "../../data6.json";

import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const SlideWrapper = styled.div`
.inner {
    max-width: 1200px;
    margin: 0 auto;
  }
  img {
    margin-top: 50px;
    height: 20vh;
    width: 10vw;
    margin-bottom: 20px;
  }
  
ul {
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
  line-height: 1rem;
  width: 10vw;
}
/* ul .imageContainer {
    width: 10px
  } */
ul *:nth-child(2) {
  font-size: 0.7rem;
  font-weight: 700;
}
ul *:nth-child(3) {
  font-size: 0.8rem;
  font-weight: 700;
  white-space: nowrap;
  padding: 6px 0;
  overflow: hidden;
  text-overflow: ellipsis;
}
ul *:nth-child(4) {
  text-align: right;
  font-size: 1.0rem;
  padding: 10px 0 30px 0;
}
`;

export default () => {
  return (
    <SlideWrapper>
    <div className="inner">
      <Swiper
      // install Swiper modules
        autoplay={{ delay: 2000 }}
        loop={true}
        modules={[Autoplay, Pagination]}
        spaceBetween={60}
        slidesPerView={5}
        // navigation
        pagination={{
          clickable: true
        }}
        // scrollbar={{ draggable: true }}
      >
        {data.map((swiperList)=> {
          return <SwiperSlide>
            <ul>
              <li className="imageContainer">
                <img src={swiperList.src}/>
              </li>
              <li>
                {swiperList.title}
              </li>
              <li>
                {swiperList.name}
              </li>
              <li>
                {swiperList.price}
              </li>
            </ul>
              
            </SwiperSlide>
        })}
      </Swiper>
    </div>
    </SlideWrapper>
    
  );
};
