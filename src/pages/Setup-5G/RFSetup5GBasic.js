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
          5G RF Setup Basic
        </Link>
      </SectionContent>

      <PageTitle>5G Example Device RF Port Map</PageTitle>
      <SectionContent>
        <VideoPlayerNDA src="" />
      </SectionContent>
    </>
  );
};

export default RFSetup5GAnritsu;
