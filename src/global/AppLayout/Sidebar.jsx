import {
  Boxes,
  ChartNoAxesCombined,
  CircleDollarSign,
  LayoutGrid,
  LogOut,
  Settings,
  ShoppingCart,
  Tags,
  Users,
  X,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logo } from "../../assets/logos";
import { persistor } from "../../store";
import { logout } from "../../store/slices/authSlice";

const navItems = [
  { label: "Dashboard", path: "/admin/dashboard", icon: LayoutGrid },
  { label: "Products", path: "/admin/products", icon: Boxes },
  { label: "Categories", path: "/admin/categories", icon: Tags },
  { label: "Brands", path: "/admin/brands", icon: ChartNoAxesCombined },
  { label: "Orders", path: "/admin/orders", icon: ShoppingCart },
  { label: "Customers", path: "/admin/customers", icon: Users },
  { label: "Settings", path: "/admin/settings", icon: Settings },
];

const Sidebar = ({ isMobileSidebarOpen, toggleSidebar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    persistor.purge();
    navigate("/login");
  };

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-50 hidden w-64 flex-col border-r border-zinc-800 bg-stone-900/50 backdrop-blur-[6px] lg:flex">
        <SidebarContent onLogout={handleLogout} />
      </aside>

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 transform flex-col border-r border-zinc-800 bg-stone-900/95 backdrop-blur-[6px] transition-transform duration-300 lg:hidden ${
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          type="button"
          onClick={toggleSidebar}
          aria-label="Close sidebar"
          className="absolute right-4 top-4 rounded-lg border border-zinc-800 p-2 text-gray-400"
        >
          <X className="h-5 w-5" />
        </button>
        <SidebarContent onLogout={handleLogout} onNavigate={toggleSidebar} />
      </aside>

      {isMobileSidebarOpen ? (
        <button
          type="button"
          aria-label="Close sidebar overlay"
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={toggleSidebar}
        />
      ) : null}
    </>
  );
};

const SidebarContent = ({ onLogout, onNavigate }) => {
  return (
    <>
      <div className="flex h-20 items-center border-b border-zinc-800 px-6">
        <img
          src={logo}
          alt="Nikonikkos Home Improvement"
          className="h-[54px] w-[109px] object-contain"
        />
      </div>

      <nav className="flex-1 space-y-2 overflow-hidden px-3 py-6">
        {navItems.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={label}
            to={path}
            onClick={onNavigate}
            className={({ isActive }) =>
              [
                "flex items-center rounded-xl p-3 text-base font-medium leading-6 tracking-tight transition",
                isActive
                  ? "border border-rose-700/20 bg-rose-700/10 text-rose-700"
                  : "text-gray-400 hover:bg-white/5 hover:text-white",
              ].join(" ")
            }
          >
            <Icon className="h-5 w-5 shrink-0" strokeWidth={2.4} />
            <span className="pl-3">{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-zinc-800 p-4">
        <button
          type="button"
          onClick={onLogout}
          className="flex w-full items-center rounded-xl p-3 text-base font-medium leading-6 tracking-tight text-gray-400 transition hover:bg-white/5 hover:text-white"
        >
          <LogOut className="h-5 w-5 shrink-0" />
          <span className="pl-3">Logout</span>
        </button>
      </div>
    </>
  );
};

export default Sidebar;
