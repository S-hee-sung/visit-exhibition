import React from "react";
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "styled-components";
import data from "../../data6.json";
import { AddShoppingCart } from '@mui/icons-material';

import 'swiper/css';
import { useNavigate } from "react-router";
import LikeButton from "./LikeButton";


const SlideWrapper = styled.div`
.inner {
    max-width: 1200px;
    margin: 0 auto;
    height: 450px;
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
ul li:nth-child(2) {
  font-size: 0.7rem;
  font-weight: 700;
}
ul li:nth-child(3) {
  font-size: 0.8rem;
  font-weight: 700;
  white-space: nowrap;
  padding: 6px 0;
  overflow: hidden;
  text-overflow: ellipsis;
}
ul li:nth-child(4) {
  text-align: right;
  font-size: 1.0rem;
  padding: 10px 0 0 0;
}
.icons {
  display: flex;
  gap: 5px;
  cursor: pointer;
}
`;

export default () => {

  const navigate = useNavigate();

  return (
    <SlideWrapper>
      <div className="inner">
        <Swiper
          autoplay={{ delay: 2000 }}
          loop={true}
          modules={[Autoplay]}
          spaceBetween={60}
          slidesPerView={5}
        >
          {data.map((swiperList) => {
            return <SwiperSlide>
              <div>
                <ul>
                  <li className="imageContainer">
                    <img src={swiperList.src} />
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
                  <li className="icons">
                    <AddShoppingCart sx={{ fontSize: 20, color: '#656565', cursor: 'pointer' }} onClick={() => navigate('/cart')}/>
                    {/* <FavoriteBorder sx={{ fontSize: 20, color: '#FFC3C3', cursor: 'pointer' }} /> */}
                    <LikeButton />
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
