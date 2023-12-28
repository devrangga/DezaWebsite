import Image, { StaticImageData } from "@/node_modules/next/image";
import React from "react";
import { ImCross } from "react-icons/im";

interface RecentWorkPopupProps {
  title: string;
  type: string;
  client: string;
  desc: string;
  date: string;
  imgsrc: StaticImageData;
  isVisible: () => boolean;
  closePopUp: () => boolean;
}

const RecentWorkPopup: React.FC<RecentWorkPopupProps> = ({
  closePopUp,
  isVisible,
  title,
  type,
  client,
  desc,
  date,
  imgsrc,
}) => {
  return (
    <div
      className={`${
        isVisible() ? "grid grid-rows-2" : "hidden opacity-0"
      }  h-[70%] w-[75%] md:max-w-[768px] md:h-[60%] bg-gradient-to-t from-zinc-950 to-zinc-800 text-zinc-50 shadow-2xl rounded-xl overflow-hidden p-4  fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50`}
    >
      <div className="overflow-hidden rounded-lg shadow-2xl relative">
        <Image
          src={imgsrc}
          alt="image"
          className="object-cover w-full h-full hover:scale-110 transition-transform ease-in-out "
        />
        <button
          onClick={closePopUp}
          className="absolute text-zinc-200 top-3 right-5 aspect-square bg-zinc-800 h-[30px] w-[30px] flex items-center justify-center rounded-md font-medium "
        >
          <ImCross />
        </button>
      </div>
      <div className="flex flex-col text-start pt-4 gap-2">
        <h3 className="text-xs text-zinc-500">{date}</h3>
        <h1 className="text-lg font-bold text-zinc-50">{title}</h1>
        <div className="flex flex-row gap-2 items-center">
          <h3 className="text-sm text-zinc-300 bg-zinc-800 px-3 py-1 rounded-md">
            {type}
          </h3>
          <div className="flex flex-row gap-2">
            <p className="text-sm text-zinc-300 bg-zinc-800 px-3 py-1 rounded-md">
              {client}
            </p>
          </div>
        </div>
        <h4 className="text-sm text-zinc-50 h-full overflow-y-scroll">
          {desc}
        </h4>
      </div>
    </div>
  );
};

export default RecentWorkPopup;
