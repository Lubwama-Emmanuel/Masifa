"use client";

import { useState } from "react";
import Link from "next/link";

export const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/about", label: "About", icon: "👥" },
    { href: "/homes", label: "Our Homes", icon: "🏡" },
    { href: "/referrals", label: "Referrals", icon: "📞" },
    { href: "/activities", label: "Activities", icon: "🎯" },
    { href: "/careers", label: "Careers", icon: "💼" },
    { href: "/contact", label: "Contact", icon: "📧" },
  ];

  return (
    <>
      {/* Blur Overlay */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 backdrop-blur-md animate-blur-fade-in"
            : "opacity-0 backdrop-blur-none pointer-events-none animate-blur-fade-out"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Floating Menu Button */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999]">
        {/* Menu Items */}
        <div
          className={`absolute bottom-16 md:bottom-16 right-0 space-y-2 md:space-y-3 transition-all duration-500 ease-in-out ${
            isOpen
              ? "opacity-100 translate-y-0 scale-100 backdrop-blur-sm"
              : "opacity-0 translate-y-4 scale-95 pointer-events-none backdrop-blur-none"
          }`}
        >
          {menuItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center space-x-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md text-gray-900 dark:text-white px-4 py-3 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105 hover:-translate-x-2 hover:backdrop-blur-lg"
              style={{
                transitionDelay: `${index * 50}ms`,
                animationDelay: `${index * 100}ms`,
              }}
              onClick={() => setIsOpen(false)}
            >
              <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                {item.icon}
              </span>
              <span className="font-semibold whitespace-nowrap group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Main Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`group relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 ease-in-out transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-500/50 animate-float-menu backdrop-blur-sm ${
            isOpen ? "backdrop-blur-md scale-105" : "backdrop-blur-none"
          }`}
        >
          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-5 h-5 md:w-6 md:h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce-gentle">
            !
          </div>
          {/* Pulse Ring Effect */}
          <div
            className={`absolute inset-0 rounded-full bg-emerald-500/30 transition-all duration-500 ease-in-out ${
              isOpen ? "animate-pulse-ring opacity-100" : "opacity-0 scale-0"
            }`}
          />
          <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative flex items-center justify-center">
            <div
              className={`w-6 h-6 transition-all duration-500 ease-in-out ${
                isOpen ? "rotate-45 scale-110" : "rotate-0 scale-100"
              }`}
            >
              <div
                className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? "rotate-90" : "rotate-0"
                }`}
              />
              <div className="absolute w-6 h-0.5 bg-white top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </button>
      </div>
    </>
  );
};
