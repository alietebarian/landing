"use client";

import React from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Localities() {
  const images = [
    { id: 1, src: "/download.jfif" },
    { id: 2, src: "/images (1).jfif" },
    { id: 3, src: "/images.jfif" },
    { id: 4, src: "/city.jfif" },
  ];

  return (
    <div className="p-16 bg-gray-50 ">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Localities</h1>
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          placeat ducimus.
          <br />
          Lorem ipsum dolor sit amet.
        </p>
      </div>

      <Swiper spaceBetween={20} slidesPerView={3.6} className="px-4">
        {images.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="cursor-pointer hover:scale-105 transition-transform duration-300">
              <Card image={item.src} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
