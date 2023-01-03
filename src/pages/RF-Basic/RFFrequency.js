import React from "react";

import PageTitle from "../../components/Typography/PageTitle";
import SectionContent from "../../components/Typography/SectionContent";

import Image from "../../components/Image/Image";
import lteFrequency from "../../assets/img/lte-frequency.png";
import nrFrequency from "../../assets/img/nr-frequency.png";

const LTE_FREQUENCY_URL = "https://en.wikipedia.org/wiki/LTE_frequency_bands";
const NR_FREQUENCY_URL = "https://en.wikipedia.org/wiki/5G_NR_frequency_bands";

const RFFrequency = () => {
  return (
    <>
      <PageTitle>RF Frequency Bands</PageTitle>

      <PageTitle>
        <a href={LTE_FREQUENCY_URL}>
          4G/LTE {"(Long-Term Evolution)"} Frequency Band
        </a>
      </PageTitle>

      <SectionContent>
        All 4G/LTE frequency band can be found{" "}
        <a className="text-blue-700" href={LTE_FREQUENCY_URL}>
          here
        </a>
        <div className="py-2">
          <strong>Low Band operates around ~900 MHz</strong>
          <ul>
            <li>Band 5 {"(FDD5)"} operates at around 850 MHz</li>
            <li>Band 13 {"(FDD13)"} operates at around 700 MHz</li>
          </ul>
          <br />
          <strong>Mid Band operates around ~1900 MHz</strong>
          <ul>
            <li>Band 1 {"(FDD1)"} operates at around 2100 MHz</li>
            <li>Band 2 {"(FDD2)"} operates at around 1900 MHz</li>
          </ul>
          <br />
          <strong>High Band operates around ~2500 MHz</strong>
          <ul>
            <li>Band 40 {"(TDD40)"} operates at around 2300 MHz</li>
            <li>Band 41 {"(TDD41)"} operates at around 2500 MHz</li>
          </ul>
        </div>
        <Image src={lteFrequency} alt="LTE Frequency Band" />
      </SectionContent>

      <PageTitle>
        <a href={NR_FREQUENCY_URL}>5G/NR {"(New Radio)"} Frequency Band</a>
      </PageTitle>

      <SectionContent>
        All 5G/NR frequency band can be found{" "}
        <a className="text-blue-700" href={NR_FREQUENCY_URL}>
          here
        </a>
        <div className="py-2">
          <strong>Low Band operates around ~900 MHz</strong>
          <ul>
            <li>Band n5 {"(n5)"} operates at around 850 MHz</li>
          </ul>
          <br />
          <strong>Mid Band operates around ~1900 MHz</strong>
          <ul>
            <li>Band n2 {"(n2)"} operates at around 1900 MHz</li>
            <li>Band n66 {"(n66)"} operates at around 1700 MHz</li>
          </ul>
          <br />
          <strong>High Band operates around ~2500 MHz</strong>
          <ul>
            <li>Band n41 {"(n41)"} operates at around 2500 MHz</li>
          </ul>
          <br />
          <strong>Ultra-High Band operates around ~3000+ MHz</strong>
          <ul>
            <li>Band n48 {"(n48)"} operates at around 3500 MHz</li>
          </ul>
        </div>
        <Image src={nrFrequency} alt="NR Frequency Band" />
      </SectionContent>
    </>
  );
};

export default RFFrequency;
