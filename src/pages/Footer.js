import styled from "styled-components";
import backgroundImg from '../images/logo-no-background.png';

const FooterWrapper = styled.div`
  background-color: #222;
  padding: 80px 20px;
  width: 100%;

  .lineWrapper {
    width: 100%;
    height: 1px;
    background-color: #656565;
  }

  .inner {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const FooterCenter = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 30px;

  

  img {
    width: 300px;
  }

  .ul-flex {
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: #c8c8c8;
    margin-top: 10px;
  }

  .ul-flex > ul {
    padding-right : 40px;
    text-align: right;
  }

  .ul-flex > ul > li {
    padding: 3px;
    font-weight: 400;
    font-size: 12px;
  }

  .btn-opt {
    width: 200px;
    height: 40px;
    color: #fff;
    border: 1px solid #656565;
    background-color: #222;
  }
`;

const FooterInput = styled.div`
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  color: #c8c8c8;

  .lineWrapper {
    width: 60%;
    height: 1px;
    margin: 0 auto;
    background-color: #656565;
  }

  .li-flex {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    
  }

  p {
    padding-top: 15px;
  }
`;


function Footer(props) {
  return (
    <FooterWrapper>
      <div className="inner">
        <div className="lineWrapper"></div>
        <FooterCenter>
          <div>
            <img src={backgroundImg}  />
          </div>
          <div className="ul-flex">
            <ul>
              <li>goods shop</li>
            </ul>
            <ul>
              <li>youtube</li>
              <li>instagram</li>
              <li>facebook</li>
            </ul>
            <ul>
              <li>membership</li>
              <li>exhibition</li>
              <li>notice</li>
              <li>Contact us</li>
            </ul>
            <button type="option" className="btn-opt">
              familyShip
            </button>
          </div>
        </FooterCenter>
        <FooterInput>
          <ul className="li-flex">
            <li style={{ color: "white" }}>개인정보처리방침</li>
            <li>이용약관</li>
          </ul>
          <div className="lineWrapper"></div>
          <p>14 Samcheong-ro, Jongno-gu, Seoul 03062 Korea</p>
          <p>Gallery Hyundai- All rights reserved 2020</p>
        </FooterInput>
      </div>
    </FooterWrapper>
  );
}

export default Footer;

