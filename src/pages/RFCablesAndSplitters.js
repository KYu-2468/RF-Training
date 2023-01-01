import React from "react";

import PageTitle from "../components/Typography/PageTitle";

import Image from "../components/Image/Image";
import rfCables from "../assets/img/rf-cables.jpeg";
import rfSplitters from "../assets/img/rf-combiners.jpeg";
import phone1 from "../assets/img/phone-1.png";
import smaAdapters from "../assets/img/sma-adapter.jpeg";

const RFCablesAndSplitters = () => {
  return (
    <>
      <PageTitle>RF Cables and Splitters</PageTitle>

      <PageTitle>Cables/Pigtails</PageTitle>

      <div className="my-4 text-2xl">
        RF cables connect the device, usually a phone, to the system
        ports/cables
        <Image src={rfCables} alt="RF cables" />
      </div>

      <PageTitle>Cables/Pigtails connected to Device</PageTitle>

      <div className="my-4 text-2xl">
        Once the tip of the RF cables are connected to the device, we can
        connect the tail to the system ports/cables
        <Image src={phone1} alt="Phone" />
      </div>

      <PageTitle>SMA Adapters</PageTitle>

      <div className="my-4 text-2xl">
        <Image src={smaAdapters} alt="SMA Adapters" />
      </div>

      <PageTitle>Splitters/Combiners</PageTitle>

      <div className="my-4 text-2xl">
        Sometimes we want to split or combine the signal. Splitters/combiners
        help us split/combine signals. Below is a 1 to 2 combiner, which can
        split one signal into two signals and/or combine two signals into one
        signal
        <Image src={rfSplitters} alt="RF Splitters" />
      </div>
    </>
  );
};

export default RFCablesAndSplitters;
