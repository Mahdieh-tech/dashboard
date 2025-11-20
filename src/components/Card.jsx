import React from "react";

export default function Cards({ className = "" }) {
  const cardsData = [
    { title: "خدمات تحویل داده شده", value: "44" },
    { title: "خدمات درحال انجام", value: "34" },
    { title: "مجموع خدمات", value: "78" },
    { title: "فاکتورهای خرید", value: "82" },
    { title: "فاکتورهای فروش", value: "100" },
    { title: "مجموع فاکتورها", value: "182" },
  ];

  return (
    <div
      dir="rtl"
      className={`grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-2 ${className}`}
    >
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md p-3 flex flex-col justify-between transition-transform hover:-translate-y-1 hover:shadow-lg"
        >
          <h3 className="text-gray-500 font-medium text-sm mb-2">{card.title}</h3>
          <p className="text-gray-800 font-semibold text-2xl">{card.value}</p>
        </div>
      ))}
    </div>
  );
}
