"use client";
import React, { useEffect, useState } from "react";
import { recentWorkCards } from "../constant/index";

interface recentWorkCardMain {
  type: string;
  title: string;
  desc: string;
}

const page = () => {
  const [type, setType] = useState<string>("");

  const [recentWorkCardMain, setRecentWorkCardMain] = useState<
    recentWorkCardMain[]
  >(
    recentWorkCards.map((item) => ({
      type: item.type,
      title: item.title,
      desc: item.desc,
    }))
  );

  const handleType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toLowerCase();

    setType(inputValue);

    setRecentWorkCardMain((prev) =>
      inputValue
        ? prev.filter((item) => item.title.toLowerCase().includes(inputValue))
        : recentWorkCards.map((item) => ({
            type: item.type,
            title: item.title,
            desc: item.desc,
          }))
    );
  };

  useEffect(() => {
    setRecentWorkCardMain((prev) =>
      prev.map((item) => {
        return { type: item.type, title: item.title, desc: item.desc };
      })
    );

    console.log("consoled");
  }, [type]);

  console.log(recentWorkCardMain);

  return (
    <main className="w-[75%] md:max-w-[768px]  mx-auto mt-8">
      <h1 className=" font-semibold text-2xl">Find Your Desired Artworks!</h1>
      <h3 className="">
        All you looking for is in here, make sure you type the precise keywords.
      </h3>

      <form className="mt-4">
        <input
          type={"search"}
          placeholder={"Search Here"}
          className="text-zinc-700 focus:border-zinc-700 px-4 py-2 border-[1.5px] border-zinc-400 w-full rounded-lg"
          onChange={(e) => handleType(e)}
        ></input>

        <div className="flex flex-row gap-4 mt-2">
          <div className="flex flex-row gap-2">
            <input type={"checkbox"} name="animation" />
            <p>Animation</p>
          </div>
          <div className="flex flex-row gap-2">
            <input type={"checkbox"} name="Design" />
            <p>Design</p>
          </div>
          <div className="flex flex-row gap-2">
            <input type={"checkbox"} name="Socmed" />
            <p>Socmed</p>
          </div>
          <div className="flex flex-row gap-2">
            <input type={"checkbox"} name="WebApp" />
            <p>WebbApp</p>
          </div>
        </div>
      </form>

      <div className="grid grid-cols-3 gap-8 mt-4">
        {recentWorkCardMain.map((item, index) => (
          <div key={index} className="bg-zinc-700 text-white p-4 rounded-lg">
            <h1 className="font-bold mb-2 text-xl">{item.type}</h1>
            <h3>{item.title}</h3>
            <p>{item.desc.slice(0, 60)}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default page;
