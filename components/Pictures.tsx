"use client";

import React, { useState } from "react";

const images = [
  { id: 1, src: "/download.jfif" },
  { id: 2, src: "/images (1).jfif" },
  { id: 3, src: "/images.jfif" },
];

export default function Pictures() {
  const [activeId, setActiveId] = useState<number | null>(1);

  return (
    <div className="flex py-10 ">
      {images.map((image) => (
        <div
          key={image.id}
          className={` duration-500 ease-in-out overflow-hidden cursor-pointer ${
            activeId === image.id ? "flex-[2]" : "flex-[1]"
          }`}
          onClick={() => setActiveId(image.id)}
        >
          <img
            src={image.src}
            alt={`image-${image.id}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
}
