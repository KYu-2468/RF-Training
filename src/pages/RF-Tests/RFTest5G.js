import React from "react";

import PageTitle from "../../components/Typography/PageTitle";
import SectionContent from "../../components/Typography/SectionContent";

import Image from "../../components/Image/Image";
import nrNSATestCase from "../../assets/img/nr-nsa-testcase-1.png";
import nrNSATestCase2 from "../../assets/img/nr-nsa-testcase-2.png";
import nrSATestCase from "../../assets/img/nr-sa-testcase.png";
import nrSATestCase2 from "../../assets/img/nr-sa-testcase-2.png";
import deviceSupportBW from "../../assets/img/device-support-bandwidth.png";

const RFTest5G = () => {
  return (
    <>
      <PageTitle>RF 5G/NR Test Cases</PageTitle>

      <PageTitle>Specification</PageTitle>
      <SectionContent>
        TS 38.521-1 {"(RF - SA (Stand-Alone)) (Only NR bands)"} specifications
        can be found{" "}
        <a
          className="text-blue-700"
          href="https://www.3gpp.org/dynareport/38521-1.htm"
        >
          here
        </a>
        <br />
        TS 36.521-3 {"(RF - NSA (Non-Stand-Alone)) (LTE + NR Bands)"}{" "}
        specifications can be found{" "}
        <a
          className="text-blue-700"
          href="https://www.3gpp.org/dynareport/38521-3.htm"
        >
          here
        </a>
        <br />
        TS 36.533 {"(RRM)"} specifications can be found{" "}
        <a
          className="text-blue-700"
          href="https://www.3gpp.org/dynareport/38533.htm"
        >
          here
        </a>
      </SectionContent>

      <PageTitle>Device Supported Bandwidth Table</PageTitle>
      <SectionContent>
        <div className="mb-3">
          Before configuring the test case, you will need this table
          <br />
          <strong>Note: </strong>Provided by customers
        </div>
        <Image src={deviceSupportBW} />
      </SectionContent>

      <PageTitle>Example 1 {"(NSA)"}</PageTitle>
      <SectionContent>
        <Image src={nrNSATestCase} />
      </SectionContent>

      <PageTitle>Example 2 {"(NSA)"}</PageTitle>
      <SectionContent>
        <Image src={nrNSATestCase2} />
      </SectionContent>

      <PageTitle>Example 3 {"(SA)"}</PageTitle>
      <SectionContent>
        <Image src={nrSATestCase} />
      </SectionContent>

      <PageTitle>Example 4 {"(SA)"}</PageTitle>
      <SectionContent>
        <Image src={nrSATestCase2} />
      </SectionContent>
    </>
  );
};

export default RFTest5G;
