import Header from '@/components/Header'
import React from 'react'

export default function Localities() {

    const icons = [
      {
        img: "client1.png",
        name: "Lodha Group",
        exp: "35+ years of experience",
        com: 19,
        ong: 5,
        upc: 2,
      },
      {
        img: "client2.png",
        name: "Lodha Group",
        exp: "35+ years of experience",
        com: 19,
        ong: 5,
        upc: 2,
      },
      {
        img: "client3.png",
        name: "Lodha Group",
        exp: "35+ years of experience",
        com: 19,
        ong: 5,
        upc: 2,
      },
      {
        img: "client4.png",
        name: "Lodha Group",
        exp: "35+ years of experience",
        com: 19,
        ong: 5,
        upc: 2,
      },
    ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      <div
        className="h-[500px] flex items-center justify-center text-white text-center px-4"
        style={{
          backgroundImage: "url('/loca.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-opacity-50 p-8 rounded-xl">
          <h1 className="text-3xl md:text-4xl font-bold leading-relaxed ml-120">
            Check Iranian's biggest developers on board exclusive on Zeal
          </h1>
        </div>
      </div>
      <div className="flex gap-26 justify-center py-8">
        {icons.map((icon, index) => (
          <img src={icon.img} key={index} className="w-28" />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-12 max-w-6xl mx-auto">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center"
          >
            {/* آیکون */}
            <div className="bg-gray-100 p-4 rounded-full mb-4">
              <img
                src={icon.img}
                alt={icon.name}
                className="w-12 h-12 object-contain"
              />
            </div>

            {/* نام و تجربه */}
            <h3 className="text-lg font-semibold text-gray-800">{icon.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{icon.exp}</p>

            {/* اطلاعات پروژه‌ها */}
            <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 w-full">
              <div>
                <p className="font-semibold">{icon.com}</p>
                <p className="text-xs">Completed</p>
              </div>
              <div>
                <p className="font-semibold">{icon.ong}</p>
                <p className="text-xs">Ongoing</p>
              </div>
              <div>
                <p className="font-semibold">{icon.upc}</p>
                <p className="text-xs">Upcoming</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
