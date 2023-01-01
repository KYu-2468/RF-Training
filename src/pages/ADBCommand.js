import React from "react";
import PageTitle from "../components/Typography/PageTitle";
import VideoPlayerNDA from "../components/Video/VideoPlayerNDA";

const ADBCommand = () => {
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
      <PageTitle>ADB Commands</PageTitle>
      <div className="my-6 text-2xl">
        ADB {"(Android Debug Bridge)"}
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
          </li>
          <li>
            <a className="text-blue-700" href={AT_CPIN_URL}>
              AT+CPIN
            </a>
          </li>
          <li>
            <a className="text-blue-700" href={AT_CGDCONT_URL}>
              AT+CGDCONT
            </a>
          </li>
          <li>
            <a className="text-blue-700" href={AT_COPS_URL}>
              AT+COPS
            </a>
          </li>
        </ul>
      </div>
      <VideoPlayerNDA src="at-command-example.mp4" />
    </>
  );
};

export default ADBCommand;
