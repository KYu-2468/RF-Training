import React from "react";

import PageTitle from "../components/Typography/PageTitle";
import SectionContent from "../components/Typography/SectionContent";

import VideoPlayerNDA from "../components/Video/VideoPlayerNDA";

const RFSetup4GAnritsu = () => {
  return (
    <>
      <PageTitle>Debugging and Log Collections</PageTitle>

      <PageTitle>QXDM Installation</PageTitle>
      <SectionContent>
        <VideoPlayerNDA src="rf-system-setup-4g-anritsu.mp4" />
      </SectionContent>

      <PageTitle>QXDM Logging</PageTitle>
      <SectionContent>
        <VideoPlayerNDA src="rf-system-setup-4g-anritsu.mp4" />
      </SectionContent>
    </>
  );
};

export default RFSetup4GAnritsu;
