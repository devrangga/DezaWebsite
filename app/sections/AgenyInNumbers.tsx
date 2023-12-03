"use client";

import React, { useEffect, useState } from "react";
import { agencyInNumber } from "../constant/index";
import { useSpring, animated } from "react-spring";

interface NumberProps {
  n: number;
}

function Number({ n }: NumberProps) {
  const [resetFlag, setResetFlag] = useState(false);
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: n },
    reset: resetFlag,
    onRest: () => setResetFlag(false),
    delay: 0,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  useEffect(() => {
    // Set the reset flag to true to trigger the animation
    setResetFlag(true);
  }, [n]);

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const AgenyInNumbers = () => {
  return (
    <div className="w-[15rem] sm:w-[75%] mx-auto mt-8 flex flex-col gap-4">
      <h1 className="text-center text-3xl font-bold">Agency In Numbers</h1>
      <div className="flex flex-col sm:flex-row justify-around items-center gap-4 text-white bg-gradient-to-t rounded-lg from-zinc-950 to-zinc-800 p-8">
        {agencyInNumber.map((item, index) => (
          <div
            key={index}
            className="text-center flex flex-col  gap-2 items-center justify-center"
          >
            <h1 className="text-2xl font-bold flex flex-row">
              <Number n={item.count} />+
            </h1>
            <div className="flex flex-col">
              <h3 className="font-medium">{item.description.split(" ")[0]}</h3>
              <h3 className="font-medium">{item.description.split(" ")[1]}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgenyInNumbers;
