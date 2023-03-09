import styled from "styled-components";
import backgroundImg from '../images/logo-no-background.png';
import { useState, } from "react";
import FooterDropDown from "./FooterDropDown";

const FooterWrapper = styled.div`
  width: 100%;
  background-color: #222;
  padding: 80px 0 0 0;
  .footerInner {
    max-width: 1200px;
    margin: 0 auto;
    border-top: 3px solid #656565;
    padding: 20px 0 10px 0;
    display: flex;
    justify-content: space-between;
    img {
      width: 250px;
    }
    button{
      width: 150px;
      height: 50px;
      background: none;
      border: 1px solid #656565;
      font-size: 18px;
    }
    .footerRightArea { 
      flex: 1;
      display: flex;
      .textArea {
        flex: 2;
        height: 100%;
        text-align: right;
        display: flex;
        justify-content: flex-end;
        ul{
          padding-left: 50px;
          li{
            color: #c8c8c8;
            padding-bottom: 20px;
            font-size: 12px;
            white-space: nowrap;
            cursor: pointer;
            a{
              text-decoration: none;
              color: #c8c8c8;
            }
          }
        }
      }
      .buttonArea{
        flex: 1;
        background: blue;
        height: 100%;
        
      }
    }
  }
`;

const DropDown = styled.div`
  display: flex;
  padding: 10px;
  height: 20px;
  margin-right: 100px;
  margin-left: 20px;
  border: 1px solid #656565;
  cursor: pointer;
  ul{
    color: #c8c8c8;
    white-space: nowrap;
    font-size: 14px;
  }
`;

const FooterBottom = styled.div`
  max-width: 800px;
  margin: 0 auto;
  border-top: 3px solid #656565;
  text-align: center;
  line-height: 25px;
  padding: 18px 0;
  p{
    font-size: 14px;
    color: #c8c8c8;
  }
  ul{
    display: flex;
    justify-content: center;
    gap: 16px;
    color: #c3c3c3;
    font-size: 10px;
    margin-top: 14px;
    a{
      text-decoration: none;
      color: #c3c3c3;
      font-size: 10px;
    }
  }
`;



function Footer(props) {

  const [dropDown, setDropDown] = useState(false);

  const updateScroll = () => {
    setDropDown(window.scrollY || document.documentElement.scrollTop);
  }
  // useEffect(() => {
  //   window.addEventListener("scroll", dropDown)
  // }, []);

  return (
    <FooterWrapper>
      <div className="footerInner">
        <div className="footerImageArea" style={{ marginLeft: '100px' }}>
          <img src={backgroundImg} alt="푸터 로고 이미지" />
        </div>
        <div className="footerRightArea">
          <div className="textArea">
            <ul>
              <li>
                <a href="https://www.youtube.com/">youtube</a>
              </li>
              <li>
                <a href="https://www.instagram.com/">instagram</a>
              </li>
              <li>
                <a href="https://ko-kr.facebook.com/">facebook</a>
              </li>
            </ul>
            <ul>
              <li>
                membership
              </li>
              <li>
                exhibition
              </li>
              <li>
                notice
              </li>
              <li>
                Contact us
              </li>
            </ul>

          </div>
          <DropDown>
            <ul onClick={() => { setDropDown(!dropDown) }}>
              family Site
              {dropDown && <FooterDropDown />}
            </ul>
          </DropDown>
        </div>
      </div>
      <FooterBottom>
        <p>14 Samcheong-ro, Jongno-gu, Seoul 03062 Korea<br />
          Gallery Hyundai - All rights reserved 2023</p>

        <ul>
          <li>
            <a style={{ fontWeight: 'bold' }}>개인정보처리관리</a>
          </li>
          <li>
            |
          </li>
          <li>
            <a >이용약관</a>
          </li>
          <li>
            |
          </li>
          <li>
            <a >통합검색 고객센터</a>
          </li>
          <li>
            |
          </li>
          <li>
            <a >전체 서비스</a>
          </li>
        </ul>
      </FooterBottom>
    </FooterWrapper>
  );
}

export default Footer;
