"use client";

import Header from "@/components/Header";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function AboutUs() {
  const params = ["About Us", "Services", "Pricings"];
  const [activeTab, setActiveTab] = useState("About Us");

  const zeals = [
    {
      icon: "/vector.png",
      title: "Sustainibility",
      description:
        "Commitment to environmental responsibility in all our projects",
    },
    {
      icon: "/vector (1).png",
      title: "Quality & Comfort",
      description: "Uncompromising standards for your living experience",
    },
    {
      icon: "/vector (2).png",
      title: "Collaboration",
      description: "Working together with clients to realize their vision",
    },
    {
      icon: "/vector (3).png",
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge design and technology",
    },
    {
      icon: "/vector (4).png",
      title: "Ethics",
      description: "Transparent and honest business practices",
    },
  ];

  const teamParam = [
    { img: "/team1.png", title: "Bhavik Jonathan", desc: "Founder, CEO" },
    { img: "/team2.png", title: "Ali Michael Doe", desc: "Co-Founder, CBO" },
    { img: "/team3.png", title: "Avnish Hyuga", desc: "Lead Dev, CTO" },
    { img: "/team4.png", title: "Rahul Gami", desc: "Design" },
  ];

  const client = [
    "/client1.png",
    "/client2.png",
    "/client3.png",
    "/client4.png",
  ];

  const clientData = [
    {
      image: "/team1.png",
      name: "AliEte",
      title: "software eng",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit similique magni tenetur excepturi sit ut autem fugiat. Sunt, quos dolor."
    },
    
  ];

  return (
    <div className="bg-gray-50">
      <Header />

      {/* Hero Banner */}
      <section className="relative h-[400px] bg-gradient-to-r from-green-100 to-blue-100 flex items-center justify-center">
        <img
          src="/Group1.svg"
          alt="About Us Banner"
          className="w-full max-w-4xl h-full object-contain p-8"
        />
      </section>

      {/* Navigation Tabs */}
      <div className="py-6 flex justify-center bg-white shadow-md top-0 z-40">
        <div className="flex flex-wrap gap-2 md:gap-6">
          {params.map((param) => (
            <button
              key={param}
              onClick={() => setActiveTab(param)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ease-in-out ${
                activeTab === param
                  ? "bg-green-500 text-white shadow-md"
                  : "bg-white text-gray-600 border-gray-300 hover:bg-green-50 hover:text-green-600"
              }`}
            >
              {param}
            </button>
          ))}
        </div>
      </div>

      {/* Zeal Definition */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-12 p-6 bg-white rounded-xl shadow-md text-center">
          <span className="font-bold text-green-500 text-lg">Zeal</span>
          <span className="text-gray-600 italic ml-2">/ziːl/</span>
          <p className="mt-4 text-gray-700">
            Great energy or enthusiasm in pursuit of a cause or an objective.
          </p>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            What does Zeal stand for
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod
            tempor incididunt ut labore et.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {zeals.map((z) => (
            <div
              key={z.title}
              className="bg-white p-6 rounded-xl shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col items-center text-center"
            >
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <img
                  src={z.icon}
                  alt={z.title}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{z.title}</h3>
              <p className="text-gray-600 text-sm">{z.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Objectives */}
      <section className="bg-gradient-to-b from-white to-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-12 text-center">
            Zeal’s Objectives
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1, 2].map((_, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row items-center gap-6 p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-green-100 p-5 rounded-full flex-shrink-0">
                  <img
                    src="/vector.png"
                    alt="Objective Icon"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <p className="text-gray-700 text-center md:text-left">
                  Introducing to you a UI & UX focused website with a cutting
                  edge technology as a platform for digital marketing and lead
                  generation.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Our <span className="text-green-500">Clients</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            {client.map((c, index) => (
              <img
                src={c}
                key={index}
                alt={`Client ${index}`}
                className="w-28 h-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <div className=" flex justify-center bg-gray-50">
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4 ml-2">
              Our <span className="text-green-500">Team</span>
            </h2>
            <p className="text-gray-600 ml-2 max-w-2xl">
              Meet our talented team of professionals dedicated to delivering
              excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 p-5 container m-auto">
            {teamParam.map((z) => (
              <div
                key={z.title}
                className="bg-white p-6 rounded-xl shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col items-center text-center"
              >
                <div className="bg-green-100 p-4 rounded-full mb-4">
                  <img
                    src={z.img}
                    alt={z.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{z.title}</h3>
                <p className="text-gray-600 text-sm">{z.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden group">
        <img
          src="/home.jpg"
          alt="Zeal's presence in Indian real estate market"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6">
          <div className="max-w-4xl text-center">
            <span className="text-2xl md:text-4xl font-bold text-white leading-tight tracking-wide">
              Zeal's presence and position in <br className="hidden md:block" />
              the Indian real estate market
            </span>
          </div>
        </div>
      </div>
      {/* client */}
      <div>
        <h1 className="text-2xl ml-16 mt-8">Client testimony</h1>
        <div className="flex items-center justify-center container p-12 bg-gray-50 px-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full items-center">
            <Swiper spaceBetween={5} slidesPerView={1.2}>
              {clientData.map((data, index) => (
                <SwiperSlide key={index} className="flex justify-between">
                  <div className="bg-white p-6 rounded-xl shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col items-center text-center">
                    <div className="bg-green-100 p-4 rounded-full mb-4">
                      <img
                        src={data.image}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {data.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{data.title}</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed">{data.desc}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Text Section */}
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">
              Where are we Located?
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Zeal provides a quality, consumer-driven platform for new property
              buyers. For the first time, prospective buyers will be able to
              access every listing consisting of New Age Homes or properties
              with amenities and lifestyle features of the 21st century all in
              one place. Let’s meet!!
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/location.png"
              alt="Our Location"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* متن سمت چپ */}
        <div className="w-full md:w-1/2 bg-[#1e1e1e] text-white flex items-center justify-center p-8 md:p-16">
          <div className="space-y-6 max-w-xl">
            <h1 className="text-3xl font-bold">
              Zeal provides a quality, consumer-driven Real Estate portal for
              new-home buyers
            </h1>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Zeal’s business model is specially designed as a medium for
              developers to sell their inventory through our vast network of
              real estate brokers. We help developers reach their potential
              customers and connect with them effectively.
              <br />
              <br />
              Introducing Zeal 3D — a redefined way of interacting with real
              estate. Use Zeal3d.com for sales presentations in project booking
              offices. Investors around the world looking to invest in Indian
              real estate can now surf through the listings in an innovative way
              from the most distinguished developers in India via a redefined 3D
              technology.
            </p>
          </div>
        </div>

        {/* تصویر سمت راست */}
        <div className="w-full md:w-1/2">
          <img
            src="/footer.png"
            alt="Building"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
