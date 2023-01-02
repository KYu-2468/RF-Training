import React from "react";

import PageTitle from "../components/Typography/PageTitle";
import SectionContent from "../components/Typography/SectionContent";

import VideoPlayerNDA from "../components/Video/VideoPlayerNDA";
import YoutubeVideo from "../components/Video/YoutubeVideo";

function Overview() {
  return (
    <>
      <PageTitle>Overview</PageTitle>
      <SectionContent>
        <YoutubeVideo videoId="QwtbbrazL-8" />
      </SectionContent>

      <PageTitle>Testing Overview</PageTitle>
      <SectionContent>
        <VideoPlayerNDA src="rf-overview.mp4" />
      </SectionContent>
    </>
  );
}

export default Overview;
