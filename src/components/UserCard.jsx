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
      className={`h-full 
      bg-white/90 dark:bg-gray-800
      backdrop-blur-md 
      border border-gray-200 dark:border-gray-700 
      rounded-2xl shadow-md p-5 w-full 
      hidden lg:flex flex-col justify-center items-center 
      ${className}`}
    >
      <div className="flex flex-col items-center mt-9">
        <div
          className="w-32 h-32 rounded-full overflow-hidden 
        border-4 border-indigo-100 dark:border-indigo-900 shadow-sm"
        >
          <img
            src={userImage}
            alt={`${name}'s profile`}
            className="w-full h-full object-cover dark:filter dark:brightness-85"
          />
        </div>

        <div className="mt-6 text-center">
          <h2 className="text-gray-800 dark:text-gray-200 font-semibold text-lg tracking-tight">
            {name}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mt-1">
            {role}
          </p>
        </div>
      </div>

      <hr className="w-full border-t border-gray-100 dark:border-gray-700 mt-5" />

      <div className="w-full space-y-2 text-sm text-gray-700 dark:text-gray-200 mt-4">
        <div className="flex justify-between">
          <span className="text-gray-500 dark:text-gray-400 font-medium">
            شماره تماس:
          </span>
          <span className="font-semibold">{phone}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500 dark:text-gray-400 font-medium">
            شناسه کاربر:
          </span>
          <span className="font-semibold">{id}</span>
        </div>
      </div>
    </div>
  );
}
