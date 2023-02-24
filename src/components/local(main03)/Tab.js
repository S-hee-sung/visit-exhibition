import { useState } from 'react';
import styled from 'styled-components';
import SwiperSlide from './SwiperSlide';
import SwiperSlide2 from "./SwiperSlide2";
import SwiperSlide3 from "./SwiperSlide3";


const TabMenu = styled.ul`
  display: flex;
  padding: 30px;
  justify-content: space-around;
  /* align-items: center; */
  /* margin-bottom: 7rem;
  margin-top: 10px; */
  margin-top: 1.8rem;
  margin-bottom: 1.2rem;
  gap: 10px;

  .submenu {
    display: flex;
    justify-content: space-evenly;
    /* text-align: center; */
    width: 180px;
    height: 42px;
    border: 1px solid #656565;
    box-sizing: border-box;
    padding: 12px;
    font-size: 0.8rem;
    transition: 0.5s;
    border-radius: 16px;
    cursor: pointer;
  }
  .submenu:hover {
    border: 1px solid #000;
    background-color: #000;
    color: #fff;
  }
  .focused {
    border: 1px solid #000;
    background-color: #000;
    color: #fff;
  }
  & div.desc {
    text-align: center;
  }
`;

const Desc = styled.div`
  text-align: center;
`;

export const Tab = () => {
  const [currentTab, clickTab] = useState(0);

  const menuArr = [
    { name: '서울', content: <SwiperSlide/> },
    { name: '인천', content: <SwiperSlide2/> },
    { name: '경기 남부', content: <SwiperSlide3/> },
    { name: '경기 북부', content: 'Tab menu 4' },
    { name: '기타', content: 'Tab menu 5' },
  ];

  const selectMenuHandler = (index) => {
    clickTab(index);
  };

  return (
    <>
      <div>
        <TabMenu>
          {menuArr.map((el,index) => (
              <li className={index === currentTab ? "submenu focused" : "submenu" }
              onClick={() => selectMenuHandler(index)}>{el.name}</li>
            ))}
        </TabMenu>
        <Desc>
          <p>{menuArr[currentTab].content}</p>
        </Desc>
      </div>
    </>
  );
};

export default Tab;