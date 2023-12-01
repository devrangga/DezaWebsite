import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="fixed z-20 w-[75%] top-10 -translate-x-1/2 left-1/2">
      <div
        className={
          "flex justify-between items-center border-zinc-400 border-[1px] px-6 py-4 rounded-lg backdrop-blur-lg bg-zinc-700/15 relative z-50"
        }
      >
        <Image src={"/images/dezaLogo.svg"} width={25} height={25} />
        <button
          className={`flex flex-col gap-2 ${isMenuOpen ? "transform " : ""}`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <div
            className={`w-7 h-[3px] bg-zinc-50 transition-transfrom duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-[11px]" : ""
            }`}
          ></div>
          <div
            className={`w-7 h-[3px] bg-zinc-50 transition-opacity duration300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-7 h-[3px] bg-zinc-50 transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-[11px]" : ""
            }`}
          ></div>
        </button>
      </div>

      <div
        className={`${
          isMenuOpen
            ? "translate-y-0 opacity-100 h-[100%]"
            : "-translate-y-14 opacity-0 h-0"
        }  justify-center items-center relative z-30 transition-all ease-in-out duration-300 shadow-lg overflow-hidden`}
      >
        <div className="text-lg text-zinc-50 font-semibold text-center py-4 bg-zinc-800 hover:brightness-110 hover:cursor-pointer">
          <Link href={"www.youtube.com"}>About</Link>
        </div>
        <div className="text-lg text-zinc-50 font-semibold text-center py-4 bg-zinc-900 hover:brightness-110 hover:cursor-pointer">
          <Link href={"www.youtube.com"}>Projects</Link>
        </div>
        <div className="text-lg text-zinc-50 font-semibold text-center py-4 bg-zinc-800 hover:brightness-110 hover:cursor-pointer">
          <Link href={"www.youtube.com"}>Reviews</Link>
        </div>
        <div className="text-lg text-zinc-50 font-semibold text-center py-4 bg-zinc-900 hover:brightness-110 hover:cursor-pointer">
          <Link href={"www.youtube.com"}>Faqs</Link>
        </div>
        <div className="text-lg text-zinc-50 font-semibold text-center py-4 bg-zinc-800 hover:brightness-110 hover:cursor-pointer rounded-b-lg">
          <Link href={"www.youtube.com"}>Reach Out</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
