import React from "react";

export default function Stats({ totalDays = 90, daysLeft = 34 }) {
  const r = 45;
  const cx = 50;
  const cy = 50;
  const circumference = 2 * Math.PI * r;
  const percentage = Math.max(0, Math.min(1, daysLeft / totalDays));
  const offset = circumference * (1 - percentage);

  return (
    <div
      dir="rtl"
      className="bg-white rounded-2xl shadow-md p-6 w-full flex flex-col items-center"
    >
      {/* Chart */}
      <svg viewBox="0 0 100 100" width="120" height="120">
        {/* Background Circle */}
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="10"
        />

        {/* Progress Circle */}
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="#4f46e5"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${cx} ${cy})`}
        />

        {/* Center Text */}
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="12"
          fontWeight="600"
          fontFamily="sans-serif"
          fill="#111827"
        >
          {daysLeft} روز باقی‌مانده
        </text>
      </svg>

      <div className="mt-4 text-gray-500 text-sm text-center">
        زمان کل سرویس: <span className="font-semibold">{totalDays} روز</span>
      </div>
    </div>
  );
}