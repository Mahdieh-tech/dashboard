import React from "react";

export default function UserInfoCard({ name, role, phone, id, image }) {
  return (
    <div className="">
      <div className="">
        <img src={image} alt={`${name}'s profile`} className="" />
      </div>

      <div className="">
        <h2 className="">{name}</h2>
        <p className="">{role}</p>
      </div>

      <div className="">
        <div className="">
          <span className="">شماره تماس:</span>
          <span className="">{phone}</span>
        </div>
        <div className="">
          <span className="">شناسه کاربر:</span>
          <span className="">{id}</span>
        </div>
      </div>
    </div>
  );
}
