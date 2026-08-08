import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import { useState } from "react";
import Header from "../ui/header";
// import Header from "../../../components/header";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <>
      <div className="flex min-h-screen">
        <div
          className={`fixed top-0 left-0 h-screen overflow-y-auto z-50 ${
            sidebarOpen ? "block" : "hidden lg:block"
          }`}
        >
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </div>
        <div className="flex-1 lg:ml-[240px] w-full">
          <div className="fixed top-0 right-0 left-0 lg:left-[240px] z-20">
            <Header onMenuClick={() => setSidebarOpen(true)} />
          </div>
          <main className="h-[calc(100vh-82px)] h-full pt-[4rem] pb-10 bg-(--skyblue) md:px-8 px-4">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
