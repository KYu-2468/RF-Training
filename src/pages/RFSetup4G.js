import React from "react";

import PageTitle from "../components/Typography/PageTitle";
import SectionTitle from "../components/Typography/SectionTitle";

import Image from "../components/Image/Image";
import rfDevicePortMap from "../assets/img/rf-device-port-map.png";
import rfSystemPort from "../assets/img/rf-system-port-map.png";

import VideoPlayerNDA from "../components/Video/VideoPlayerNDA";

const RFSetup4G = () => {
  return (
    <>
      <PageTitle>RF Setup 4G/LTE</PageTitle>

      <PageTitle>Device Setup</PageTitle>
      <div className="my-6 text-2xl">
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
        <VideoPlayerNDA src="rf-test-setup-4g.mp4" />
      </div>

      <PageTitle>RF Cable Setup</PageTitle>
      <div className="my-6 text-2xl">
        The connection will depend on which band you're testing. Keep in mind,
        Device Main {"(TRx)"} to System Main {"(TRx)"}. If you are testing the
        Low band, you can connect the device's Low band TRx {"(Main)"} port to
        the system main port. You can also use a combiner to combine all the
        device's main ports and connect them to the system's main port. This
        allows you to test different bands continuously without having to switch
        RF cable connections.
        <br />
        <br />
        <SectionTitle>Example Device Port Map</SectionTitle>
        <Image src={rfDevicePortMap} alt="" />
        <br />
        <br />
        <SectionTitle>Example System Port Map {"(TP104 / TP149)"}</SectionTitle>
        The top left side is main, the bottom left side is diversity 1. The top
        right is diversity 2, and the bottom right is diversity 3.
        <Image src={rfSystemPort} alt="" />
        <VideoPlayerNDA src="rf-cable-setup-4g.mp4" />
      </div>

      <PageTitle>System Setup</PageTitle>
      <div className="my-6 text-2xl">
        <SectionTitle>Anritsu Setup {"(TP104 / TP149)"}</SectionTitle>
        <VideoPlayerNDA src="rf-system-setup-4g-anritsu.mp4" />
      </div>

      <div className="my-6 text-2xl">
        <SectionTitle>R&S Setup {"(TP098)"}</SectionTitle>
        <VideoPlayerNDA src="rf-system-setup-4g-rns.mp4" />
      </div>
    </>
  );
};

export default RFSetup4G;
