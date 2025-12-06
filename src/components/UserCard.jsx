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
      className={`h-full bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md p-5 w-full hidden lg:flex flex-col justify-center items-center ${className}`}
    >
      {/* Top: image + name + role */}
      <div className="flex flex-col items-center mt-9">
        {/* Bigger image */}
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-100 shadow-sm">
          <img
            src={userImage}
            alt={`${name}'s profile`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name + Role */}
        <div className="mt-1 text-center mt-6">
          <h2 className="text-gray-800 font-semibold text-lg tracking-tight">
            {name}
          </h2>
          <p className="text-gray-500 text-sm font-medium mt-1">{role}</p>
        </div>
      </div>
      <hr className="w-full border-t border-gray-100 mt-5" />


      {/* Bottom: contact info with extra top margin */}
      <div className="w-full space-y-2 text-sm text-gray-700 mt-4">
        <div className="flex justify-between">
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
