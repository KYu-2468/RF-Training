import React from "react";
import PageTitle from "../components/Typography/PageTitle";
import VideoPlayerNDA from "../components/Video/VideoPlayerNDA";

const ATCommand = () => {
  const M2M_SUPPORT_URL =
    "https://m2msupport.net/m2msupport/software-and-at-commands-for-m2m-modules/";

  const AT_CFUN_URL =
    "https://m2msupport.net/m2msupport/atcfun-set-phone-functionality/";

  const AT_CPIN_URL = "https://m2msupport.net/m2msupport/atcpin-enter-pin/";

  const AT_CGDCONT_URL =
    "https://m2msupport.net/m2msupport/atcgdcont-define-pdp-context/";

  const AT_COPS_URL =
    "https://m2msupport.net/m2msupport/atcops-plmn-selection/";

  return (
    <>
      <PageTitle>AT Commands</PageTitle>
      <div className="my-6 text-2xl">
        AT commands provides interface to interact with the module to perform
        variety of tasks such as getting device/manufacturer information,
        send/receive phone calls, initiate data calls, access the SIM
        information that is attached to the module, get network information such
        as signal strength, registration status, network speed etc. Some of the
        AT commands defined in the specification are optional. <br />
        Additional information can be found{" "}
        <a className="text-blue-700" href={M2M_SUPPORT_URL}>
          here
        </a>
      </div>
      <div className="my-6 text-2xl">
        Common AT commands:
        <ul>
          <li>
            <a className="text-blue-700" href={AT_CFUN_URL}>
              AT+CFUN
            </a>{" "}
            - sets the level of functionality of device
          </li>
          <li>
            <a className="text-blue-700" href={AT_CPIN_URL}>
              AT+CPIN
            </a>{" "}
            - check SIM status
          </li>
          <li>
            <a className="text-blue-700" href={AT_CGDCONT_URL}>
              AT+CGDCONT
            </a>{" "}
            - set APN
          </li>
          <li>
            <a className="text-blue-700" href={AT_COPS_URL}>
              AT+COPS
            </a>{" "}
            - forces the mobile terminal to select and register the GSM/UMTS/EPS
            network
          </li>
        </ul>
      </div>
      <VideoPlayerNDA src="at-command-example.mp4" />
    </>
  );
};

export default ATCommand;
