import React from "react";
import { Link } from "react-router-dom";

import PageTitle from "../../components/Typography/PageTitle";
import SectionContent from "../../components/Typography/SectionContent";

import VideoPlayerNDA from "../../components/Video/VideoPlayerNDA";

const RFSetup5GAnritsu = () => {
  return (
    <>
      <PageTitle>RF Setup 5G/NR</PageTitle>
      <SectionContent>
        Please review the device setup and RF cable setup section in{" "}
        <Link
          className="text-blue-500 dark:text-blue-500 hover:underline"
          to="/app/rf-setup-4g-basic"
        >
          4G RF Setup Basic
        </Link>
      </SectionContent>

      <PageTitle>Anritsu Setup {"(TP104 / TP149)"}</PageTitle>
      <SectionContent>
        <VideoPlayerNDA src="rf-system-setup-4g-anritsu.mp4" />
      </SectionContent>
    </>
  );
};

export default RFSetup5GAnritsu;
