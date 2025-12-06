import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

export default function ChecksSection({ className = "" }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const transactions = [
    { title: "پرداخت قبض", amount: 500000, date: "1404/08/10", status: "موفق" },
    {
      title: "خرید کالا",
      amount: 1200000,
      date: "1404/08/11",
      status: "در انتظار",
    },
    {
      title: "برداشت بانکی",
      amount: 750000,
      date: "1404/08/12",
      status: "موفق",
    },
  ];

  return (
    <div
      dir="rtl"
      className={`bg-white rounded-2xl shadow-md border border-gray-100 p-6 w-full ${className}`}
    >
      <div className="flex flex-col flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-xl font-semibold text-gray-800">
          تاریخچه تراکنش‌ها
        </h2>
        <div className="flex gap-2 justify-end ">
          <DatePicker
            calendar={persian}
            locale={persian_fa}
            value={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholder="انتخاب تاریخ"
            inputClass="w-full h-[38px] px-4 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-indigo-500"
            className="w-32"
          />

          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition">
            خروجی
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 text-gray-500 text-sm font-medium border-b border-gray-100 pb-2 mb-2">
        <div className="text-right">عنوان</div>
        <div className="text-right">مبلغ (تومان)</div>
        <div className="text-right">تاریخ</div>
        <div className="text-right">وضعیت</div>
      </div>

      <div className="space-y-2">
        {transactions.map((tx, index) => (
          <div
            key={index}
            className={`grid grid-cols-4 items-center p-3 rounded-xl ${
              index % 2 === 0 ? "bg-gray-50" : "bg-white"
            } shadow-sm`}
          >
            <div className="text-gray-800 text-sm font-medium text-right">
              {tx.title}
            </div>
            <div className="text-gray-700 text-sm text-right">
              {tx.amount.toLocaleString()}
            </div>
            <div className="text-gray-500 text-sm text-right">{tx.date}</div>
            <div
              className={`text-sm font-semibold text-right ${
                tx.status === "موفق" ? "text-green-600" : "text-yellow-600"
              }`}
            >
              {tx.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
