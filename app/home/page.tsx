import AboutUs from "@/components/AboutUs";
import Card from "@/components/Card";
import FormPage from '@/components/FormPage'
import Check from "@/components/Check";
import Header from "@/components/Header";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {

  const cardParam = [
    { img: "/card.png", title: "عنوان 1", desc: "توضیح 1" },
    { img: "/card.png", title: "عنوان 2", desc: "توضیح 2" },
    { img: "/card.png", title: "عنوان 3", desc: "توضیح 3" },
    { img: "/card.png", title: "عنوان 4", desc: "توضیح 4" },
  ];

  const images = [
    { id: 1, src: "/download.jfif" },
    { id: 2, src: "/images (1).jfif" },
    { id: 3, src: "/images.jfif" },
  ];

  const [activeId, setActiveId] = useState<number | null>(1);

  return (
    <div>
      <div className="flex  md:flex-row h-[600px] bg-white">
        <div className="md:w-1/2 w-full px-12 py-16 flex flex-col justify-center space-y-8">
          <img src="/logo.png" alt="home icon" className="w-16" />
          <h1 className="text-4xl font-extrabold text-gray-800 leading-relaxed">
            We Help You Build <br />
            Your Dream & Deliver <br />
            Beyond Expectations
          </h1>

          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Search Properties..."
              className="w-full py-3 pl-5 pr-12 rounded-xl text-gray-700 font-medium 
              shadow-lg focus:outline-none focus:ring-2 focus:ring-white bg-white"
            />
            <FaSearch className="absolute right-4 top-3.5 text-gray-500 text-lg cursor-pointer" />
          </div>
        </div>

        <div className="md:w-1/2 w-full bg-white overflow-hidden">
          <img
            src="/city1.png"
            alt="Globe"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <Header />

      <div className="px-10 py-6 flex flex-row">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={5}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="pb-12"
        >
          {cardParam.map((card, index) => (
            <SwiperSlide key={index}>
              <Card img={card.img} title={card.title} desc={card.desc} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex py-10 h-[600px]">
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
      <div className="p-16 bg-gray-50">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Localities</h1>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            placeat ducimus.
            <br />
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={5}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="pb-12"
        >
          {cardParam.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="cursor-pointer hover:scale-105 transition-transform duration-300">
                <Card img={card.img} title={card.title} desc={card.desc} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <AboutUs/>
            <Check/>
            <FormPage/>
    </div>
  );
}
