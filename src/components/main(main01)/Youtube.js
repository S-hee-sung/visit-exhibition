import React from 'react';
import styled from "styled-components";
import ReactPlayer from "react-player";

const VideoSizeWrapper = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
`;

function Youtube(props) {
  return (
    <VideoSizeWrapper>
      <ReactPlayer
        className="player"
        url={"https://youtu.be/9cmGRuWdmzg"}
        heigth="100%"
        playing={true}
        muted={true}
        loop={true}
      />
    </VideoSizeWrapper>
  );
}

export default Youtube;