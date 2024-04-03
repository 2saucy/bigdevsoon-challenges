"use client";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { IoMdMail } from "react-icons/io";
import { getAssetsDir } from "../utils";

const Newsletter = () => {
  const assetsDir = getAssetsDir(usePathname());
  const cardImage = `${assetsDir}/card-image.png`;

  return (
    <main className="flex min-h-screen items-center justify-center bg-yellow-300">
      <div className="flex items-center gap-8 rounded-xl bg-slate-50 p-24 shadow-lg">
        <div className="w-[400px]">
          <img className="h-full w-full object-cover" src={cardImage} />
        </div>
        <div className="space-y-6">
          <span className="text-xl font-bold">Sign up to our</span>
          <h1 className="text-5xl font-bold">Newsletter</h1>
          <p>Subscribe to our newsletter and stay updated</p>
          <div className="flex items-center gap-2 rounded-lg border-[1px] px-4 py-2">
            <IoMdMail className="opacity-50" />
            <input
              className="w-full bg-transparent text-sm outline-none"
              placeholder="Your email"
            />
          </div>
          <Button className="w-full bg-[#ffc927] font-semibold text-black hover:bg-[#e0b124]">
            Sign Up
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Newsletter;
