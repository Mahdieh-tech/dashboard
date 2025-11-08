import React from "react";

export default function UserInfoCard() {
  const user = {
    name: "حسین حسینی",
    role: "مدیر سیستم",
    phone: "0912459789",
    id: "4311798624",
    image: "/path-to-profile.jpg",
  };

  return (
    <div className="">
      <div className="">
        <img src={user.image} alt="User Profile" className="" />
      </div>

      <div className="">
        <h2 className="">{user.name}</h2>
        <p className="">{user.role}</p>
      </div>

      <div className="">
        <div className="">
          <span className="">ارتباط: </span>
          <span className="">{user.phone}</span>
        </div>
        <div className="">
          <span className="">نام کاربری:</span>
          <span className="">{user.id}</span>
        </div>
      </div>
    </div>
  );
}