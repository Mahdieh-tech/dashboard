import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

export default function ChecksSection() {
  const [selectedDate, setSelectedDate] = useState(null);

  const transactions = [
    { title: "پرداخت قبض", amount: 500000, date: "1404/08/10", status: "موفق" },
    { title: "خرید کالا", amount: 1200000, date: "1404/08/11", status: "در انتظار" },
    { title: "برداشت بانکی", amount: 750000, date: "1404/08/12", status: "موفق" },
  ];

  return (
    <div className="" dir="rtl">
      <div className="">
        <h2 className="">تاریخچه تراکنش‌ها</h2>

        <div className="">
          <DatePicker
            calendar={persian}
            locale={persian_fa}
            value={selectedDate}
            onChange={date => setSelectedDate(date)}
            placeholder="انتخاب تاریخ"
            className=""
          />
          <button className="">خروجی</button>
        </div>
      </div>

      <div className="">
        <div>عنوان</div>
        <div>مبلغ (تومان)</div>
        <div>تاریخ</div>
      </div>

      <div className="">
        {transactions.map((tx, index) => (
          <div
            key={index}
            className=""
          >
            <div>{tx.title}</div>
            <div>{tx.amount.toLocaleString()}</div>
            <div>{tx.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}