import React from "react";
import Title from "../common/title/Title";
import PriceCard from "../pricing/PriceCard";

const Hprice = () => {
  return (
    <>
      <section className="hprice padding">
        <Title subtitle="Our Pricing" title="Pricing & packages" />
        <div className="price container grid">
          <PriceCard />
        </div>
      </section>
    </>
  );
};

export default Hprice;
