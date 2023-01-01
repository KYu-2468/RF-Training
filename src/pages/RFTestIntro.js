import React from "react";

import PageTitle from "../components/Typography/PageTitle";

import VideoPlayerNDA from "../components/Video/VideoPlayerNDA";

const RFTestBasic = () => {
  return (
    <>
      <PageTitle>RF Test Introduction</PageTitle>

      <PageTitle>Introduction</PageTitle>
      <div className="my-6 text-2xl">
        <VideoPlayerNDA src="rf-test-intro.mp4" />
      </div>

      <PageTitle>Finding Test Cases</PageTitle>
      <div className="my-6 text-2xl">
        <VideoPlayerNDA src="rf-get-test-case.mp4" />
      </div>
    </>
  );
};

export default RFTestBasic;
