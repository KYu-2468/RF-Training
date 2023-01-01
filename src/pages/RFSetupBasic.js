import React from "react";

import PageTitle from "../components/Typography/PageTitle";

import YoutubeVideo from "../components/Video/YoutubeVideo";
import VideoPlayer from "../components/Video/VideoPlayerLazyLoad";

const RFSetupBasic = () => {
  return (
    <>
      <PageTitle>RF Setup Basic</PageTitle>

      <PageTitle>Device Basic</PageTitle>
      <div className="my-6 text-2xl">
        <YoutubeVideo videoId="215Wv23xgLA" />
      </div>

      <PageTitle>RF Test Setup Basic</PageTitle>
      <div className="my-6 text-2xl">
        <VideoPlayer video="rf-test-setup-basic.mp4" />
      </div>
    </>
  );
};

export default RFSetupBasic;
