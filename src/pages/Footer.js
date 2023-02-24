import styled from "styled-components";
import backgroundImg from '../images/logo-no-background.png';

const FooterWrapper = styled.div`
  width: 100%;
  background-color: #222;
  height: 250px;
  padding: 80px 0 0 0;
  .footerInner {
    max-width: 1200px;
    margin: 0 auto;
    border-top: 3px solid #656565;
    padding: 20px 0 10px 0;
    display: flex;
    justify-content: space-between;
    img {
      width: 300px;
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



function Footer(props) {
  return (
    <FooterWrapper>
      <div className="footerInner">
        <div className="footerImageArea">
          <img src={backgroundImg}/>
        </div>
        <div className="footerRightArea">
          <div className="textArea">
            <ul>
              <li>
                good shop
              </li>
            </ul>
            <ul>
              <li>
                youtube
              </li>
              <li>
                instagram
              </li>
              <li>
                facebook
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
          <div className="buttonArea">

          </div>
        </div>
      </div>
    </FooterWrapper>
  );
}

export default Footer;



// .lineWrapper {
//   width: 100%;
//   height: 1px;
//   background-color: #656565;
// }

// .inner {
//   max-width: 1200px;
//   margin: 0 auto;
// }
// `;

// const FooterCenter = styled.div`
// display: flex;
// justify-content: space-around;
// padding: 30px;



// img {
//   width: 300px;
// }

// .ul-flex {
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   color: #c8c8c8;
//   margin-top: 10px;
// }

// .ul-flex > ul {
//   padding-right : 40px;
//   text-align: right;
// }

// .ul-flex > ul > li {
//   padding: 3px;
//   font-weight: 400;
//   font-size: 12px;
// }

// .btn-opt {
//   width: 200px;
//   height: 40px;
//   color: #fff;
//   border: 1px solid #656565;
//   background-color: #222;
// }
// `;

// const FooterInput = styled.div`
// text-align: center;
// font-size: 12px;
// font-weight: 400;
// color: #c8c8c8;

// .lineWrapper {
//   width: 60%;
//   height: 1px;
//   margin: 0 auto;
//   background-color: #656565;
// }

// .li-flex {
//   display: flex;
//   justify-content: flex-end;
//   gap: 20px;
  
// }

// p {
//   padding-top: 15px;
// }
// `;




/* background-color: #222;
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
`; */