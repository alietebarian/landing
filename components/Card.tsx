import React from "react";

export default function Card({img, title, desc}) {
  return (
    <div className="w-80 h-[390px] mx-auto bg-[#EEF0F4] rounded-xl shadow-inner-custom flex flex-col justify-between items-center p-6 transition-all duration-300 hover:shadow-inner-custom-hover">
      {/* Header with image */}
      <div className="w-full h-20 rounded-t-lg overflow-hidden flex items-center justify-center">
        <img
          src={img}
          alt="Card content"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content section */}
      <div className="flex flex-col items-center gap-2 text-gray-600 w-full">
        <span className="font-medium">{title}</span>
        <span className="text-sm">{desc}</span>
        <span className="text-sm">{desc}</span>
        <span className="text-sm">{desc}</span>
      </div>

      {/* Button */}
      <button className="w-full cursor-pointer py-2 px-6 rounded-full bg-gray-50 text-gray-700 text-sm font-medium shadow-custom-button hover:shadow-inner-custom-button active:scale-95 transition-all duration-200">
        مشاهده پروفایل
      </button>
    </div>
  );
}
