'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useState } from "react";

export default function Header() {  

    const headerParam = [
      { name: "Home", path: "/" },
      { name: "About us", path: "/aboutus" },
      { name: "Localities", path: "/localities" },
      { name: "Developers", path: "/developers" },
    ];

    const pathName = usePathname()

  return (
    <header className="z-50 mt-8 mb-15 w-[40%] ml-[55%]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center"></div>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {headerParam.map((param) => (
              <Link
                href={param.path}
                key={param.name}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  pathName === param.path
                    ? "bg-indigo-100 text-blue-400 shadow-inner"
                    : "text-gray-600 hover:text-indigo-500 hover:bg-indigo-50"
                }`}
              >
                {param.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
