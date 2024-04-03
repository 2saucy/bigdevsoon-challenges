"use client";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
import { getAssetsDir } from "../utils";

const QRCodeScanner = () => {
  const assetsDir = getAssetsDir(usePathname());

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#00be92]">
      <div className="flex aspect-[1/2] w-[400px] flex-col gap-6 overflow-hidden rounded-2xl bg-black text-white shadow-md">
        <div className="relative w-full p-6">
          <IoIosArrowBack className="absolute top-1/2 h-6 w-6 -translate-y-1/2" />
          <h1 className="text-center text-xl font-semibold">Scan QR Code</h1>
        </div>
        <p className="px-6 text-center">
          Position the QR code within the frame for fast scanning. Minimize
          shaking to expedite results.{" "}
        </p>
        <div className="flex flex-1 flex-col items-center justify-between rounded-t-2xl bg-white p-6">
          <div className="mt-8">
            <img
              className="h-full w-full object-cover"
              src={`${assetsDir}/qr-code.png`}
            />
          </div>
          <Button className="w-full bg-[#00be92] text-lg font-bold text-black hover:bg-[#0ca17f]">
            Scan QR Code
          </Button>
        </div>
      </div>
    </main>
  );
};

export default QRCodeScanner;
