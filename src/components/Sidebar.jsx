import React from "react";
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
} from "lucide-react";

export default function Sidebar({ className = "" }) {
  return (
    <aside
      dir="rtl"
      className={`h-screen bg-white border-r border-gray-100 shadow-sm hidden lg:flex flex-col justify-between rounded-l-2xl ${className}`}
    >
      <div>
        <div className="px-6 py-6 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-xl font-bold text-indigo-600 tracking-tight">
            Flow<span className="text-gray-800">Finance</span>
          </h2>
        </div>

        <div className="px-4 py-4 space-y-6">
          <div className="space-y-1">
            <SidebarItem
              icon={<LayoutDashboard size={18} />}
              label="داشبورد"
              active
            />
            <SidebarItem icon={<Users size={18} />} label="کاربران" />
            <SidebarItem icon={<UserSquare2 size={18} />} label="مشتریان" />
            <SidebarItem icon={<Briefcase size={18} />} label="طرف حساب‌ها" />
          </div>

          <hr className="border-gray-100" />

          <div className="space-y-1">
            <SidebarItem icon={<Package size={18} />} label="کالا و خدمات" />
            <SidebarItem icon={<DollarSign size={18} />} label="مالی" />
            <SidebarItem icon={<BarChart3 size={18} />} label="گزارشات" />
            <SidebarItem icon={<Warehouse size={18} />} label="انبار" />
          </div>

          <hr className="border-gray-100" />

          <div className="space-y-1 ">
            <SidebarItem icon={<Settings size={18} />} label="تنظیمات" />
            <SidebarItem icon={<UserSquare2 size={18} />} label="حساب کاربری" />
            <div className="mt-15">
              {" "}
              <SidebarItem icon={<LogOut size={18} />} label="خروج" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function SidebarItem({ icon, label, active }) {
  return (
    <button
      className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
        ${
          active
            ? "bg-indigo-50 text-indigo-600"
            : "text-gray-600 hover:bg-gray-50 hover:text-indigo-600"
        }`}
    >
      <span className="text-gray-500">{icon}</span>
      <span className="flex-1 text-right">{label}</span>
    </button>
  );
}
