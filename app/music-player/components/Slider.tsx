"use client";

import { type ChangeEvent, useState } from "react";

interface SliderProps {
  value: number;
  min?: number;
  max: number;
  step?: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Slider({
  value,
  min,
  max,
  onChange,
  step,
}: SliderProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="relative flex h-2 w-full rounded-full bg-[#7a7a7a]"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute left-0 top-0 h-2 rounded-full bg-white"
        style={{ width: `${(value / max) * 100}%` }}
      />
      <input
        id="input-range"
        type="range"
        className={isHovered ? "slider hovered" : "slider"}
        min={min}
        value={value}
        max={max}
        onChange={onChange}
        step={step}
      />
    </div>
  );
}
