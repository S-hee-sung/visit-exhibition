import React, { useState } from "react";
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "styled-components";
import data from "../../data6.json";
import { AddShoppingCart } from '@mui/icons-material';
import LikeButton from "./LikeButton";
import { addItemToCart } from "../shop(main04)/CartSlice";
import { useDispatch } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router";

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
  line-height: 1rem;
  width: 10vw;
}
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
  const dispatch = useDispatch();

  const [ showModal, setShowModal ] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleOpen = () => setShowModal(true);
  const navigate = useNavigate();
  
  return (
    <SlideWrapper>
      <div className="inner">
        <Swiper
          autoplay={{ delay: 1500 }}
          loop={true}
          modules={[Autoplay]}
          spaceBetween={60}
          slidesPerView={5}
        >
          {data.map((swiperList, index) => {
            return <SwiperSlide key={index}>
              <div>
                <ul>
                  <li className="imageContainer">
                    <img src={swiperList.src} alt="shopSldieImages" />
                  </li>
                  <li>
                    {swiperList.title}
                  </li>
                  <li>
                    {swiperList.name}
                  </li>
                  <li>
                    {`${swiperList.price}원`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </li>
                  <li className="icons">
                    <AddShoppingCart
                      sx={{ fontSize: 20, color: '#656565', cursor: 'pointer' }}
                      onClick={() => {
                        dispatch(addItemToCart({
                          id: swiperList.id,
                          title: swiperList.name,
                          price: swiperList.price,
                          count: 1,
                        }));
                        handleOpen();
                      }}
                      />
                    <LikeButton />
                  </li>
                </ul>
              </div>
            </SwiperSlide>
          })}
        </Swiper>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          장바구니에 상품을 담았습니다. 장바구니로 이동하시겠습니까?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={handleClose}>취소</Button>
          <Button variant="primary" onClick={() => { navigate('/cart'); }}>확인</Button>
        </Modal.Footer>
      </Modal>
    </SlideWrapper>
  );
};
