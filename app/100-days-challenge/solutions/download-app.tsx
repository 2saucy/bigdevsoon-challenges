"use client";
import { usePathname } from "next/navigation";
import { getAssetsDir } from "../utils";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { BsGooglePlay } from "react-icons/bs";

const DownloadApp = () => {
  const assetsDir = getAssetsDir(usePathname());

  return (
    <main className="flex min-h-screen items-center justify-center gap-12 p-12 max-lg:flex-col">
      <div className="flex shrink-0 basis-1/2 items-center justify-center">
        <img
          className="h-[400px] w-[400px] object-cover"
          src={`${assetsDir}/download-app.png`}
        />
      </div>
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-bold">Download</h1>
        <span className="text-2xl font-bold">Our New App</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem laudantium nulla voluptatem repellat, magni cupiditate
          in dolore consequuntur ratione, modi aspernatur rem quo voluptate enim
          perferendis reprehenderit debitis excepturi numquam!
        </p>
        <div className="flex items-center justify-center gap-2 text-white">
          <div className="flex w-2/5 items-center gap-2 rounded-lg bg-black p-2">
            <IoLogoAppleAppstore className="h-8 w-8" />
            <div className="flex flex-col">
              <span className="text-xs">Get in on</span>
              <span className="font-bold">App Store</span>
            </div>
          </div>
          <div className="flex w-2/5 items-center gap-2 rounded-lg bg-black p-2">
            <BsGooglePlay className="h-8 w-8" />
            <div className="flex flex-col">
              <span className="text-xs">Get in on</span>
              <span className="font-bold">Google Play</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DownloadApp;
