import React from "react";
import { Bell, User, Sun } from "lucide-react"; // icons for bell, user, and theme

export default function Header() {
  return (
    <header className="">
      <div>
        <h1 className="">سلام، کاربر </h1>
      </div>

      <div className="">
        <input
          type="text"
          placeholder="جستجو..."
          className=""
        />
      </div>

      <div className="bg-red">
        <IconButton icon={<Sun size={20} />} label="Theme" />
        <IconButton icon={<Bell size={20} />} label="Notifications" />
        <IconButton icon={<User size={20} />} label="Account" />
      </div>
    </header>
  );
}


function IconButton({ icon, label }) {
  return (
    <button
      title={label}
      className=""
    >
      {icon}
    </button>
  );
}
