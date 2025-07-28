'use client'

import Header from '@/components/Header'
import Link from 'next/link';
import React, { useState } from 'react'

export default function AboutUs() {

    const params = ["About Us", "Services", "Pricings"]

    const [activeTab, setActiveTab] = useState("About Us");
    

  return (
    <div>
      <Header/>
      <img src="/Group1.svg" className="m-auto w-[70%] h-[400px]" />

      <div className="py-8 space-y-1 flex justify-center">
        {params.map((param) => (
          <Link
            href="#"
            key={param}
            onClick={() => setActiveTab(param)}
            className={`px-8 py-2 rounded-md mx-5 text-sm font-medium transition-all duration-200 ${
              activeTab === param
                ? "bg-indigo-100 text-blue-400 shadow-inner"
                : "text-gray-600 hover:text-indigo-500 hover:bg-indigo-50"
            }`}
          >
            {param}
          </Link>
        ))}
      </div>

      <div className="flex flex-col justify-center ml-[20%] pb-16">
        <span>Zeal</span>
        <span>/ziːl/</span>
        <br />
        <span>noun</span>
        <span>
          Great energy or enthusiasm in pursuit of a cause or an objective.
        </span>
      </div>
    </div>
  );
}
