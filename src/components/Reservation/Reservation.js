import React from 'react';
import styled from 'styled-components';
import TitelLine from './TitelLine';
import data from '../../data.json';

const ReservationWrap = styled.div`
  width: 100%;
  background: red;
  padding-top: 140px;
  .inner {
    max-width: 1200px;
    height: 100%;
    background: coral;
    margin: 0 auto;
  }
`;

const ContentWrap = styled.div`
  display: flex;
  background: blue;
  width: 100%;
  height: 500px;
  overflow: hidden;
  .imageArea{
    flex: 4;
    background: yellow;
  }
  .infoArea{
    flex: 6;
    background: black;
  }
`;

const ButtonWrap = styled.div`
width: 100%;
height: 100px;
background: wheat;
`;


function Reservation(props) {
  return (
    <ReservationWrap>
      <div className='inner'>
        <TitelLine />
        <ContentWrap>
          <div className='imageArea'>
            {/* {data.map((img)=>{
              return <img src={img.src}/>
            })} */}
            {/* <img src={data[0].src} width='100%'/> */}
          </div>
          <div className='infoArea'>

          </div>

        </ContentWrap>
        <ButtonWrap>

        </ButtonWrap>
      </div>
    </ReservationWrap>
  );
}

export default Reservation;