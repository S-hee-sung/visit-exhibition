import { useState } from 'react';
import styled from 'styled-components';
import ExhibitionSwiperSlide from './ExhibitionSwiperSlide';
import data from "../../data.json";
import data2 from "../../data2.json";
import data3 from "../../data3.json";
import data4 from "../../data4.json";
import data5 from "../../data5.json";

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
    font-weight: 700;
  }
`;

const Desc = styled.div`
  text-align: center;
`;

export const Tab = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { name: '서울 종로구', content: <ExhibitionSwiperSlide slideList={data} /> },
    { name: '서울 강남구', content: <ExhibitionSwiperSlide slideList={data2} /> },
    { name: '서울 기타', content: <ExhibitionSwiperSlide slideList={data3} /> },
    { name: '인천', content: <ExhibitionSwiperSlide slideList={data4} /> },
    { name: '경기', content: <ExhibitionSwiperSlide slideList={data5} /> },
  ];

  return (
    <>
      <div>
        <TabMenu key={menuArr}>
          {menuArr.map((el,index) => (
              <li className={index === currentTab ? "submenu focused" : "submenu" }
              onClick={() => setCurrentTab(index)}>{el.name}</li>
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