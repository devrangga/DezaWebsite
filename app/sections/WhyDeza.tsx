import React from "react";
import WhyDezaButton from "../components/WhyDezaButton";

const WhyDeza = () => {
  return (
    <div className="w-[75%] lg:w-[768px] mx-auto flex flex-col gap-4 mt-8">
      <h1 className="text-3xl font-bold">Why Deza?</h1>
      <p>
        We specialize in bringing products and brands to life through
        captivating animations, crafting distinctive brand logos that reflect
        your essence, and delivering high-quality product visualizations that
        enable customers to experience your offerings.
      </p>
      <WhyDezaButton />
    </div>
  );
};

export default WhyDeza;
