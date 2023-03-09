import React, { useState } from 'react';
import styled from 'styled-components';
import MiniCalendar from './MiniCalender';

const InfoArea = styled.div`
    flex: 6;
    background: white;
    display: flex;
    flex-direction: column;
    height: 100%;
    .infoProductArea1{
      height: 100%;
      display: flex;
      white-space: nowrap;
      .infoArea{
        width: 100%;
        height: 100%;
        display: flex;
        gap: 20px;
        .contentImg{
          display: flex;
          padding: 20px;
          justify-content: center;
          align-items: center;
          background: white;
          padding-top: 0;
          img{
            width: 440px;
            height: 600px;
          }
        }
        .categoryArea{
          flex: 1;
          .tapContents{
            display: flex;
            justify-content: space-evenly;
            .tapItem{
              display: flex;
              flex-direction: column;
              gap: 10px;
              font-size: 14px;
              white-space: pre-line;
              font-style: bold;
              padding: 10px;
              cursor: pointer;
              width: 120px;
              height: 140px;
              text-align: center;
              height: 100%;
              p{
                font-weight: bold;
              }
            }
            img{
              width: 120px;
              height: 140px;
            }
          }
        }
        .infoList{
          flex: 1;
          gap: 20px;
          display: flex;
          flex-direction: column;
          .row{
            display: flex;
            gap: 60px;
            flex-direction: row;
            ul{
              display: flex;
              font-weight: bold;
              flex-direction: column;
              font-size: 18px;
              width: 1px;
              li{
                margin: 20px 0;
                &li:last-child{
                  margin: 0;
                }
              }
          }
            .focus{
              font-weight: bold;
              color: #ed4037;
            }
          }
        }
      }
      .calChoice{
        width: 100%;
        padding: 20px 0 ;
        border-top: 2px solid #000;
        height: 100%;
        li{
          font-weight: bold;
          font-size: 18px;
        }
      }
    }
`;


function InfoProduct(props) {

  const [activeContentIndex, setActiveContentIndex] = useState(0);

  const handleContentClick = (index) => {
    setActiveContentIndex(index);
  };


  const { contents } = props;


  return (
    <InfoArea>
      <div className='infoProductArea1'>
        <div className='infoArea'>
          <div className='categoryArea'>
            <div className='contentImg'>
              <img src={contents[activeContentIndex].imageSrc} alt='포스터 이미지' />
            </div>
            <div className='tapContents'>
              {contents.map((content, index) => (
                <div className='tapItem' key={index} onClick={() => handleContentClick(index)}>
                  <img src={content.imageSrc} alt='포스터 이미지' />
                  <p>{content.content}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='infoList'>
            <div className='row'>
              <ul>
                <li>제목</li>
                <li>위치</li>
                <li>등급</li>
                <li>가격</li>
                <li>위치</li>
              </ul>
              <ul style={{ fontWeight: "500", color: "#333" }}>
                <li>{contents[activeContentIndex].content}</li>
                <li>{contents[activeContentIndex].address}</li>
                <li>전체이용가능</li>
                <li>입장 <span className='focus'>{contents[activeContentIndex].price}</span>원</li>
                <li>{contents[activeContentIndex].address}원</li>
              </ul>
            </div>
            <div className='calChoice'>
              <ul>
                <li>관람 날짜 선택</li>
              </ul>
              <MiniCalendar />
              {/* <DateCalender /> */}
            </div>
          </div>
        </div>

      </div>
    </InfoArea>
  );
}

export default InfoProduct;