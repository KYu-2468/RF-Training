import React from "react";

import PageTitle from "../components/Typography/PageTitle";
import SectionContent from "../components/Typography/SectionContent";

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
        <YoutubeVideo videoId="DvIU7ilYBK0" />
      </SectionContent>
    </>
  );
}

export default Overview;
