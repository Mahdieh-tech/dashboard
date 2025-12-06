import React, { useState, useEffect } from "react";
import { Bell, User, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/themeContext";

export default function Header({
  isSidebarOpen,
  setIsSidebarOpen,
  className = "",
}) {
  // const [isDark, setIsDark] = useState(false);
  // const toggleDark = () => {
  //   setIsDark(!isDark);
  //   document.documentElement.classList.toggle("dark");
  //   console.log(isDark)
  // };

  // const [isDark, setIsDark] = useState(false);
  // useEffect(() => {
  //   if (isDark) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [isDark]);

  // const toggleDark = () => {
  //   setIsDark(!isDark);
  //   console.log(isDark);
  // };
  const { theme, toggleTheme } = useTheme();
  return (
    <header
      dir="rtl"
      className={`dark:bg-gray-600 flex items-center justify-between 
        px-6 py-3 bg-white rounded-2xl shadow-sm border border-gray-100 z-50 
        ${className}`}
    >
      <button
        onClick={() => setIsSidebarOpen((prev) => !prev)}
        id="menu-btn"
        className="lg:hidden p-2 rounded-md hover:bg-gray-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div className="flex items-center w-1/2 lg:w-1/3 relative">
        <input
          type="text"
          placeholder="جستجو..."
          className="w-full pr-10 pl-4 py-2 rounded-full 
          bg-gray-50 border border-gray-200 focus:ring-2 
          focus:ring-indigo-500 focus:outline-none text-gray-700 
          placeholder-gray-400 text-sm text-right"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>
      </div>

      <div className="flex items-center gap-3">
        <IconButton
          icon={theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          onClick={toggleTheme}
          label="تغییر تم"
        />
        <IconButton icon={<Bell size={18} />} label="اعلان‌ها" />
        <div className="w-px h-6 bg-gray-200" />
        <IconButton icon={<User size={18} />} label="حساب کاربری" />
      </div>
    </header>
  );
}

function IconButton({ icon, label, onClick }) {
  return (
    <button
      title={label}
      onClick={onClick}
      className="p-2.5 rounded-xl bg-gray-50 hover:bg-indigo-50 border border-gray-200 text-gray-500 hover:text-indigo-600 transition-colors duration-200"
    >
      {icon}
    </button>
  );
}
