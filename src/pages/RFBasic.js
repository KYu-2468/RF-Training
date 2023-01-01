import React from "react";

import PageTitle from "../components/Typography/PageTitle";

import YoutubeVideo from "../components/Video/YoutubeVideo";
import mwTodBm from "../assets/img/mw-dbm.png";

const RFBasic = () => {
  return (
    <>
      <PageTitle>RF Basics</PageTitle>

      <PageTitle>Voltage and Current Introduction</PageTitle>
      <div className="my-6">
        <YoutubeVideo videoId="gOk3pl4hmeQ" />
      </div>

      <PageTitle>Power and Watts Introduction</PageTitle>
      <div className="my-6">
        <YoutubeVideo videoId="VSpB3HivkhY" />
      </div>

      <PageTitle>Milliwatt and dBm Introduction</PageTitle>
      <div className="my-6 text-2xl">
        <strong>Conversion:</strong>
        <div>23 dBm = 200 mW</div>
        <div>20 dBm = 100 mW</div>
        <img src={mwTodBm} alt="mw to dBm formula" />
        <YoutubeVideo videoId="HWjrsWSrzf0" />
      </div>
    </>
  );
};

export default RFBasic;
