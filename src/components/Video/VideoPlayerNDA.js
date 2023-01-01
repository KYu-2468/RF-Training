import React, { useState, useEffect } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, getFileURL } from "../../firebase";

import PageTitle from "../Typography/PageTitle";

import ReactPlayer from "react-player/lazy";

const VideoPlayerNDA = ({ src }) => {
  const videoTailwindStyle = "w-80 h-fit sm:w-5/6";
  const [user] = useAuthState(auth);
  const [url, setURL] = useState("");

  useEffect(() => {
    if (!user) return;

    (async () => {
      const link = await getFileURL(src);
      setURL(link);
    })();
  }, [user, src]);

  if (!user || !url) {
    return (
      <>
        <PageTitle>
          You do not have access to the remaining resource. Please login with
          the SGS account!
        </PageTitle>
      </>
    );
  }

  return (
    <ReactPlayer className={videoTailwindStyle} url={url} controls={true} />
  );
};

export default VideoPlayerNDA;
