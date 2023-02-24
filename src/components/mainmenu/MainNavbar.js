import React from 'react';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';

const MainMenu = styled.div`
display: flex;
align-items: center;
font-family: 'Noto Sans';
  ul {
    display: flex;
    li{
      a{
      padding: 20px 0;
      margin: 20px;
      font-size: 20px;
      font-weight: 600;
      color: #303030;
      white-space: nowrap;
      text-decoration: none;
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

function MainNavbar() {
  return (
    <MainMenu>
      <Nav defaultActiveKey="/home" as="ul">
        {mainMenuList.map((list) => {
          return <Nav.Item as='li' key={list.id}>
            <Nav.Link href='/home'>{list.title}</Nav.Link>
          </Nav.Item>
        })}
      </Nav>
    </MainMenu>
  );
}

export default MainNavbar;
