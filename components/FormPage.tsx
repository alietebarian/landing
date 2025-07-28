"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function ContactSection() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <img
          src="/footer.png"
          alt="Building"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 bg-[#1e1e1e] text-white flex flex-col justify-center p-10 md:p-20">
        <div className="mb-10">
          <h1 className="text-2xl font-bold mb-4">
            <span className="block text-4xl">🏙️</span> Zeal{" "}
            <span className="text-sm">Real Estate</span>
          </h1>
          <p className="text-gray-400 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod
            tempor incididunt ut labore et.
          </p>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-md bg-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="email"
            placeholder="yourmailaddressplease@mail.com"
            className="w-full px-4 py-3 rounded-md bg-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <button
            type="submit"
            className="w-[280px] flex items-center justify-center cursor-pointer gap-2 mt-4 px-6 py-3 rounded-md bg-[#2a2a2a] hover:bg-[#131313] text-white font-semibold transition"
          >
            Get in Touch With Us <FaArrowRight className="text-sm" />
          </button>
        </form>
      </div>
    </div>
  );
}
