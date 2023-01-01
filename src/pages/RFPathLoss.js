import React from "react";

import PageTitle from "../components/Typography/PageTitle";

import YoutubeVideo from "../components/Video/YoutubeVideo";

import Image from "../components/Image/Image";
import splitterDataSheet from "../assets/img/zapd-2+-combiner-data.png";

const RFPathLoss = () => {
  return (
    <>
      <PageTitle>RF Basics</PageTitle>

      <PageTitle>Path Loss Introduction</PageTitle>
      <div className="my-6">
        <YoutubeVideo videoId="-XHWEYxW_c4" />
      </div>

      <PageTitle>Example Splitter Datasheet</PageTitle>
      <div className="my-4 text-2xl">
        <div>
          Datasheet can be found on Mini Circuits{" "}
          <a href="https://www.minicircuits.com/" className="text-blue-700">
            official website
          </a>
        </div>
        In the below example, this ZAPD-2+ {"(2-1)"} splitter has around 3.2 dB
        of loss across its supported frequency. So when a splitter is connected,
        we will need to account for the additional loss by telling the system it
        is using an extra ~3.2 dB of loss
        <div>
          <strong>Note:</strong> RF cables/pigtails also have additional loss
          that needs to be accounted for
        </div>
        <Image src={splitterDataSheet} />
      </div>
    </>
  );
};

export default RFPathLoss;
