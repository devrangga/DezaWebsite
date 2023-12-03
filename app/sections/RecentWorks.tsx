"use client";

import React, { useState } from "react";
import { recentWorkButton, recentWorkCards } from "../constant";
import RecentWorkCard from "../components/RecentWorkCard";
import RecentWorkButton from "../components/RecentWorkButton";

interface isButtonActiveInterface {
  id: number;
  isSelected: boolean;
  label: string;
}

const RecentWorks = () => {
  const [isButtonActive, setIsButtonActive] = useState<
    isButtonActiveInterface[]
  >(
    recentWorkButton.map((item, index) => ({
      id: index,
      isSelected: item.isSelected,
      label: item.label,
    }))
  );

  const handleSelected = (i: number) => {
    setIsButtonActive((prev) =>
      prev.map((item, index) => ({ ...item, isSelected: i === index }))
    );
  };

  const filteredWork = isButtonActive.filter(
    (button) => button.isSelected === true
  );

  return (
    <div className="w-[75%] mx-auto flex flex-col gap-8 mt-8 justify-center items-center text-center">
      <h1 className="text-3xl font-bold">Our Recent Works</h1>
      <button className="bg-zinc-900 text-zinc-50 px-6 py-3 rounded-lg w-[50%]">
        View All
      </button>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {recentWorkButton.map((item, index) => (
          <RecentWorkButton
            key={index}
            label={item.label}
            isSelected={isButtonActive[index].isSelected}
            handleSelected={() => handleSelected(index)}
          />
        ))}
      </div>

      <div className="grid grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 gap-8">
        {recentWorkCards.map((item, index) =>
          item.type === filteredWork[0].label ? (
            <RecentWorkCard
              key={index}
              imgsrc={item.imgsrc}
              title={item.title}
              type={item.type}
              client={item.client}
              desc={item.desc}
              date={item.date}
            />
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default RecentWorks;
