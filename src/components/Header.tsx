import React from "react";

export const Header = () => {
  return (
    <header className="w-full py-6 px-4 md:px-8 bg-white/80 backdrop-blur-sm border-b border-gray-200 animate-fade-in">
      <div className="max-w-6xl mx-auto flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-sky-blue-700 mb-2">
            مؤتمر اكليسيا
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            شباب اعدادي الجميل
          </p>
        </div>
      </div>
    </header>
  );
};
