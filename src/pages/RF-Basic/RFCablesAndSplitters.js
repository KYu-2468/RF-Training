import React from "react";

import PageTitle from "../../components/Typography/PageTitle";
import SectionContent from "../../components/Typography/SectionContent";

import Image from "../../components/Image/Image";
import rfCables from "../../assets/img/rf-cables.jpeg";
import rfSplitters from "../../assets/img/rf-combiners.jpeg";
import phone1 from "../../assets/img/phone-1.png";
import smaAdapters from "../../assets/img/sma-adapter.jpeg";

const RFCablesAndSplitters = () => {
  const imageStyle = { width: "650", height: "366" };
  return (
    <>
      <PageTitle>RF Cables and Splitters</PageTitle>

      <PageTitle>Cables/Pigtails</PageTitle>
      <SectionContent>
        <div className="mb-3">
          RF cables connect the device, usually a phone, to the system
          ports/cables
        </div>
        <Image src={rfCables} alt="RF cables" {...imageStyle} />
      </SectionContent>

      <PageTitle>Cables/Pigtails connected to Device</PageTitle>
      <SectionContent>
        <div className="mb-3">
          Once the tip of the RF cables are connected to the device, we can
          connect the tail to the system ports/cables
        </div>
        <Image src={phone1} alt="Phone" {...imageStyle} />
      </SectionContent>

      <PageTitle>SMA Adapters</PageTitle>
      <SectionContent>
        <Image src={smaAdapters} alt="SMA Adapters" {...imageStyle} />
      </SectionContent>

      <PageTitle>Splitters/Combiners</PageTitle>
      <SectionContent>
        <div className="mb-3">
          Sometimes we want to split or combine the signal. Splitters/combiners
          help us split/combine signals. Below is a 1 to 2 combiner, which can
          split one signal into two signals and/or combine two signals into one
          signal
        </div>
        <Image src={rfSplitters} alt="RF Splitters" {...imageStyle} />
      </SectionContent>
    </>
  );
};

export default RFCablesAndSplitters;
