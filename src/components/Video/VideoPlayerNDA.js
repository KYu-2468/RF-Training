import React, { useState, useEffect } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, getFileURL } from "../../firebase";

import SectionContent from "../Typography/SectionContent";

import ReactPlayer from "react-player/lazy";

import { useMediaQuery } from "react-responsive";

const VideoPlayerNDA = ({ src }) => {
  const [user] = useAuthState(auth);
  const [url, setURL] = useState("");
  const [videoStyle, setVideoStyle] = useState({});

  useEffect(() => {
    if (!user) return;

    (async () => {
      const link = await getFileURL(src);
      setURL(link);
    })();
  }, [user, src]);

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

  if (!user || !url) {
    return (
      <>
        <SectionContent>
          <div className="text-red-500 font-bold">
            You do not have access to the remaining resource.
            <br />
            Please login with the SGS account!
          </div>
        </SectionContent>
      </>
    );
  }

  return <ReactPlayer {...videoStyle} url={url} controls={true} />;
};

export default VideoPlayerNDA;
