"use client";

import { useState } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  text: string;
  onClick: () => void;
  background?: "white" | undefined;
  primary?: boolean;
}

export default function Button({
  children,
  text,
  onClick,
  background,
  primary,
}: ButtonProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className="relative">
      <div
        className={clsx(
          "absolute -top-full left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-[#828282] px-4 py-2 text-white duration-300 ease-in-out",
          isVisible ? "opacity-1" : "opacity-0",
        )}
      >
        {text}
      </div>
      <button
        className={clsx(
          "rounded-full p-2 text-[#838383] duration-150 ease-in-out hover:animate-pulse",
          background === undefined ? "bg-transparent" : "bg-white",
          primary
            ? "text-black"
            : "text-[#838383] hover:bg-black/10 hover:text-white",
        )}
        onMouseOver={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
