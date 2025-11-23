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
        gap-1
        lg:gap-3
        bg-gray-100/70 
        p-0 
        h-full 
        pl-3

        lg:grid-cols-12
      "
    >
      <div className="order-1 lg:col-span-10">{header}</div>
      <div className="order-2 lg:col-span-2 lg:row-span-4">{sidebar}</div>
      <div className="order-3 lg:col-span-3">{user}</div>
      <div className="order-4 lg:col-span-7">{chart}</div>
      <div className="order-5 lg:col-span-10">{cards}</div>
      <div className="order-6 lg:col-span-2">{stats}</div>
      <div className="order-7 lg:col-span-8">{checks}</div>
    </div>
  );
}
