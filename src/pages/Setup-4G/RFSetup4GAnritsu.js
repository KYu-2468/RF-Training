import React from "react";
import { Link } from "react-router-dom";

import PageTitle from "../../components/Typography/PageTitle";
import SectionContent from "../../components/Typography/SectionContent";

import VideoPlayerNDA from "../../components/Video/VideoPlayerNDA";

const RFSetup4GAnritsu = () => {
  return (
    <>
      <PageTitle>RF Anritsu Setup {"(TP104 / TP149)"}</PageTitle>
      <SectionContent>
        Please complete the device setup and RF cable setup in{" "}
        <Link
          className="text-blue-500 dark:text-blue-500 hover:underline"
          to="/app/rf-setup-basic"
        >
          RF Setup Basic
        </Link>
      </SectionContent>

      <PageTitle>Adding Test Cases</PageTitle>
      <SectionContent>
        <VideoPlayerNDA src="rf-system-setup-4g-anritsu.mp4" />
      </SectionContent>

      <PageTitle>EUT Setup</PageTitle>
      <SectionContent>
        <VideoPlayerNDA src="rf-system-setup-4g-anritsu.mp4" />
      </SectionContent>

      <PageTitle>Cable Loss Setup</PageTitle>
      <SectionContent>
        <VideoPlayerNDA src="rf-system-setup-4g-anritsu.mp4" />
      </SectionContent>

      <PageTitle>Automation Setup</PageTitle>
      <SectionContent>
        <VideoPlayerNDA src="rf-system-setup-4g-anritsu.mp4" />
      </SectionContent>

      <PageTitle>Test Case Setup</PageTitle>
      <SectionContent>
        <VideoPlayerNDA src="rf-system-setup-4g-anritsu.mp4" />
      </SectionContent>

      <PageTitle>CA Test Case Setup</PageTitle>
      <SectionContent>
        <VideoPlayerNDA src="rf-system-setup-4g-anritsu.mp4" />
      </SectionContent>
    </>
  );
};

export default RFSetup4GAnritsu;
