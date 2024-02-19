"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { images } from "./data.json";
import { useState } from "react";
import Color from "color-thief-react";
import clsx from "clsx";

const Page = () => {
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
    <Color src={currentImg} crossOrigin="anonymous" format="hex">
      {({ data, loading }) => {
        const backgroundColor = loading ? "black" : data;

        return (
          <main
            style={{ backgroundColor }}
            className="flex min-h-screen flex-col items-center justify-center pb-8"
          >
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
                <img className="h-full w-full object-cover" src={currentImg} />
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
                    src={img}
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
      }}
    </Color>
  );
};

export default Page;
