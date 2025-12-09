import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  UserSquare2,
  Briefcase,
  Package,
  DollarSign,
  BarChart3,
  Warehouse,
  Settings,
  LogOut,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function Sidebar({ className = "" }) {
  const [activeMenu, setActiveMenu] = useState("داشبورد");
  const [openMenu, setOpenMenu] = useState(null);

  const handleToggle = (label) => {
    setOpenMenu(openMenu === label ? null : label);
    setActiveMenu(label);
  };

  return (
    <aside
      dir="rtl"
      className={`h-screen bg-white dark:bg-gray-800 flex flex-col ${className}`}
    >
      <div className="px-6 py-6 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
        <h2 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 tracking-tight">
          Flow
          <span className="text-gray-800 dark:text-gray-200">Finance</span>
        </h2>
      </div>
      <div className="px-4 py-4 space-y-3 ">
        <div className="space-y-1">
          <SidebarItem
            icon={<LayoutDashboard size={18} />}
            label="داشبورد"
            isActive={activeMenu === "داشبورد"}
            onClick={() => setActiveMenu("داشبورد")}
          />
          <SidebarItem
            icon={<Users size={18} />}
            label="کاربران"
            submenu={["لیست کاربران", "اضافه کردن کاربر"]}
            isOpen={openMenu === "کاربران"}
            isActive={activeMenu === "کاربران"}
            onClick={() => handleToggle("کاربران")}
          />
          <SidebarItem
            icon={<UserSquare2 size={18} />}
            label="مشتریان"
            submenu={["لیست مشتریان", "مشتریان VIP"]}
            isOpen={openMenu === "مشتریان"}
            isActive={activeMenu === "مشتریان"}
            onClick={() => handleToggle("مشتریان")}
          />
          <SidebarItem
            icon={<Briefcase size={18} />}
            label="طرف حساب‌ها"
            submenu={["طرف حساب جدید", "لیست طرف حساب‌ها"]}
            isOpen={openMenu === "طرف حساب‌ها"}
            isActive={activeMenu === "طرف حساب‌ها"}
            onClick={() => handleToggle("طرف حساب‌ها")}
          />
        </div>

        <hr className="border-gray-100 dark:border-gray-700" />

        <div className="space-y-1">
          <SidebarItem
            icon={<Package size={18} />}
            label="کالا و خدمات"
            submenu={["کالا جدید", "لیست کالاها"]}
            isOpen={openMenu === "کالا و خدمات"}
            isActive={activeMenu === "کالا و خدمات"}
            onClick={() => handleToggle("کالا و خدمات")}
          />
          <SidebarItem
            icon={<DollarSign size={18} />}
            label="مالی"
            submenu={["تراکنش‌ها", "صورتحساب‌ها"]}
            isOpen={openMenu === "مالی"}
            isActive={activeMenu === "مالی"}
            onClick={() => handleToggle("مالی")}
          />
          <SidebarItem
            icon={<BarChart3 size={18} />}
            label="گزارشات"
            submenu={["گزارش روزانه", "گزارش ماهانه"]}
            isOpen={openMenu === "گزارشات"}
            isActive={activeMenu === "گزارشات"}
            onClick={() => handleToggle("گزارشات")}
          />
          <SidebarItem
            icon={<Warehouse size={18} />}
            label="انبار"
            submenu={["تاریخچه انبار", "ورود/خروج کالا"]}
            isOpen={openMenu === "انبار"}
            isActive={activeMenu === "انبار"}
            onClick={() => handleToggle("انبار")}
          />
        </div>

        <hr className="border-gray-100 dark:border-gray-700" />

        <div className="space-y-1">
          <SidebarItem
            icon={<Settings size={18} />}
            label="تنظیمات"
            submenu={["تنظیمات عمومی", "مدیریت اعلان‌ها"]}
            isOpen={openMenu === "تنظیمات"}
            isActive={activeMenu === "تنظیمات"}
            onClick={() => handleToggle("تنظیمات")}
          />
          <SidebarItem
            icon={<UserSquare2 size={18} />}
            label="حساب کاربری"
            submenu={["پروفایل", "تغییر رمز"]}
            isOpen={openMenu === "حساب کاربری"}
            isActive={activeMenu === "حساب کاربری"}
            onClick={() => handleToggle("حساب کاربری")}
          />
        </div>
      </div>

      <div className="px-4 mt-auto mb-6">
        <SidebarItem icon={<LogOut size={18} />} label="خروج" />
      </div>
    </aside>
  );
}

function SidebarItem({ icon, label, submenu, isOpen, isActive, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 w-full
        ${
          isActive
            ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300"
            : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-300"
        }`}
      >
        <span className="text-gray-500 dark:text-gray-400">{icon}</span>
        <span className="flex-1 text-right">{label}</span>
        {submenu && (
          <span>
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </span>
        )}
      </button>

      {isOpen && submenu && (
        <div className="flex flex-col mr-6 mt-1 space-y-1">
          {submenu.map((item) => (
            <button
              key={item}
              className="text-right px-4 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
