import React from "react";

import PageTitle from "../../components/Typography/PageTitle";
import SectionContent from "../../components/Typography/SectionContent";

import YoutubeVideo from "../../components/Video/YoutubeVideo";
import mwTodBm from "../../assets/img/mw-dbm.png";

const RFBasic = () => {
  return (
    <>
      <PageTitle>RF Basics</PageTitle>

      <PageTitle>Voltage and Current Introduction</PageTitle>
      <SectionContent>
        <YoutubeVideo videoId="gOk3pl4hmeQ" />
      </SectionContent>

      <PageTitle>Power and Watts Introduction</PageTitle>
      <SectionContent>
        <YoutubeVideo videoId="VSpB3HivkhY" />
      </SectionContent>

      <PageTitle>Milliwatt and dBm Introduction</PageTitle>
      <SectionContent>
        <strong>Conversion:</strong>
        <div>23 dBm = 200 mW</div>
        <div>20 dBm = 100 mW</div>
        <img src={mwTodBm} alt="mw to dBm formula" />
        <YoutubeVideo videoId="HWjrsWSrzf0" />
      </SectionContent>
    </>
  );
};

export default RFBasic;
