import React from 'react';
import styled from 'styled-components';
import { Search, Person, Place } from '@mui/icons-material';

const UtilityMenuArea = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    position: relative;
      ul {
        display: flex;
        width: 100%;
        justify-content: space-between;
        cursor: pointer;
        li {
          padding-left: 10px;
          opacity: 70%;
        }
      }
    
`;

const UtilityTopMenuArea = styled.div`
  position: absolute;
  white-space: nowrap;
  top: 10px;
  right: 0;
  font-weight: bold;
  font-size: 15px;
`;

const utilityTopMenu = [
  {
    id: 1,
    title: "로그인"
  },
  {
    id: 2,
    title: "회원가입"
  },
  {
    id: 3,
    title: "고객센터"
  }
];

function UtilityMenu(props) {

  return (
    <UtilityMenuArea>
      <ul>
        <li>
          <Search sx={{ fontSize: 35, color: 'black' }}>
          </Search>
        </li>
        <li>
          <Person sx={{ fontSize: 35, color: 'black' }}>
          </Person>
        </li>
        <li>
          <Place sx={{ fontSize: 35, color: 'black' }}>
          </Place>
        </li>
      </ul>
      <UtilityTopMenuArea>
        <ul>
          {utilityTopMenu.map((item => {
            return <li key={item.id}><a>{item.title}</a></li>
          }))}
        </ul>
      </UtilityTopMenuArea>
    </UtilityMenuArea>
  );
}

export default UtilityMenu;