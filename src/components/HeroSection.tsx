import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles } from "lucide-react";

export const HeroSection = () => {
  const handleSubmitClick = () => {
    window.open("https://example.com/form", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo Placeholder */}
        <div className="mb-12 animate-fade-in">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto bg-gradient-to-br from-sky-blue-100 to-sky-blue-200 rounded-full flex items-center justify-center shadow-lg">
            <img
              src="/Shark.jpg"
              alt="Sharak Tank Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-sky-blue-800 mb-8 animate-slide-in-right animation-delay-200">
          شارك تانك إعدادي
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto animate-slide-in-left animation-delay-400">
          اعرضوا افكاركم وابدعاتكم من خلال اسكتش بسيط
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in animation-delay-600">
          <Button
            onClick={handleSubmitClick}
            size="lg"
            className="bg-gradient-to-r from-sky-blue-500 to-sky-blue-600 hover:from-sky-blue-600 hover:to-sky-blue-700 text-white px-8 py-4 text-lg md:text-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <ExternalLink className="ml-2 w-5 h-5" />
            قدّم فكرتك الآن
          </Button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-md mx-auto animate-fade-in animation-delay-800">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-1 bg-gradient-to-r from-sky-blue-200 to-sky-blue-300 rounded-full"
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};
