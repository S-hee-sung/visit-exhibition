import React from 'react';
import styled from 'styled-components';

const AnimatedTitle = styled.div`
    font-size:2rem; 
    position: absolute; 
    width: 100%;
    max-width:100%; 
    height: auto; 
    padding:100px 0; 
    overflow-x: hidden; 
    overflow-y: hidden; 
    font-weight: bold;
    position: absolute;
    color: #32323B; 
    bottom: -120px;
    .track {
    position: absolute; 
    /* bottom: 20px; */
    white-space: nowrap;
    will-change: transform;
    animation: marquee 60s linear infinite; }
  
  @keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
  @media (hover: hover) and (min-width: 700px){
  .animated-title .content {-webkit-transform: translateY(calc(100% - 8rem)); transform: translateY(calc(100% - 8rem));}
      }
      `;

function MoveText(props) {
    return (
        <AnimatedTitle>
            <div class="track">
                <div class="content">
                    &nbsp;Srolln ones cuture People&nbsp;Srolln ones cuture People&nbsp;SEONG DESIGN CUTURE PEOPLE&nbsp;Srolln ones cuture People&nbsp;SEONG DESIGN CUTURE PEOPLE&nbsp;Srolln ones cuture People
                </div>
            </div>
        </AnimatedTitle>
    );
}

export default MoveText;