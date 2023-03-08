import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SupportAgent } from '@mui/icons-material';


const ScrollWrap = styled.div`
  position: fixed;
  right: 2%;
  bottom: 100px;
  z-index: 5;
  padding: 0;
  #top{
  font-weight: bold;
  padding: 0;
  font-size: 15px;
  background-color: #000;
  /* opacity: 0.7; */
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  color:#fff;
  outline: none;
  padding: 5px;
  cursor: pointer;
  font-size: 15px;
  }
`;

function CustomerService(props) {

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
      <button id='top' onClick={() => {window.open("http://localhost:3000/chat", "Popup","toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=400, height=400, top=800, left=1700")}}><SupportAgent /></button>
    </ScrollWrap>
  );
}

export default CustomerService;