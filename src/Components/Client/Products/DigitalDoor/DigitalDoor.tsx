import React from "react";
import Section from "./Section/Section";
import { Section1 } from "./Section/Section1";
import ProductDisplay from "../Items/ProductDisplay";
import { useData } from "../../../../Context/DataProviders";

const DigitalDoor: React.FC = () => {
  const { Products, productTypes } = useData();
  console.log(productTypes);
  return (
    <>
      {/* Introduce section */}
      <Section />
      {/* Feature Section */}
      <Section1 />

      <ProductDisplay id="" />
      {productTypes
        .filter((item: any) => item.parentUrl === "khoa-cua-dien-tu")
        .map((items: any) => (
          <>
            {console.log(items)}
            <ProductDisplay id={items.typeUrl} />
          </>
        ))}
    </>
  );
};

export default DigitalDoor;
