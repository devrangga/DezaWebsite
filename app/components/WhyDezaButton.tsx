import React from "react";
import { MdArrowOutward } from "react-icons/md";

const WhyDezaButton = () => {
  return (
    <button className="flex flex-row button-gradient w-fit px-4 py-2 text-white justify-center items-center rounded-lg">
      <p>Get Started</p>
      <div className="arrow">
        <MdArrowOutward className="scale-125" />
      </div>
    </button>
  );
};

export default WhyDezaButton;
