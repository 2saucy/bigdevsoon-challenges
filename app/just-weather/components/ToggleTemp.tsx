"use client";
import clsx from "clsx";
import { useState } from "react";

const ToggleTemp = () => {
  const [isCelsius, setIsCelsius] = useState(true);

  return (
    <button
      className="relative flex gap-4 rounded-full bg-slate-100 px-2.5 py-1.5 text-xs shadow-md"
      onClick={() => setIsCelsius(!isCelsius)}
    >
      <div
        className={clsx(
          "absolute top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5d6bbd] px-3 duration-300 ease-in-out",
          isCelsius ? "left-[75%]" : "left-[25%]",
        )}
      />
      <div
        className={clsx("z-10", isCelsius ? "text-slate-900" : "text-slate-50")}
      >
        ºF
      </div>
      <div
        className={clsx("z-10", isCelsius ? "text-slate-50" : "text-slate-900")}
      >
        ºC
      </div>
    </button>
  );
};

export default ToggleTemp;
