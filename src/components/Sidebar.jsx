import React from "react";

export default function Sidebar() {
  return (
    <div className="" dir="rtl">
      <div className="">
        <SidebarItem label="داشبورد" />
        <SidebarItem label="کاربران" />
        <SidebarItem label="مشتریان" />
        <SidebarItem label="طرف حساب‌ها" />
      </div>

      <div className="">
        <SidebarItem label="کالا و خدمات" />
        <SidebarItem label="مالی" />
        <SidebarItem label="گزارشات" />
        <SidebarItem label="انبار" />
      </div>

      <div>
        <SidebarItem label="تنظیمات" />
        <SidebarItem label="حساب کاربری" />
        <SidebarItem label="خروج" />
      </div>
    </div>
  );
}

function SidebarItem({ label }) {
  return (
    <div className="">
      {label}
    </div>
  );
}


