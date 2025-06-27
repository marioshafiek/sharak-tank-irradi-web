import React from "react";
import { Heart, Church } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 md:px-8 bg-sky-blue-800 text-white">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        {/* Church Icon */}
        <div className="mb-6">
          <Church className="w-12 h-12 mx-auto text-sky-blue-200" />
        </div>

        {/* Main Footer Text */}
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          شارك تانك إعدادي
        </h3>

        <p className="text-sky-blue-100 text-lg md:text-xl mb-6 max-w-2xl mx-auto leading-relaxed">
          مساحة للإبداع والتعبير عن احترام بيت الله
        </p>

        {/* Decorative Line */}
        <div className="w-32 h-1 bg-sky-blue-400 mx-auto mb-6 rounded-full"></div>

        {/* Bottom Text */}
        <div className="flex items-center justify-center gap-2 text-sky-blue-200">
          <span>صُنع بكل</span>
          <Heart className="w-4 h-4 text-red-400 fill-current" />
          {/* <span>للشباب المبدع</span> */}
        </div>

        {/* Copyright */}
        <p className="text-sky-blue-300 text-sm mt-4">
          © 2025 مؤتمر اكليسيا - جميع الحقوق محفوظة
        </p>
      </div>
    </footer>
  );
};
