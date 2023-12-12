import { StaticImageData } from "@/node_modules/next/image";
import Image from "next/image";
import React from "react";

interface recentWorkCardProps {
  imgsrc: StaticImageData;
  setVisible: React.MouseEventHandler<HTMLParagraphElement>;
}

const RecentWorkCard: React.FC<recentWorkCardProps> = ({
  setVisible,
  imgsrc,
}) => {
  return (
    <div className="rounded-xl overflow-hidden relative group hover:shadow-xl/50">
      <Image
        src={imgsrc}
        alt="image"
        style={{ width: "100%", height: "100%" }}
        className="group-hover:scale-110 transition-transform ease-in-out"
      />
      <button className="absolute w-full h-full top-0 group-hover:bg-gradient-to-t group-hover:from-zinc-50/20 group-hover:to-zinc-50 backdrop-blur-0 blending group-hover:backdrop-blur-sm flex items-center justify-center text-center transition-all ease-in-out">
        <p
          onClick={setVisible}
          className="rounded-lg hidden items-center justify-center font-medium text-zinc-50 button-gradient px-6 py-2 text-lg group-hover:flex shadow-2xl hover:cursor-pointer w-fit h-fit"
        >
          See Details
        </p>
      </button>
    </div>
  );
};

export default RecentWorkCard;
