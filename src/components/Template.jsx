export default function Template({
  header,
  sidebar,
  cards,
  stats,
  chart,
  user,
  checks,
  isSidebarOpen,
  setIsSidebarOpen,
}) {
  return (
    <div className="h-screen overflow-hidden flex bg-gray-100 dark:bg-gray-900">
      <div className="flex-1 flex flex-col h-full lg:mr-64">
        <header className="fixed top-0 left-0 right-0 lg:right-64 h-16 bg-white shadow z-40">
          {header}
        </header>

        <main className="lg:pt-23 pt-19 overflow-y-auto h-full lg:p-4 p-2 ">
          <div className="grid grid-cols-1 lg:grid-cols-12 auto-rows-min lg:gap-5 gap-2">
            <section className="lg:col-span-3 order-1">{user}</section>

            <section className="lg:col-span-9 order-2">{chart}</section>

            <section className="lg:col-span-12 order-3">{cards}</section>

            <section className="lg:col-span-3 order-4">{stats}</section>

            <section className="lg:col-span-9 order-5">{checks}</section>
          </div>
        </main>
      </div>

      <aside className="hidden lg:block fixed right-0 top-0 w-64 h-full bg-white shadow z-50">
        {sidebar}
      </aside>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <aside
        className={`
          lg:hidden fixed top-0 right-0 h-full w-64 bg-white shadow z-50 
          transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {sidebar}
      </aside>
    </div>
  );
}
