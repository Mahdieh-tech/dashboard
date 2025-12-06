import React from "react";
import userImage from "../assets/user.png";

export default function UserInfoCard({
  name,
  role,
  phone,
  id,
  image,
  className,
}) {
  return (
    <div
      dir="rtl"
      className={`h-[256px] bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md p-5  w-full  hidden lg:flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-lg ${className}`}
    >
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-indigo-100 shadow-sm">
        <img
          src={userImage}
          alt={`${name}'s profile`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className=" mt-1">
        <h2 className="text-gray-800 font-semibold text-lg tracking-tight">{name}</h2>
        <p className="text-gray-500 text-sm font-medium">{role} </p>
      </div>

      <div className="w-full h-px bg-gray-100 mt-1 mb-4" />

      <div className="w-full space-y-2 text-sm text-gray-700 ">
        <div className="flex justify-between ">
          <span className="text-gray-500 font-medium">شماره تماس: </span>
          <span className="font-semibold">{phone}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500 font-medium">شناسه کاربر: </span>
          <span className="font-semibold">{id}</span>
        </div>
      </div>
    </div>
  );
}
