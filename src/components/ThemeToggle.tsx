"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { useState, useEffect } from "react";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Log theme changes for debugging
  useEffect(() => {
    if (mounted) {
      console.log("Current theme:", theme);
    }
  }, [theme, mounted]);

  if (!mounted) {
    return (
      <div className="w-12 h-6 md:w-14 md:h-8 bg-gray-200 rounded-full p-1">
        <div className="w-4 h-4 md:w-6 md:h-6 bg-white rounded-full shadow-md"></div>
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: isDark ? undefined : "#E5E7EB",
        backgroundImage: isDark
          ? "linear-gradient(to right, rgb(16, 185, 129), rgb(20, 184, 166))"
          : undefined,
      }}
      className="relative w-12 h-6 md:w-14 md:h-8 rounded-full p-1 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 shadow-lg hover:shadow-xl"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Current: ${theme} mode - Click to switch`}
    >
      {/* Toggle Circle */}
      <div
        style={{
          transform: isDark ? "translateX(20px)" : "translateX(0px)",
        }}
        className="w-4 h-4 md:w-6 md:h-6 bg-white rounded-full shadow-md transition-all duration-300 ease-in-out flex items-center justify-center"
      >
        <span className="text-xs">{isDark ? "🌙" : "☀️"}</span>
      </div>
    </button>
  );
};
