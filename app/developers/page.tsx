import Header from '@/components/Header';
import React from 'react'
import { FaSearch } from 'react-icons/fa';

export default function Developers() {
  const datas = [
      { img: "/team1.png", name: "Navi Mumbai", title: "Wide, spacious" },
      { img: "/team2.png", name: "Bandra", title: "Sea-facing, spacious" },
      { img: "/team3.png", name: "Andheri West", title: "Luxurious, spacious" },
      { img: "/team2.png", name: "South Bombay", title: "Sea-facing, luxurious" },
    ];
  
    return (
      <div className="bg-gray-50 min-h-screen">
        <Header />
  
        {/* Hero Section */}
        <div
          className="h-[500px] flex items-center justify-center text-white text-center px-4"
          style={{
            backgroundImage: "url('/home.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-opacity-50 p-8 rounded-xl">
            <h1 className="text-3xl md:text-4xl font-bold leading-relaxed">
              Best Deals Guaranteed on your favourite <br />
              localities by <span className="text-yellow-400">Zeal</span>
            </h1>
          </div>
        </div>
  
        {/* Search Input */}
        <div className="relative max-w-xl mx-auto mt-10">
          <input
            type="text"
            placeholder="Search Properties..."
            className="w-full py-4 pl-5 pr-14 rounded-2xl text-gray-700 font-medium shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
          <FaSearch className="absolute right-5 top-4 text-gray-500 text-xl cursor-pointer" />
        </div>
  
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 py-16">
          {datas.map((data) => (
            <div
              key={data.name}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <img
                src={data.img}
                alt={data.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  {data.name}
                </h2>
                <p className="text-gray-500 mt-2">{data.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}
