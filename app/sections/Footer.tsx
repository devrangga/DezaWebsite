import Image from "next/image";
import React from "react";
import { IoMail } from "react-icons/io5";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="relative mt-40">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[75%] md:max-w-[768px] mx-auto flex flex-col justify-center items-center gap-4 bg-zinc-800 border-[1px] border-zinc-50 rounded-2xl shadow-2xl py-6">
        <div className="bg-zinc-900 w-fit p-3 border-[1px] border-zinc-100 rounded-xl aspect-square flex justify-center items-center">
          <Image
            src={"/images/dezaLogo.svg"}
            width={35}
            height={35}
            alt={"Deza Logo"}
          />
        </div>
        <div className="flex flex-col justify-center items-center text-white">
          <h1>Reach Us Today</h1>
          <p>Let’s discover your brand potential.</p>
        </div>
        <button className="text-zinc-900 font-bold px-6 py-2 bg-zinc-50 rounded-lg hover:bg-white hover:cursor-pointer  transition-all ease-in-out">
          Let&apos;s Talk
        </button>
      </div>

      <div className="flex flex-col items-start py-16 pt-36 gap-8 px-[12.5%] bg-gradient-to-t from-zinc-950 to-zinc-800 rounded-t-2xl">
        <div className="flex flex-col gap-4">
          <h1 className="text-zinc-50">
            Let’s discover your brand potential, Get started today!
          </h1>
          <div className="flex flex-col gap-2 text-white">
            <h3>Reach Us</h3>
            <div className="flex flex-row gap-2">
              <IoMail />
              <FaTwitter />
              <RiInstagramFill />
              <FaLinkedin />
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-zinc-500"></div>

        <div className="flex flex-col gap-2 text-zinc-50">
          <p>Terms of Service</p>
          <p>Policy Service</p>
          <p>©2023 Deza. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
