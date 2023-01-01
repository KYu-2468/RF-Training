import React from "react";
import PageTitle from "../components/Typography/PageTitle";

const ManualTesting = () => {
  return (
    <>
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
    </>
  );
};

export default ManualTesting;
