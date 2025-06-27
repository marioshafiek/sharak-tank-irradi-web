import React, { useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header className="w-full bg-white/80 backdrop-blur-sm border-b border-gray-200 animate-fade-in sticky top-0 z-50">
      {/* Navigation Bar */}
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-3 px-4 md:px-8">
        <div
          className="font-bold text-sky-blue-700 text-lg md:text-xl cursor-pointer"
          onClick={() => handleNavClick("hero")}
        >
          مؤتمر اكليسيا
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Open Menu">
            <svg
              className="w-7 h-7 text-sky-blue-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium text-gray-700 text-base">
          <li>
            <button
              className="hover:text-sky-blue-700"
              onClick={() => handleNavClick("hero")}
            >
              الرئيسية
            </button>
          </li>
          <li>
            <button
              className="hover:text-sky-blue-700"
              onClick={() => handleNavClick("details")}
            >
              التفاصيل
            </button>
          </li>
          <li>
            <button
              className="hover:text-sky-blue-700"
              onClick={() => handleNavClick("sharks")}
            >
              الشاركس
            </button>
          </li>
          <li>
            <a
              href="/dashboard"
              className="hover:text-sky-blue-700 font-bold border border-sky-blue-700 rounded-full px-4 py-1 ml-2 transition-colors duration-150"
            >
              Dashboard
            </a>
          </li>
        </ul>
        {/* Mobile Menu Fullscreen Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 w-screen h-screen z-[9999] flex flex-col items-center justify-center bg-sky-blue-700 text-white animate-fade-in">
            <button
              className="absolute top-6 left-6 text-white hover:text-gray-200 text-4xl font-bold focus:outline-none"
              onClick={() => setMenuOpen(false)}
              aria-label="Close Menu"
            >
              &times;
            </button>
            <ul className="flex flex-col gap-12 text-2xl font-bold text-center">
              <li>
                <button
                  className="hover:text-sky-200 transition-colors duration-150"
                  onClick={() => handleNavClick("hero")}
                >
                  الرئيسية
                </button>
              </li>
              <li>
                <button
                  className="hover:text-sky-200 transition-colors duration-150"
                  onClick={() => handleNavClick("details")}
                >
                  التفاصيل
                </button>
              </li>
              <li>
                <button
                  className="hover:text-sky-200 transition-colors duration-150"
                  onClick={() => handleNavClick("sharks")}
                >
                  الشاركس
                </button>
              </li>
              <li>
                <a
                  href="/dashboard"
                  className="hover:text-sky-200 transition-colors duration-150"
                >
                  Dashboard
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
      {/* Title & Description */}
      <div className="max-w-6xl mx-auto flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-sky-blue-700 mb-2">
            {/* مؤتمر اكليسيا */}
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            {/* شباب اعدادي الجميل */}
          </p>
        </div>
      </div>
    </header>
  );
};

// Tailwind Animations
// Add these to your global CSS if not already present:
// .animate-fade-in { animation: fadeIn 0.3s; }
// .animate-slide-in { animation: slideIn 0.3s; }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
