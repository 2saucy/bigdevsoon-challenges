"use client";

export default function CircleImage({ image }: { image: string }) {
  return (
    <div className="absolute left-1/2 top-full h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-4 border-white">
      <img
        className="h-full w-full object-cover"
        src={image}
        alt="Album Cover"
      />
    </div>
  );
}
