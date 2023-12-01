"use client";

import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const page = () => {
  return (
    <div>
      <div className="relative">
        <div className="main">
          <div className="gradient"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 flex flex-col w-full justify-center items-center">
          <div className="text-zinc-100 text-sm">ELEVATE YOUR BRAND</div>
          <div className="text-zinc-100 text-2xl font-black">
            <TypeAnimation
              sequence={[
                "WITH CREATIVE STYLE",
                3000,
                "WITH UNIQUE STYLE",
                3000,
                "WITH HANDLED STYLE",
                3000,
              ]}
              wrapper="span"
              speed={150}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </div>
          <div className="text-zinc-100 text-sm">
            FOR MASSIVE BRANDING IMPACT.
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
