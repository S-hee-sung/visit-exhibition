import React from 'react';
import styled from "styled-components";

import bot from "./chatBot.jpg";

const TopWrapper = styled.div`
  background-color: white;
  color: #ba4f5f;
  display: flex;
  
  padding: 10px;
  border-bottom: solid 1px #d16f80;
  position: fixed;
  top: 0px;
  width: 100%;
`;

const ProfileImageButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 70%;
  overflow: hidden;
  padding: 0px;
  border: none;
`;

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 70%;
  background-position: 0px 0px;
  overflow: hidden;

  &:focus {
    outline: none;
  }
`;

const ProfileName = styled.div`
  padding-left: 20px;
  line-height: 60px;
  font-size: 20px;
`;

function ChatTop(props) {

  return (
    <TopWrapper>
      <ProfileImageButton>
        <ProfileImage src={bot} />
      </ProfileImageButton>
      <ProfileName>채팅봇</ProfileName>
    </TopWrapper>
  );
}

export default ChatTop;