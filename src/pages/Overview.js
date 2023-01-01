import React from "react";

import PageTitle from "../components/Typography/PageTitle";

import VideoPlayer from "../components/Video/VideoPlayerLazyLoad";
import VideoPlayerNDA from "../components/Video/VideoPlayerNDA";

function Overview() {
  return (
    <>
      <div
        className="text-red-900
      text-2xl"
      >
        Test
      </div>
      <PageTitle
        className="text-red-900 
        hover:bg-black"
      >
        Overview
      </PageTitle>
      <div>
        <VideoPlayer video="Intro-to-industry.mp4" />
      </div>

      <PageTitle>Testing Overview</PageTitle>
      <div>
        <VideoPlayerNDA src="rf-overview.mp4" />
      </div>
    </>
  );
}

export default Overview;
