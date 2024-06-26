"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navbarData } from "../constant";
import { navbar } from "../constant/index";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [windowWidth, setWindowWith] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResizeWidth = () => {
      setWindowWith(window.innerWidth);
    };
    window.addEventListener("resize", handleResizeWidth);
    return () => {
      window.removeEventListener("resize", handleResizeWidth);
    };
  }, []);

  const isLarge: boolean = windowWidth > 1024;

  return (
    <section className="fixed z-20 w-[75%] md:max-w-[768px] top-10 -translate-x-1/2 left-1/2">
      {isLarge ? (
        <div
          className={
            "flex justify-between items-center border-zinc-400 border-[1.5px] px-20 py-6 text-base rounded-lg backdrop-blur-lg bg-zinc-950/75 relative z-50 text-zinc-200 hover:text-zinc-50"
          }
        >
          {navbarData.map((item: navbar, index: number) => (
            <Link key={index} href={item.url} className="hover:cursor-pointer">
              {item.title}
            </Link>
          ))}
        </div>
      ) : (
        <div
          className={
            "flex justify-between items-center border-zinc-400 border-[1.5px] px-6 py-4 rounded-lg backdrop-blur-lg bg-zinc-950/75 relative z-50"
          }
        >
          <Image
            src={"/images/dezaLogo.svg"}
            width={25}
            height={25}
            alt={"Deza Logo"}
          />
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
      )}

      <div
        className={`${
          isMenuOpen
            ? "translate-y-0 opacity-100 h-[100%]"
            : "-translate-y-14 opacity-0 h-0"
        }  justify-center items-center relative z-30 transition-all ease-in-out duration-300 shadow-lg overflow-hidden`}
      >
        <div className="text-base text-zinc-300 font-semibold text-center py-4 bg-zinc-900 hover:brightness-125 hover:cursor-pointer rounded-t-base">
          <Link href={"#"}>About</Link>
        </div>
        <div className="text-base text-zinc-300 font-semibold text-center py-4 bg-zinc-800 hover:brightness-125 hover:cursor-pointer">
          <Link href={"#"}>Projects</Link>
        </div>
        <div className="text-base text-zinc-300 font-semibold text-center py-4 bg-zinc-900 hover:brightness-125 hover:cursor-pointer">
          <Link href={"#"}>Reviews</Link>
        </div>
        <div className="text-base text-zinc-300 font-semibold text-center py-4 bg-zinc-800 hover:brightness-125 hover:cursor-pointer">
          <Link href={"#"}>Faqs</Link>
        </div>
        <div className="text-base text-zinc-300 font-semibold text-center py-4 bg-zinc-900 hover:brightness-125 hover:cursor-pointer rounded-b-lg">
          <Link href={"#"}>Reach Out</Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
