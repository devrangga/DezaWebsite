"use client";

import React, { useState } from "react";
import { faqCard } from "../constant/index";

import FaqCard from "../components/FaqCard";

interface isSelectedProps {
  id: number;
  isSelectedd: boolean;
}

const Faq = () => {
  const [isSelected, setIsSelected] = useState<isSelectedProps[]>(
    faqCard.map((item, index) => ({ id: index, isSelectedd: item.selected }))
  );

  const handleClickk = (index: number) => {
    setIsSelected((prev) =>
      prev.map((item) =>
        item.id === index ? { ...item, isSelectedd: !item.isSelectedd } : item
      )
    );
  };

  return (
    <div className="w-[75%] md:max-w-[768px] mx-auto flex flex-col gap-4 mt-8">
      <h1 className="text-3xl font-bold text-center">FAQ&apos;s</h1>
      <div className="flex flex-col gap-8">
        {faqCard.map((item, index) => (
          <FaqCard
            key={index}
            question={item.question}
            answer={item.answer}
            isSelected={isSelected[index].isSelectedd}
            handleClick={() => handleClickk(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
