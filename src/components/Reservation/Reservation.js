import React from 'react';
import styled from 'styled-components';
import TitelLine from './TitelLine';
import data from '../../data.json';
import { fontWeight } from '@mui/system';
import InfoProduct from './InfoProduct';

const ReservationWrap = styled.div`
  width: 100%;
  padding-top: 140px;
  .inner {
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
  }
`;

const ContentWrap = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  overflow: hidden;
  gap: 50px;
  padding-bottom: 20px;
  .imageArea{
    flex: 3;
    background: yellow;
    padding: 20px;
  }

`;

function Reservation(props) {
  return (
    <ReservationWrap>
      <div className='inner'>
        <TitelLine />
        <ContentWrap>
          <div className='imageArea'>
            {/* {data.map((img)=>{
              return <img src={img.src} key={img.id} alt={img.name}/>
            })} */}
            <img src={data[1].src} width='100%' />
          </div>
          <InfoProduct />
        </ContentWrap>

      </div >
    </ReservationWrap >
  );
}

export default Reservation;