import React, { useState } from "react";
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "styled-components";
import data from "../../data6.json";
import { AddShoppingCart } from '@mui/icons-material';

// import 'swiper/css';
// import { useNavigate, useParams } from "react-router";
import LikeButton from "./LikeButton";

import { addItemToCart } from "../shop(main04)/CartSlice";
import { useDispatch, useSelector } from "react-redux";


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

  // const product = useSelector(state => state.cart.cartList);
  const product = [
    {
      id: '1',
      title: 'ALL OF THEM WITCHES\' PUZZLE 500',
      price: 28900,
      count: 1
    },
    {
      id: '2',
      title: '백자청화초화문편병 굽접시',
      price: 32900,
      count: 3
    }
  ];
  console.log(product[0].id);

  const dispatch = useDispatch();

  const [ activeIndex, setActiveIndex ] = useState(0);

  const handleItemToCart = (index) => {

  }

  

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
                    <AddShoppingCart
                      sx={{ fontSize: 20, color: '#656565', cursor: 'pointer' }}
                      onClick={() => {
                        dispatch(addItemToCart({
                          id: product[1].id,
                          title: product[1].title,
                          price: product[1].price,
                          count: product[1].count
                        }))
                      }}/>
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
