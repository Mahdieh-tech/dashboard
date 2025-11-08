import React from "react";

export default function Cards() {
  const cardsData = [
    { title: "خدمات تحویل داده شده", value: "44" },
    { title: "خدمات درحال انجام", value: "34" },
    { title: "مجموع خدمات", value: "78" },
    { title: "فاکتورهای خرید", value: "82" },
    { title: "فاکتورهای فروش", value: "100" },
    { title: "مجموع فاکتورها", value: "182" },
  ];

  return (
    <div className="">
      {cardsData.map((card, index) => (
        <div key={index} className="">
          <h3 className="">{card.title}</h3>
          <p className="">{card.value}</p>
        </div>
      ))}
    </div>
  );
}