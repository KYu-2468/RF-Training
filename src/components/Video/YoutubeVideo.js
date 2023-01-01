import React, { useState, useEffect } from "react";
import Youtube from "react-youtube";
import { useMediaQuery } from "react-responsive";

const YoutubeVideo = ({ videoId }) => {
  const [videoStyle, setVideoStyle] = useState({});

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1300px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 800px)",
  });

  useEffect(() => {
    if (isDesktopOrLaptop) {
      setVideoStyle({ width: "1000", height: "562" });
    } else if (isTablet) {
      setVideoStyle({ width: "650", height: "366" });
    } else {
      setVideoStyle({ width: "300", height: "170" });
    }
  }, [isDesktopOrLaptop, isTablet]);

  function _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  return <Youtube videoId={videoId} opts={videoStyle} onReady={_onReady} />;
};

export default YoutubeVideo;
