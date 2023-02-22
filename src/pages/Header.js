import React from 'react';
import styled from 'styled-components';
import backgroundImg from '../image/logo-no-background.png';
import { Search, Person, Place } from '@mui/icons-material';
import { ReactDOM } from 'react-dom';
import SearchOverlay from '../Search/SearchOverlay';
import { useState } from 'react';

const HeaderContainer = styled.header`
  width: 100%;
  /* position: fixed; */
  height: 140px;
  margin: 0 auto;
  
  .header_inner {
    max-width: 1280px;
    margin: 0 auto;
    height: 100%;
    font-family: 'Noto Sans';
    display: flex;
    justify-content: space-between;

    .header_Area {
      flex: 1;
      justify-content: center;
      align-items: center;
      display: flex;
      cursor: pointer;
        img {
          width: 100%;
        }
    }
    .mainMenu_Area {
      flex: 5;
      ul {
        display: flex;
        align-items: center;
        height: 100%;
        justify-content: center;
        gap: 80px;
        li {
          font-size: 20px;
          font-weight: 600;
          color: #303030;
          cursor: pointer;
          &:hover {
            /* color: red; */
          }
        }
      }
    }

    .headerUtility_Area {
      flex: 1;
      justify-content: center;
      align-items: center;
      display: flex;
        
      ul {
        display: flex;
        width: 100%;
        justify-content: space-between;
        cursor: pointer;
      }
    }
  }
`;

const mainMenuList = [
  {
    id: 1,
    title: "About us"
  },
  {
    id: 2,
    title: "Info"
  },
  {
    id: 3,
    title: "Exhibition"
  },
  {
    id: 4,
    title: "News"
  },
  {
    id: 5,
    title: "Online-Gallery"
  },
];

function Header() {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <HeaderContainer>
        <div className='header_inner'>
          <div className='header_Area'>
            <img src={backgroundImg} />
          </div>
          <div className='mainMenu_Area'>
            <ul>
              {mainMenuList.map((list) => {
                return <li key={list.id}>
                  {list.title}
                </li>
              })}
            </ul>
          </div>
          <div className='headerUtility_Area'>
            <ul>
              <li onClick={() => setModalVisible(true)}>
                <SearchOverlay
                  modalVisible={modalVisible}
                  setModalVisible={setModalVisible}
                />
                <Search sx={{ fontSize: 45, color: 'black' }}>
                </Search>
              </li>
              <li>
                <a href='/'>
                  <Person sx={{ fontSize: 45, color: 'black' }}>
                  </Person>
                </a>
              </li>
              <li>
                <a href='/'>
                  <Place sx={{ fontSize: 45, color: 'black' }}>
                  </Place>
                </a>
              </li>
            </ul>
          </div>
        </div>

      </HeaderContainer>
    </>
  );
}

export default Header;

