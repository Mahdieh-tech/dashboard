import React from "react";

export default function Cards({ className = "" }) {
  const cardsData = [
    { title: "خدمات تحویل شده", value: "44" },
    { title: "خدمات درحال انجام", value: "34" },
    { title: "مجموع خدمات", value: "78" },
    { title: "فاکتورهای خرید", value: "82" },
    { title: "فاکتورهای فروش", value: "100" },
    { title: "مجموع فاکتورها", value: "182" },
  ];

  return (
    <div
      dir="rtl"
      className={`h-full grid grid-cols-3 gap-2 ${className}`}
    >
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="p-5 bg-white rounded-xl shadow p-0 flex flex-col  justify-center hover:-translate-y-1 hover:shadow-lg transition-transform"
        >
          {/* Bigger, bolder title */}
          <h3 className="text-gray-600 font-semibold text-base text-right lg:mr-7">
            {card.title}
          </h3>

          {/* Bigger number, more dominant */}
          <p className="text-gray-700 font-bold  lg:text-4xl text-3xl m-1 text-left lg:ml-14 md:ml-6 ml-5">
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
}
