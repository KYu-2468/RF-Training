import React from "react";

import PageTitle from "../../components/Typography/PageTitle";
import SectionContent from "../../components/Typography/SectionContent";

import Image from "../../components/Image/Image";
import rfDevicePortMap from "../../assets/img/rf-device-port-map.png";
import rfSystemPort from "../../assets/img/rf-system-port-map.png";

import VideoPlayerNDA from "../../components/Video/VideoPlayerNDA";

const RFSetup4GBasic = () => {
  return (
    <>
      <PageTitle>RF Setup 4G/LTE</PageTitle>

      <PageTitle>Device Setup</PageTitle>
      <SectionContent>
        <SectionContent>
          <ul>
            <li>1. Find Device</li>
            <li>2. Insert SIM Card</li>
            <li>3. Glue RF cable to device</li>
            <li>4. Turn off Wi-Fi</li>
            <li>5. Turn off Bluetooth</li>
            <li>6. Turn off Mobile Data</li>
            <li>7. Set network to global</li>
            <li>8. Turn off VoLTE {"(if applicable)"}</li>
            <li>
              9. Turn off IMS{" "}
              {"(Depends on device, ask customer for instruction)"}
            </li>
            <li>
              10. Enable IMS Test Mode{" "}
              {"(Depends on device, ask customer for instruction)"}
            </li>
          </ul>
        </SectionContent>
        <VideoPlayerNDA src="rf-test-setup-4g.mp4" />
      </SectionContent>

      <PageTitle>RF Cable Setup</PageTitle>
      <SectionContent>
        The connection will depend on which band you're testing. Keep in mind,
        Device Main {"(TRx)"} to System Main {"(TRx)"}. If you are testing the
        Low band, you can connect the device's Low band TRx {"(Main)"} port to
        the system main port. You can also use a combiner to combine all the
        device's main ports and connect them to the system's main port. This
        allows you to test different bands continuously without having to switch
        RF cable connections.
      </SectionContent>

      <PageTitle>Example Device Port Map</PageTitle>
      <SectionContent>
        <Image src={rfDevicePortMap} alt="" />
      </SectionContent>

      <PageTitle>Example System Port Map {"(TP104 / TP149)"}</PageTitle>
      <SectionContent>
        The top left side is main, the bottom left side is diversity 1. The top
        right is diversity 2, and the bottom right is diversity 3.
        <br /> <strong>Note: </strong> Usually, the system ports are labeled.
      </SectionContent>
      <SectionContent>
        <Image src={rfSystemPort} alt="" />
      </SectionContent>
      <SectionContent>
        <VideoPlayerNDA src="rf-cable-setup-4g.mp4" />
      </SectionContent>
    </>
  );
};

export default RFSetup4GBasic;
