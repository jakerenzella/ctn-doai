"use client";

import { useEffect, useRef, useState } from "react";

export const BarTicker = () => {
  const [romansPercentage, setRomansPercentage] = useState(50);
  const velocityRef = useRef(0);

  useEffect(() => {
    const CENTER = 50;
    const PULL = 0.18;
    const DAMP = 0.82;
    const NOISE_RANGE = 1.8;
    const MIN = 42;
    const MAX = 58;

    const interval = setInterval(() => {
      setRomansPercentage((prev) => {
        const force = PULL * (CENTER - prev);
        const noise = (Math.random() - 0.5) * 2 * NOISE_RANGE;

        velocityRef.current = DAMP * velocityRef.current + force + noise;

        let next = prev + velocityRef.current;

        if (next < MIN) {
          next = MIN + (MIN - next) * 0.25;
          velocityRef.current *= -0.35;
        } else if (next > MAX) {
          next = MAX - (next - MAX) * 0.25;
          velocityRef.current *= -0.35;
        }

        return next;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const aiPercentage = 100 - romansPercentage;

  return (
    <div className="w-full max-w-4xl relative">
      <div className="flex h-12 w-full overflow-hidden rounded-none border-black border-2 relative">
        {/* Romans */}
        <div
          className="flex items-center justify-center bg-[#3571C0] transition-all duration-1000 ease-out"
          style={{ width: `${romansPercentage}%` }}
        />
        {/* AI fills remainder */}
        <div className="flex-1 flex items-center justify-center bg-[#FE5F40] transition-all duration-1000 ease-out" />

        {/* Center win line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </div>

      <div className="mb-2 flex justify-between text-lg font-semibold">
        <div className="text-blue-900">
          <span className="text-2xl mr-0.5">{(romansPercentage * 5).toFixed(0)}</span>{" "}
          <span className="text-xl uppercase">Romans</span>
        </div>

        <div className="text-red-900">
          <span className="text-xl mr-0.5 uppercase">Bots</span>{" "}
          <span className="text-2xl">{(aiPercentage * 5).toFixed(0)}</span>
        </div>
      </div>
    </div>
  );
};
