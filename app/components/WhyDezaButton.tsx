import React from "react";
import { MdArrowOutward } from "react-icons/md";

const WhyDezaButton = () => {
  return (
    <div className="flex flex-row button-gradient w-fit px-4 py-2 text-white justify-center items-center rounded-full">
      <p>Get Started</p>
      <div className="arrow">
        <MdArrowOutward className="scale-125" />
      </div>
    </div>
  );
};

export default WhyDezaButton;
