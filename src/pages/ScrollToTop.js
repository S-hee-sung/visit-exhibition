import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const ScrollWrap = styled.div`
  position: fixed;
  right: 2%;
  bottom: 35px;
  z-index: 5;
  padding: 0;
  .top{
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
      <button className='top' onClick={scrollTop}>Top</button>
    </ScrollWrap>
  );
}

export default ScrollToTop;