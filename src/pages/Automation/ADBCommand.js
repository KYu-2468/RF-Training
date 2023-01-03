import React from "react";
import PageTitle from "../../components/Typography/PageTitle";
import SectionContent from "../../components/Typography/SectionContent";

import VideoPlayerNDA from "../../components/Video/VideoPlayerNDA";

const ADBCommand = () => {
  const ADB_URL =
    "https://www.xda-developers.com/install-adb-windows-macos-linux/";
  return (
    <>
      <PageTitle>ADB Commands</PageTitle>
      <SectionContent>
        A great read for ADB {"(Android Debug Bridge)"} can be found here{" "}
        <a className="text-blue-700" href={ADB_URL}>
          here
        </a>
      </SectionContent>
      <SectionContent>
        Common ADB commands:
        <ul>
          <li>adb devices - check connected devices</li>
          <li>adb reboot - reboot connected device</li>
        </ul>
      </SectionContent>
      <VideoPlayerNDA src="at-command-example.mp4" />
    </>
  );
};

export default ADBCommand;
