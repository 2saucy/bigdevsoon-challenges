"use client";
import { CgDetailsMore } from "react-icons/cg";
import { useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { BsStars } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { getAssetsDir } from "../utils";

const SleepApp = () => {
  const [isStarted, setIsStarted] = useState<boolean>(false);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100">
      {isStarted ? (
        <SleepPage onClick={() => setIsStarted(false)} />
      ) : (
        <GetStarted onClick={() => setIsStarted(true)} />
      )}
    </main>
  );
};

export default SleepApp;

const GetStarted = ({ onClick }: { onClick: () => void }) => {
  const assetsDir = getAssetsDir(usePathname());

  return (
    <div className="flex aspect-[1/2] w-[340px] flex-col justify-between gap-4 overflow-hidden rounded-2xl bg-[#271352] text-white shadow-lg">
      <div className="flex-1 overflow-hidden rounded-b-full">
        <img
          className="h-full w-full object-cover"
          src={`${assetsDir}/card-image.jpg`}
        />
      </div>
      <div className="space-y-4 p-4 text-center">
        <h1 className="text-lg font-bold">Track your sleep</h1>
        <p className="text-xs">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
          ratione adipisci earum praesentium placeat dignissimos?
        </p>
        <button
          className="w-full rounded-xl bg-[#ea7f63] p-2 font-semibold text-white duration-300 ease-in-out hover:bg-[#e35733]"
          onClick={onClick}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

const SleepPage = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="flex aspect-[1/2] w-[340px] flex-col gap-4 overflow-hidden rounded-2xl bg-[#271352] p-4 text-white shadow-lg">
      <div className="flex items-center justify-between">
        <button
          onClick={onClick}
          className="rounded-lg p-2 duration-100 ease-linear hover:bg-white/10"
        >
          <CgDetailsMore className="h-5 w-5" />
        </button>
        <Avatar>
          <AvatarImage src="/assets/100-days-challenge/day-36/lorenzo-herrera-p0j-mE6mGo4-unsplash.jpg" />
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex items-center justify-center gap-4">
          <button className="rounded-full border-2 opacity-50 hover:opacity-100">
            <IoIosArrowBack className="h-4 w-4" />
          </button>
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-semibold">Wednesday</h2>
            <span className="text-xs opacity-50">4 March 2024</span>
          </div>
          <button className="rounded-full border-2 opacity-50 hover:opacity-100">
            <IoIosArrowForward className="h-4 w-4" />
          </button>
        </div>
        <WheelDisplay />
        <div className="flex items-center gap-2">
          <div className="basis-1/2 space-y-1 rounded-xl bg-white/10 p-2">
            <div className="flex items-center justify-between text-xs opacity-50">
              <h2 className="font-light">Sleep Time</h2>
              <FaInfoCircle className="cursor-pointer" />
            </div>
            <p className="text-sm font-light">
              <span className="text-xl font-bold">8</span>h{" "}
              <span className="text-xl font-bold">30</span>m
            </p>
            <div className="flex items-center gap-1 text-green-500">
              <GiConfirmed />
              <span className="text-xs font-semibold">Normal</span>
            </div>
          </div>
          <div className="basis-1/2 space-y-1 rounded-xl bg-white/10 p-2">
            <div className="flex items-center justify-between text-xs opacity-50">
              <h2 className="font-light">Sleep Quality</h2>
              <FaInfoCircle className="cursor-pointer" />
            </div>
            <p className="text-sm font-light">
              <span className="text-xl font-bold">8</span>h{" "}
              <span className="text-xl font-bold">30</span>m
            </p>
            <div className="flex items-center gap-1 text-yellow-500">
              <BsStars />
              <span className="text-xs font-semibold">Excellent</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WheelDisplay = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="rounded-full bg-[#9d00ff] p-4">
        <div className="rounded-full border-[.5rem] border-[#271352] bg-[#ff19f7] p-4">
          <div className="rounded-full border-[.5rem] border-[#271352] bg-[#271352] p-4 text-center">
            <h1 className="text-4xl font-bold">92</h1>
            <span className="text-xs opacity-50">Sleep score</span>
          </div>
        </div>
      </div>
    </div>
  );
};
