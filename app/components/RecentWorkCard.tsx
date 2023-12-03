import Image from "next/image";
import React from "react";

interface recentWorkCardProps {
  title: string;
  type: string;
  client: string;
  desc: string;
  date: string;
  imgsrc: StaticImageData;
}

const RecentWorkCard: React.FC<recentWorkCardProps> = ({
  title,
  type,
  client,
  desc,
  date,
  imgsrc,
}) => {
  return (
    <button className="rounded-xl overflow-hidden relative group hover:cursor-pointer hover:shadow-lg">
      <Image
        src={imgsrc}
        alt="image"
        style={{ width: "100%", height: "100%" }}
        className="group-hover:scale-110 transition-transform ease-in-out"
      />
      <div className="absolute w-full h-full top-0 group-hover:bg-zinc-500/10 backdrop-blur-0 group-hover:backdrop-blur-sm flex items-center justify-center text-center transition-all ease-in-out">
        <p className="rounded-lg hidden items-center justify-center font-medium text-zinc-50 button-gradient px-6 py-2 text-lg group-hover:flex shadow-2xl">
          See Details
        </p>
      </div>
    </button>
  );
};

export default RecentWorkCard;
