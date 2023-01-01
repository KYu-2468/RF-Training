import React from "react";

import PageTitle from "../components/Typography/PageTitle";

import Image from "../components/Image/Image";
import lteNominalTestCase from "../assets/img/lte-nominal-testcase.png";
import lteLowTempTestCase from "../assets/img/lte-low-temp-testcase.png";
import lteHighTempTestCase from "../assets/img/lte-high-temp-testcase.png";

const RFTest4G = () => {
  return (
    <>
      <PageTitle>RF 4G/LTE Test Cases</PageTitle>

      <PageTitle>Specification</PageTitle>
      <div className="my-6 text-2xl">
        TS 36.521-1 {"(RF)"} specifications can be found{" "}
        <a
          className="text-blue-700"
          href="https://www.3gpp.org/dynareport/36521-1.htm"
        >
          here
        </a>
        <br />
        TS 36.521-3 {"(RRM)"} specifications can be found{" "}
        <a
          className="text-blue-700"
          href="https://www.3gpp.org/dynareport/36521-3.htm"
        >
          here
        </a>
      </div>

      <PageTitle>Example 1</PageTitle>
      <div className="my-6 text-2xl">
        <Image src={lteNominalTestCase} />
      </div>

      <PageTitle>Example 2</PageTitle>
      <div className="my-6 text-2xl">
        <Image src={lteLowTempTestCase} />
      </div>

      <PageTitle>Example 3</PageTitle>
      <div className="my-6 text-2xl">
        <Image src={lteHighTempTestCase} />
      </div>
    </>
  );
};

export default RFTest4G;
