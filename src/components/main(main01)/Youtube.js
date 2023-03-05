import React from 'react';
import styled from "styled-components";
import ReactPlayer from "react-player";

const VideoSizeWrapper = styled.div`
/* width: 1190px; */
/* height: 723px; */
/* background-color: yellow; */
display: flex;
flex-direction: row;
gap: 10px;
`;

function youtube(props) {
  return (
    <VideoSizeWrapper>
        {/* <ReactPlayer
          className="player"
          url={"https://youtu.be/__jsD5CdvZ4"}
          // width="400px"
          // heigth="320px"
          playing={true}
          muted={true}
          loop={true}
        controls={true}
        /> */}
        <ReactPlayer
          className="player"
          url={"https://youtu.be/9cmGRuWdmzg"}
          // width="400px"
          heigth="100%"
          playing={true}
          muted={true}
          loop={true}
        />
    </VideoSizeWrapper>

  );
}

export default youtube;