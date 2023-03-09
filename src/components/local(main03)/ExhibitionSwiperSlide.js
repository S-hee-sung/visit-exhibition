import React from "react";
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "styled-components";
import 'swiper/css';
import SubButton from "../local(main03)/SubButton";


const SlideWrapper = styled.div`
.inner {
    max-width: 1200px;
    margin: 0 auto;
  }
  img {
    height: 40vh;
    width: 14vw;
  }
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

const ExhibitionSwiperSlide = (props) => {
  const { slideList } = props;

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
          {slideList.map((swiperList, index) => {
            return <SwiperSlide key={index}>
              <div>
                <ul>
                  <li className="imageContainer">
                    <img src={swiperList.src} alt="exhibitionSlideImages"/>
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
                  </li>
                </ul>
              </div>
            </SwiperSlide>
          })}
        </Swiper>
      </div>
      <div>
        <SubButton />
      </div>
    </SlideWrapper>

  );
};

export default ExhibitionSwiperSlide;