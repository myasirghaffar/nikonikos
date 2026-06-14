import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileSidebarOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileSidebarOpen]);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Sidebar
        isMobileSidebarOpen={isMobileSidebarOpen}
        toggleSidebar={() => setIsMobileSidebarOpen((previous) => !previous)}
      />

      <div className="min-h-screen lg:pl-64">
        <Header toggleSidebar={() => setIsMobileSidebarOpen(true)} />
        <main className="min-h-[calc(100vh-80px)] bg-[radial-gradient(circle_at_85%_12%,rgba(200,16,46,0.16),transparent_32%),radial-gradient(circle_at_23%_88%,rgba(200,16,46,0.13),transparent_30%),#0f0f0f] p-5 md:p-10">
          <Outlet key={location.pathname} />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
