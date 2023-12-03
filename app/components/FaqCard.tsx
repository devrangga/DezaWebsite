import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

interface FaqCardProps {
  question: string;
  answer: string;
  isSelected: boolean;
  handleClick: () => void;
}

const FaqCard: React.FC<FaqCardProps> = ({
  question,
  answer,
  isSelected,
  handleClick,
}) => {
  return (
    <div
      className={`grid items-center grid-rows-[1/2fr] gap-4 p-6 rounded-lg transition-transform duration-300 ease-in-out overflow-hidden ${
        isSelected
          ? "bg-gradient-to-t from-zinc-950 to-zinc-800 text-white [1/2fr_2fr]"
          : "bg-zinc-100 text-zinc-900  "
      }`}
    >
      <div className="grid grid-cols-[7fr,1fr] justify-between items-center">
        <p>{question}</p>
        <button
          onClick={handleClick}
          className={`${
            isSelected ? "rotate-45" : "rotate-0"
          } origin-center flex items-center justify-center transition-transform ease-in-out scale-125  justify-self-end mr-2`}
        >
          <AiOutlinePlus />
        </button>
      </div>
      {isSelected && <div className="">{answer}</div>}
    </div>
  );
};

export default FaqCard;
