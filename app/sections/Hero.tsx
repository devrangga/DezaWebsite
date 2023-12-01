import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="relative">
      <div className="main">
        <div className="gradient">
          <div className="gradient2"></div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 flex flex-col w-full justify-center items-center gap-2 md:gap-4 lg:gap-6">
        <div className="text-zinc-100 text-xl md:text-xl  lg:text-3xl ">
          ELEVATE YOUR BRAND
        </div>
        <div className="text-zinc-100 text-4xl md:text-6xl  lg:text-8xl font-black">
          <TypeAnimation
            sequence={[
              "WITH WUW STYLE",
              3000,
              "WITH UNIQUE STYLE",
              3000,
              "WITH WAW STYLE",
              3000,
            ]}
            wrapper="span"
            speed={150}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
        <div className="text-zinc-100 text-xl md:text-xl lg:text-3xl">
          FOR MASSIVE BRANDING IMPACT.
        </div>
      </div>
    </div>
  );
};

export default Hero;
