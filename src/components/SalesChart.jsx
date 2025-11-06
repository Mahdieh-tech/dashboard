import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Download } from "lucide-react";

export default function SalesChart() {
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
    <div dir="rtl">
      <div className="">
        <h2 className="">بررسی مخارج</h2>

        <div className="relative">
          <button
            onClick={() => setShowDownload((prev) => !prev)}
            className=""
          >
            <Download size={16} />
            <span>دانلود</span>
          </button>

          {showDownload && (
            <div className="">
              <button onClick={() => handleDownload("svg")}>SVG</button>
              <button onClick={() => handleDownload("png")}>PNG</button>
              <button onClick={() => handleDownload("csv")}>CSV</button>
            </div>
          )}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(value) => `${value / 1000000}میلیون`} />
          <Tooltip
            formatter={(value) =>
              `${value.toLocaleString()} تومان`
            }
          />
          <Legend />
          <Bar dataKey="income" name="درآمد" />
          <Bar dataKey="expense" name="مخارج" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
