import React from 'react';
import styled from 'styled-components';
import { Search, Person, Place } from '@mui/icons-material';

const UtilityMenuArea = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
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

function UtilityMenu(props) {

  return (
    <UtilityMenuArea>
      <ul>
        <li>
          <Search sx={{ fontSize: 45, color: 'black' }}>
          </Search>
        </li>
        <li>
          <Person sx={{ fontSize: 45, color: 'black' }}>
          </Person>
        </li>
        <li>
          <Place sx={{ fontSize: 45, color: 'black' }}>
          </Place>
        </li>
      </ul>
    </UtilityMenuArea>
  );
}

export default UtilityMenu;