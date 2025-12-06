import { useRef, useEffect } from "react";

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
  DarkTest,
}) {
  const sidebarRef = useRef();


  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        isSidebarOpen
      ) {
        setIsSidebarOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen, setIsSidebarOpen]);

  return (
    <div className="grid grid-cols-1 gap-1 lg:gap-3 bg-gray-100/70 p-0 h-full pl-1 pr-1 lg:pl-2.5 lg:grid-cols-12">
      
      <div className="order-1 lg:col-span-10">{header}</div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/45 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      <div
        ref={sidebarRef}
        className={`
          fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50
          transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}
          lg:hidden
        `}
      >
        {sidebar}
      </div>

      <div className="hidden lg:block order-2 lg:col-span-2 lg:row-span-4">
        {sidebar}
      </div>
      {/* <div>
      {DarkTest}
    </div> */}

      <div className="order-3 lg:col-span-3">{user}</div>
      <div className="order-4 lg:col-span-7">{chart}</div>
      <div className="order-5 lg:col-span-10">{cards}</div>
      <div className="order-6 lg:col-span-2">{stats}</div>
      <div className="order-7 lg:col-span-8">{checks}</div>
    </div>
  );
}
