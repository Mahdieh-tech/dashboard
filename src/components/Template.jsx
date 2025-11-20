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
    <div className="grid grid-cols-12 grid-row-4 gap-6">
      <div className="col-span-10">{header}</div>
      <div className="col-span-2 grid-row-5">{sidebar}</div>
      <div className="col-span-3">{user}</div>
      <div className="col-span-9">{chart}</div>
      <div className="col-span-12">{cards}</div>
      <div className="col-span-2">{stats}</div>
      <div className="col-span-10">{checks}</div>
    </div>
  );
}
