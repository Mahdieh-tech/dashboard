export default function Stats({ totalDays = 90, daysLeft = 34, className }) {
  const r = 45;
  const cx = 50;
  const cy = 50;
  const circumference = 2 * Math.PI * r;
  const percentage = Math.max(0, Math.min(1, daysLeft / totalDays));
  const offset = circumference * (1 - percentage);

  return (
    <div
      dir="rtl"
      className={`h-full bg-white dark:bg-gray-800 rounded-2xl shadow-md p-0 w-full hidden lg:flex flex-col items-center justify-center ${className}`}
    >
      <svg viewBox="0 0 100 100" width="130" height="130">
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="#e5e7eb"
          className="dark:stroke-gray-700"
          strokeWidth="10"
        />

        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="#4f46e5"
          className="dark:stroke-indigo-500"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${cx} ${cy})`}
        />

        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="12"
          fontWeight="600"
          fontFamily="sans-serif"
          fill="#111827"
          className="dark:fill-gray-100"
        >
          {daysLeft} روز باقی‌مانده
        </text>
      </svg>

      <div className="mt-4 text-gray-500 dark:text-gray-400 text-sm text-center">
        زمان کل سرویس:{" "}
        <span className="font-semibold dark:text-gray-200">
          {totalDays} روز
        </span>
      </div>
    </div>
  );
}
