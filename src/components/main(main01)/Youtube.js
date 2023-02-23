import React from 'react';
import ReactPlayer from "react-player";

function youtube(props) {
  return (
    <div>
      <ReactPlayer
        className="player"
        url={"https://youtu.be/__jsD5CdvZ4"}
        width="700px"
        heigth="700px"
        playing={true}
        muted={true}
        controls={true}
      />
    </div>
  );
}

export default youtube;