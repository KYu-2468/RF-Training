import React from "react";

import PageTitle from "../components/Typography/PageTitle";

import Image from "../components/Image/Image";
import channelBandwidth from "../assets/img/channel-bandwidth.png";
import frequencyRange from "../assets/img/low-mid-high-frequency-range.png";

const RFTestBasic = () => {
  return (
    <>
      <PageTitle>RF Test Cases</PageTitle>

      <PageTitle>Specification</PageTitle>
      <div className="my-6 text-2xl">
        Specifications are the rules and requirements that propose/define how
        things {"(devices, network, etc)"} should operate.
        <br />
        <br />
        In our case, specifications define the purpose of each test case, how
        the test case should be executed, and the requirements that need to be
        fulfilled to pass the test case.
        <br /> <br />
        3GPP 4G/LTE specifications can be found{" "}
        <a
          className="text-blue-700"
          href="https://www.3gpp.org/dynareport?code=36-series.htm"
        >
          here
        </a>
        <br />
        3GPP 5G/NR specifications can be found{" "}
        <a
          className="text-blue-700"
          href="https://www.3gpp.org/dynareport?code=38-series.htm"
        >
          here
        </a>
      </div>

      <PageTitle>Test Case</PageTitle>
      <div className="my-6 text-2xl">
        Before the launch of a product {"(device, phone, etc)"}, the product
        needs to pass millions of test cases to be considered safe.
        <br />
        <br />
        In RF, one of our main focuses is power, dBm. We want to ensure that the
        device is transmitting and receiving within an acceptable range defined
        in the specifications. <br /> <strong>Note: </strong>Some topics, like
        spurious emissions, will not be covered on this website.
      </div>

      <PageTitle>Band</PageTitle>
      <div className="my-6 text-2xl">
        Please refer to RF Basic section 2 - RF Frequency
      </div>

      <PageTitle>Channel Bandwidth</PageTitle>
      <div className="my-6 text-2xl">
        The RF bandwidth supporting a single E-UTRA RF carrier with the
        transmission bandwidth configured in the uplink or downlink of a cell.
        The channel bandwidth is measured in MHz and is used as a reference for
        transmitter and receiver RF requirements.
        <br />
        <br />
        <strong>Note:</strong>The greater the value, the wider the transmission{" "}
        {'"block"'} and thus improving the throughput
        <br />
        Common channel bandwidths: 5MHz, 10MHz, 15MHz, 20MHz, 40MHz, 100MHz.
        <Image src={channelBandwidth} alt="Channel Bandwidth" />
      </div>

      <PageTitle>Test Frequency Range</PageTitle>
      <div className="my-6 text-2xl">
        There are 3 test frequency range {"(Low, Mid, High)"}, usually we want
        to select all 3 of them for all test cases except special cases:
        <Image src={frequencyRange} alt="" />
      </div>

      <PageTitle>Temperature</PageTitle>
      <div className="my-6 text-2xl">
        As its name implies, there are 3 temperatures we test:
        <ul>
          <li>Nominal: 25° Celsius</li>
          <li>Low : -10° Celsius</li>
          <li>High : 55° Celsius</li>
        </ul>
      </div>

      <PageTitle>Voltage</PageTitle>
      <div className="my-6 text-2xl">
        As its name implies, there are 3 voltage we test:
        <ul>
          <li>Nominal - Usually provided by customers</li>
          <li>Low - Usually provided by customers</li>
          <li>High - Usually provided by customers</li>
        </ul>
      </div>

      <PageTitle>Power Class</PageTitle>
      <div className="my-6 text-2xl">
        The high power UE{"(s)"} work items specifices solutions to address
        extending cell coverage area and improving the experience of cell edge
        users by increasing the transmit power of UE. <br />
        <strong>Note: </strong>By default, we test in power class 3 unless
        otherwise specified in the test case.
        <br />
        <br />
        <ul>
          <li>
            Power Class 3 {"(PC3)"} - 23dBm {"(200 mW)"}
          </li>
          <li>
            Power Class 2 {"(PC2)"} - 26dBm {"(400 mW)"}
          </li>
        </ul>
      </div>
    </>
  );
};

export default RFTestBasic;
