"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";

export default function AboutUs() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex "
      style={{ backgroundImage: "url('/city.jfif')" }} 
    >
      
      <div className="bg-black/70 w-full md:w-1/3 p-10 text-white flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <h2 className="text-lg font-semibold mb-2">
            Key points about company
          </h2>
          <p className="text-sm text-gray-300 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>

          <div className="space-y-4 text-sm text-white/90">
            <Accordion title="History" />
            <Accordion title="Quality" />
            <Accordion title="Future" />
          </div>
        </div>

        <div className="flex space-x-4 mt-10">
          <FaFacebookF className="hover:text-gray-400 cursor-pointer" />
          <FaTwitter className="hover:text-gray-400 cursor-pointer" />
          <FaInstagram className="hover:text-gray-400 cursor-pointer" />
          <FaYoutube className="hover:text-gray-400 cursor-pointer" />
          <FaTelegramPlane className="hover:text-gray-400 cursor-pointer" />
        </div>
      </div>

      <div className="hidden md:block w-2/3"></div>
    </div>
  );
}

function Accordion({ title }: { title: string }) {
  return (
    <details className="group border-b border-gray-600 pb-2 cursor-pointer">
      <summary className="flex justify-between items-center text-white font-medium">
        <span className="group-hover:underline">{title}</span>
        <span className="text-xl transform group-open:rotate-180 transition-transform">
          ⌄
        </span>
      </summary>
      <p className="mt-2 text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </details>
  );
}
