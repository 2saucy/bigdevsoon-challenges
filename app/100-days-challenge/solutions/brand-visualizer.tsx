"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { FaCheckCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const BrandVisualizer = () => {
  const [color, setColor] = useState<string>("#aabbcc");

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex h-[800px] w-1/2 flex-col overflow-hidden rounded-2xl border-2 bg-white shadow-lg">
        <div className="flex flex-col gap-4 p-6">
          <h1 className="text-2xl font-bold">Brand colors</h1>
          <hr />
          <p className="text-sm opacity-50">
            Set up your band color to personalize the container
          </p>
          <div className="flex items-center gap-2">
            <div className="relative w-10">
              <div
                className="absolute left-1/2 top-1/2 z-0 aspect-square w-10 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-sm"
                style={{ backgroundColor: color }}
              />
              <div
                className="absolute left-1/2 top-1/2 z-10 aspect-square w-8 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{ backgroundColor: color }}
              />
            </div>
            <Popover>
              <PopoverTrigger>
                <Button
                  variant={"secondary"}
                  className="w-[120px] border-2 text-opacity-50"
                >
                  {color}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-fit">
                <HexColorPicker color={color} onChange={setColor} />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="flex flex-1 items-center gap-4 bg-stone-200 p-6">
          {/* First view */}
          <div className="flex h-full basis-1/2 flex-col rounded-xl border-2 bg-white">
            <div className="flex items-center justify-between gap-2 p-4">
              <div className="flex flex-1 items-center gap-2">
                <div className="aspect-square w-8 rounded-full border-2" />
                <div className="h-4 w-1/3 rounded-lg bg-black" />
              </div>
              <IoClose className="h-6 w-6" />
            </div>
            <hr />
            <div className="flex flex-1 items-center justify-center p-4">
              <div className="w-full rounded-lg border-2">
                <div className="p-2">
                  <div className="h-4 w-full rounded-lg bg-slate-200" />
                </div>
                <hr />
                <div className="space-y-2 p-2">
                  <div className="h-2 w-1/3 rounded-lg bg-black" />
                  <div
                    className="h-6 rounded-md border-4"
                    style={{ borderColor: color }}
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="p-4">
              <div
                className="h-9 w-full rounded-lg"
                style={{ backgroundColor: color }}
              />
            </div>
          </div>

          {/* Second view */}
          <div className="flex h-full basis-1/2 flex-col rounded-xl border-2 bg-white">
            <div className="flex items-center justify-between gap-2 p-4">
              <div className="flex flex-1 items-center gap-2">
                <div className="aspect-square w-8 rounded-full border-2" />
                <div className="h-4 w-1/3 rounded-lg bg-black" />
              </div>
              <IoClose className="h-6 w-6" />
            </div>
            <hr />
            <div className="flex flex-1 flex-col items-center justify-center gap-4 p-4">
              <FaCheckCircle
                className="h-12 w-12 rounded-full outline outline-1 outline-offset-8"
                style={{ color: color }}
              />
              <div className="h-4 w-1/3 rounded-lg bg-black" />
              <div className="h-4 w-full rounded-lg bg-slate-200" />
            </div>
            <hr />
            <div className="p-4">
              <div
                className="h-9 w-full rounded-lg"
                style={{ backgroundColor: color }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BrandVisualizer;
