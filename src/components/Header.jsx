import React from "react";
import { Bell, User, Sun } from "lucide-react";

export default function Header({ className = "" }) {
  return (
    <header
      dir="rtl"
      className={` flex items-center justify-between px-6 py-4 bg-white rounded-2xl shadow-sm border border-gray-100 z-50 ${className}`}
    >
      <div>
        <h1 className="text-gray-800 text-xl font-semibold">
          سلام، کاربر 👋
        </h1>
        <p className="text-gray-400 text-sm">به داشبورد مالی خود خوش آمدید</p>
      </div>

      <div className="flex items-center w-1/3 relative">
        <input
          type="text"
          placeholder="جستجو..."
          className="w-full pr-10 pl-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-700 placeholder-gray-400 text-sm text-right"
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
        <IconButton icon={<Sun size={18} />} label="تغییر تم" />
        <IconButton icon={<Bell size={18} />} label="اعلان‌ها" />
        <div className="w-px h-6 bg-gray-200" />
        <IconButton icon={<User size={18} />} label="حساب کاربری" />
      </div>
    </header>
  );
}

function IconButton({ icon, label }) {
  return (
    <button
      title={label}
      className="p-2.5 rounded-xl bg-gray-50 hover:bg-indigo-50 border border-gray-200 text-gray-500 hover:text-indigo-600 transition-colors duration-200"
    >
      {icon}
    </button>
  );
}
