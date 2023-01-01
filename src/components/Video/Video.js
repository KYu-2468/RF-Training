import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const Video = ({ src }) => {
  const [videoStyle, setVideoStyle] = useState({});

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1200px)",
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

  return (
    <>
      <video src={src} {...videoStyle} controls="controls" />
    </>
  );
};

export default Video;
