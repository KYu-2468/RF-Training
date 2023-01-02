import React from "react";

import PageTitle from "../../components/Typography/PageTitle";
import SectionContent from "../../components/Typography/SectionContent";

import YoutubeVideo from "../../components/Video/YoutubeVideo";

const RFSetupIntro = () => {
  return (
    <>
      <PageTitle>RF Setup Basic</PageTitle>

      <PageTitle>Device Intro</PageTitle>
      <SectionContent>
        <YoutubeVideo videoId="215Wv23xgLA" />
      </SectionContent>

      <PageTitle>RF Test Setup Intro</PageTitle>
      <SectionContent>
        <YoutubeVideo videoId="tJOPr9BL9mc" />
      </SectionContent>
    </>
  );
};

export default RFSetupIntro;
