import React from "react";
import { IoIosStar, IoMdPerson } from "react-icons/io";

const ClientReviewCard = () => {
  return (
    <div
      className="bg-zinc-100 px-8 py-4 h-[20rem] w-[15rem] flex flex-col items-start justify-center text-center gap-4 rounded-lg border-2 border-zinc-900/0 hover:border-zinc-900 transition-all ease-in-out duration-50
    "
    >
      <div className="flex gap-2 text-zinc-900">
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
      </div>
      <div className="text-left font-bold">
        "Our Experience working with Deza Digital was exceptional.""
      </div>
      <div className="p-4 text-white bg-zinc-400 rounded-full self-start">
        <IoMdPerson />
      </div>
      <div className="flex flex-col">
        <h1 className="text-lg text-left font-bold">John Dep</h1>
        <h3 className="text-sm text-left">XYZ Company, Indonesia</h3>
      </div>
    </div>
  );
};

export default ClientReviewCard;
