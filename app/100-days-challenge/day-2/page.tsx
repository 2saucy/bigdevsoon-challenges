"use client";
import clsx from "clsx";
import { useState } from "react";

interface ProductInfo {
  brand: string;
  name: string;
  description: string;
  price: number;
  discount: string;
  sizes: string[];
}

const Page = () => {
  const product = {
    images: [
      "/assets/100-days-challenge/day-2/1.jpg",
      "/assets/100-days-challenge/day-2/2.jpg",
      "/assets/100-days-challenge/day-2/3.jpg",
    ],
    brand: "Polo Ralph",
    name: "Custom Fit Polo Bear Oxford Shirt",
    description:
      "Blue polo with a classic cut. Made of smooth and soft cotton.",
    price: 132.0,
    discount: "-25%",
    sizes: ["S", "M", "L", "XL", "XXL"],
  };

  return (
    <main className="flex h-screen items-center justify-center gap-8 px-24">
      <ProductDisplay images={product.images} />
      <ProductInfo {...product} />
    </main>
  );
};

export default Page;

const ProductInfo: React.FC<ProductInfo> = ({
  brand,
  name,
  description,
  price,
  discount,
  sizes,
}) => {
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <div className="flex flex-col gap-8 font-serif">
      <div className="flex flex-col gap-4">
        <p className="font-semibold uppercase tracking-tighter text-[#2f84fe]">
          {brand}
        </p>
        <h1 className="text-4xl font-bold">{name}</h1>
        <p className="text-[#7c7c7c]">{description}</p>
      </div>
      <div>
        <div className="flex items-center gap-4">
          <h2 className="text-4xl">{`$${price.toFixed(2)}`}</h2>
          <p className="rounded-lg bg-[#abccff] px-2 font-semibold text-[#1a75fd]">
            {discount}
          </p>
        </div>
        <p className="text-[#ababab] line-through">{`$${price.toFixed(2)}`}</p>
      </div>
      <div>
        <h3 className="mb-4 font-semibold uppercase tracking-tighter">
          Choose Size
        </h3>
        <div className="flex gap-4">
          {sizes.map((size) => (
            <div
              key={size}
              className={clsx(
                "flex h-[50px] w-[50px] cursor-pointer items-center justify-center duration-300 ease-in-out",
                size === selectedSize
                  ? "bg-black text-white"
                  : "hover:bg-slate-200",
              )}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </div>
          ))}
        </div>
      </div>
      <button className="w-full rounded-md bg-[#1a75fd] py-2 uppercase text-white duration-200 ease-in-out hover:scale-105">
        Add to bag
      </button>
    </div>
  );
};

const ProductDisplay = ({ images }: { images: string[] }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-6">
        {images.map((image, i) => (
          <div
            key={i}
            className={clsx(
              "h-[110px] w-[80px] cursor-pointer overflow-hidden rounded-lg border-4",
              image === currentImage
                ? "border-[#2f84fe]"
                : "border-transparent",
            )}
            onClick={() => setCurrentImage(image)}
          >
            <img className="h-full w-full object-cover" src={image} />
          </div>
        ))}
      </div>
      <div className="h-[650px] w-[500px] overflow-hidden rounded-lg border-2 shadow-md">
        <img
          className="h-full w-full object-cover"
          src={currentImage}
          alt="Image"
        />
      </div>
    </div>
  );
};
