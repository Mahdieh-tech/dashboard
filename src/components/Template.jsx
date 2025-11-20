export default function Template({
  header,
  sidebar,
  cards,
  stats,
  chart,
  user,
  checks,
}) {
  return (
    <div
      className="grid grid-cols-12 gap-3 bg-gray-100/70 p-0 h-full pl-3"
    >
      <div className="col-span-10 ">{header}</div>
      <div className="col-span-2 row-span-4 ">{sidebar}</div>
      <div className="col-span-3 ">{user}</div>
      <div className="col-span-7 ">{chart}</div>
      <div className="col-span-10 ">{cards}</div>
      <div className="col-span-2 ">{stats}</div>
      <div className="col-span-8 ">{checks}</div>
    </div>
  );
}
