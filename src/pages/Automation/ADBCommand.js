import React from "react";
import PageTitle from "../../components/Typography/PageTitle";
import SectionContent from "../../components/Typography/SectionContent";

import VideoPlayerNDA from "../../components/Video/VideoPlayerNDA";

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
      <SectionContent>
        ADB {"(Android Debug Bridge)"}
        <a className="text-blue-700" href={M2M_SUPPORT_URL}>
          here
        </a>
      </SectionContent>
      <SectionContent>
        Common ADB commands:
        <ul>
          <li>
            <a className="text-blue-700" href={AT_CFUN_URL}>
              adb devices
            </a>{" "}
          </li>
          <li>
            <a className="text-blue-700" href={AT_CPIN_URL}>
              adb reboot
            </a>
          </li>
        </ul>
      </SectionContent>
      <VideoPlayerNDA src="at-command-example.mp4" />
    </>
  );
};

export default ADBCommand;
