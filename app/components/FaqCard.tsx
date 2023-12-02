import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

interface farCardProps {
  question: string;
  answer: string;
  isSelected: boolean;
  handleClick: any;
}

const FaqCard: React.FC<farCardProps> = ({
  question,
  answer,
  isSelected,
  handleClick,
}) => {
  return (
    <div
      className={`grid grid-rows-[1/2fr_2fr] gap-4 px-6 py-4 rounded-lg ${
        isSelected
          ? "bg-gradient-to-t from-zinc-950 to-zinc-800"
          : "bg-zinc-100"
      } `}
    >
      <div className="grid grid-cols-[7fr_1fr] justify-between items-center">
        <p>{question}</p>
        <button onClick={handleClick}>
          <AiOutlinePlus />
        </button>
      </div>
      <div className="">{answer}</div>
    </div>
  );
};

export default FaqCard;
