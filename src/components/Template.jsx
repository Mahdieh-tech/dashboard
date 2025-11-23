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
      className="
        grid 
        grid-cols-1
        gap-3 
        bg-gray-100/70 
        p-0 
        h-full 
        pl-3

        lg:grid-cols-12
      "
    >
      <div className="lg:col-span-10">{header}</div>
      <div className="lg:col-span-2 lg:row-span-4">{sidebar}</div>
      <div className="lg:col-span-3">{user}</div>
      <div className="lg:col-span-7">{chart}</div>
      <div className="lg:col-span-10">{cards}</div>
      <div className="lg:col-span-2">{stats}</div>
      <div className="lg:col-span-8">{checks}</div>
    </div>
  );
}
