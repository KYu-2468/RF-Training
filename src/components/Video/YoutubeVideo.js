import React, { useState, useEffect } from "react";
import Youtube from "react-youtube";
import { useMediaQuery } from "react-responsive";

const YoutubeVideo = ({ videoId }) => {
  const [videoStyle, setVideoStyle] = useState({});

  const isXLargeScreen = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  const isLargeScreen = useMediaQuery({
    query: "(min-width: 1000px)",
  });

  const isMidScreen = useMediaQuery({
    query: "(min-width: 800px)",
  });

  useEffect(() => {
    if (isXLargeScreen) {
      setVideoStyle({ width: "1000", height: "567" });
    } else if (isLargeScreen) {
      setVideoStyle({ width: "700", height: "397" });
    } else if (isMidScreen) {
      setVideoStyle({ width: "500", height: "283" });
    } else {
      setVideoStyle({ width: "300", height: "170" });
    }
  }, [isMidScreen, isLargeScreen, isXLargeScreen]);

  function _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  return <Youtube videoId={videoId} opts={videoStyle} onReady={_onReady} />;
};

export default YoutubeVideo;
