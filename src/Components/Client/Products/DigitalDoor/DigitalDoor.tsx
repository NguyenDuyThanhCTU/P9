import React from "react";
import Section from "./Section/Section";
import { Section1 } from "./Section/Section1";

const DigitalDoor: React.FC = () => {
  return (
    <>
      {/* Introduce section */}
      <Section />
      {/* Feature Section */}
      <Section1 />
    </>
  );
};

export default DigitalDoor;
