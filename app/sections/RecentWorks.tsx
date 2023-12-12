"use client";

import React, { useEffect, useState } from "react";
import { recentWorkButton, recentWorkCards } from "../constant";
import RecentWorkCard from "../components/RecentWorkCard";
import RecentWorkButton from "../components/RecentWorkButton";
import Link from "next/link";
import RecentWorkPopup from "./RecentWorkPopup";
import { recentworkcard } from "../constant/index";

interface isButtonActiveInterface {
  id: number;
  isSelected: boolean;
  label: string;
}

interface cardPopUpDataInterface {
  id: number;
  visible: boolean;
}

const RecentWorks = () => {
  const [cardPopUpData, setCardPopUp] = useState<cardPopUpDataInterface[]>(
    recentWorkCards.map((item: recentworkcard) => {
      return { id: item.id, visible: false };
    })
  );
  const [isCardPopUp, setIsCardPopUp] = useState<boolean>(false);
  const [isButtonActive, setIsButtonActive] = useState<
    isButtonActiveInterface[]
  >(
    recentWorkButton.map((item: recentWorkButton, index: number) => ({
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

  const handleSetVisible = (index: number) => {
    setCardPopUp((prev) =>
      prev.map((item) => {
        return item.id === index
          ? { ...item, visible: !item.visible }
          : { ...item, visible: false };
      })
    );
  };

  const handleIsVisible = (index: number) => {
    const res = cardPopUpData.find((data) => data.id === index);
    return res?.visible;
  };

  const handleClosePopUp = (index: number) => {
    setCardPopUp((prev) =>
      prev.map((item) => {
        return item.id === index ? { ...item, visible: !item.visible } : item;
      })
    );
  };

  console.log(cardPopUpData);
  console.log(handleIsVisible(5));

  return (
    <div className="w-[75%] mx-auto flex flex-col gap-8 mt-8 justify-center items-center text-center">
      <h1 className="text-3xl font-bold">Our Recent Works</h1>
      <div className="flex flex-col gap-4 items-center w-full">
        <button className="bg-zinc-900 text-zinc-50 px-6 py-2 rounded-lg w-[50%]">
          <Link href={"portfos"}>View All</Link>
        </button>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {recentWorkButton.map((item: recentWorkButton, index: number) => (
            <RecentWorkButton
              key={index}
              label={item.label}
              isSelected={isButtonActive[index].isSelected}
              handleSelected={() => handleSelected(index)}
            />
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="grid grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 gap-8">
          {recentWorkCards
            .slice(0, 16)
            .map((item: recentWorkCards, index: number) =>
              item.type === filteredWork[0].label ? (
                <div key={index} className="relative">
                  <RecentWorkCard
                    setVisible={() => handleSetVisible(index)}
                    imgsrc={item.imgsrc}
                  />
                  <RecentWorkPopup
                    closePopUp={() => handleClosePopUp(index)}
                    isVisible={() => handleIsVisible(index)}
                    imgsrc={item.imgsrc}
                    title={item.title}
                    type={item.type}
                    client={item.client}
                    desc={item.desc}
                    date={item.date}
                  />
                </div>
              ) : (
                ""
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default RecentWorks;
