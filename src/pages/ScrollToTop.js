import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Navigation } from '@mui/icons-material';


const ScrollWrap = styled.div`
  position: fixed;
  right: 10%;
  bottom: 5%;
  z-index: 5;
  #top{
  font-weight: bold;
  font-size: 15px;
  padding :15px 10px;
  background-color: #000;
  color:#fff;
  border: 1px solid rgb(210, 204, 193);
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  &:hover{
    color :rgb(142, 26, 26);  }
  }
`;

function ScrollToTop(props) {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 140) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener("scroll", handleShowButton)
    return () => {
      window.removeEventListener("scroll", handleShowButton)
    }
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }


  return showButton && (
    <ScrollWrap>
      <button id='top' onClick={scrollTop}><Navigation /></button>
    </ScrollWrap>
  );
}

export default ScrollToTop;