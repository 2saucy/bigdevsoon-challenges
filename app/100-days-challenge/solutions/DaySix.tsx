"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import clsx from "clsx";

const DaySix = () => {
  const images: string[] = [
    "andreas-rasmussen-Iw12lY3koDk-unsplash.jpg",
    "cristian-castillo-73pyV0JJOmE-unsplash.jpg",
    "jonatan-pie-xgTMSz6kegE-unsplash.jpg",
    "justin-veenema-NH1d0xX6Ldk-unsplash.jpg",
    "nick-karvounis--KNNQqX9rqY-unsplash.jpg",
    "paweldotio-XWTNFVCTS8E-unsplash.jpg",
  ];

  const [currentImg, setCurrentImg] = useState(images[0]);

  const nextImg = () => {
    const index = images.indexOf(currentImg);

    if (!images[index + 1]) {
      setCurrentImg(images[0]);
    } else {
      setCurrentImg(images[index + 1]);
    }
  };

  const prevImg = () => {
    const index = images.indexOf(currentImg);

    if (!images[index - 1]) {
      setCurrentImg(images[images.length - 1]);
    } else {
      setCurrentImg(images[index - 1]);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center pb-8 bg-black">
      <div className="flex w-full items-center gap-8 p-8 max-md:flex-col">
        <div className="flex w-full items-center justify-between text-xs text-slate-50 md:hidden">
          <button className="hover:underline" onClick={prevImg}>
            {"<<"} Previous Image
          </button>
          <button className="hover:underline" onClick={nextImg}>
            Next Image {">>"}
          </button>
        </div>
        <button
          className="rounded-full bg-slate-700 p-1.5 duration-100 ease-out hover:scale-110 max-md:hidden"
          onClick={prevImg}
        >
          <FaArrowLeft className="h-6 w-6 text-white" />
        </button>
        <div className="h-[60vh] w-[80vw] overflow-hidden rounded-3xl">
          <img
            className="h-full w-full object-cover"
            src={"/assets/100-days-challenge/day-6/" + currentImg}
          />
        </div>
        <button
          className="rounded-full bg-slate-700 p-1.5 duration-100 ease-out hover:scale-110 max-md:hidden"
          onClick={nextImg}
        >
          <FaArrowRight className="h-6 w-6 text-white" />
        </button>
      </div>
      <div className="flex w-[80vw] items-center justify-center gap-4 overflow-x-auto p-4">
        {images.map((img, i) => (
          <div key={i} className="h-24 w-24 shrink-0">
            <img
              src={"/assets/100-days-challenge/day-6/" + img}
              onClick={() => setCurrentImg(img)}
              className={clsx(
                "h-full w-full cursor-pointer object-cover duration-100 ease-in-out",
                img === currentImg &&
                "outline outline-2 outline-offset-4 outline-slate-50",
              )}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default DaySix;
