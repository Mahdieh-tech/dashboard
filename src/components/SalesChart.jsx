import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Download } from "lucide-react";

export default function SalesChart({ className = "" }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.matchMedia("(max-width: 640px)").matches);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  const data = [
    { month: "فروردین", income: 5500000, expense: 3200000 },
    { month: "اردیبهشت", income: 7200000, expense: 4100000 },
    { month: "خرداد", income: 6800000, expense: 3600000 },
    { month: "تیر", income: 5900000, expense: 3900000 },
    { month: "مرداد", income: 7500000, expense: 4500000 },
    { month: "شهریور", income: 8000000, expense: 4800000 },
    { month: "مهر", income: 6300000, expense: 4000000 },
    { month: "آبان", income: 7100000, expense: 4700000 },
    { month: "آذر", income: 8400000, expense: 5200000 },
    { month: "دی", income: 9100000, expense: 5600000 },
    { month: "بهمن", income: 8800000, expense: 5400000 },
    { month: "اسفند", income: 9500000, expense: 6100000 },
  ];

  const [showDownload, setShowDownload] = React.useState(false);

  const handleDownload = (type) => {
    console.log(`Downloading chart as ${type}`);
    setShowDownload(false);
  };

  return (
    <div
      dir="rtl"
      className={`bg-white rounded-2xl shadow-md p-3 w-full border border-gray-100 ${className}`}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">بررسی مخارج</h2>

        <div className="relative">
          <button
            onClick={() => setShowDownload((prev) => !prev)}
            className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-gray-700 text-sm transition"
          >
            <Download size={16} />
            <span>دانلود</span>
          </button>

          {showDownload && (
            <div className="absolute left-0 mt-2 w-28 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <button
                onClick={() => handleDownload("svg")}
                className="block w-full text-right px-4 py-2 hover:bg-gray-50 text-sm"
              >
                SVG
              </button>
              <button
                onClick={() => handleDownload("png")}
                className="block w-full text-right px-4 py-2 hover:bg-gray-50 text-sm"
              >
                PNG
              </button>
              <button
                onClick={() => handleDownload("csv")}
                className="block w-full text-right px-4 py-2 hover:bg-gray-50 text-sm"
              >
                CSV
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="h-[170px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={[...data].reverse()}
            margin={{ top: 10, right: 0, left: -5, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{
                fill: "#6b7280",
                fontSize: 11,
                dy: isSmallScreen ? 8 : 0,
                dx: isSmallScreen ? -20 : 0,
              }}
              axisLine={false}
              tickLine={false}
              interval={0}
              angle={isSmallScreen ? -45 : 0}
              textAnchor={isSmallScreen ? "end" : "middle"}
              reversed
            />

            <YAxis
              tickFormatter={(value) => `${value / 1000000}تومان`}
              tick={{ fill: "#6b7280", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              tickMargin={40}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                border: "1px solid #e5e7eb",
                direction: "rtl",
              }}
              formatter={(value) => `${value.toLocaleString()} تومان`}
              labelStyle={{ direction: "rtl" }}
            />
            <Legend
              wrapperStyle={{ direction: "rtl" }}
              iconType="circle"
              verticalAlign="top"
              align="right"
              height={30}
            />
            <Bar
              dataKey="income"
              name="درآمد"
              fill="#4f46e5"
              radius={[8, 8, 0, 0]}
              barSize={12}
            />
            <Bar
              dataKey="expense"
              name="مخارج"
              fill="#a78bfa"
              radius={[8, 8, 0, 0]}
              barSize={12}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
