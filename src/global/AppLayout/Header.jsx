import { Bell, ChevronDown, Menu, Search } from "lucide-react";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="flex h-20 items-center justify-between border-b border-zinc-800 bg-neutral-900/80 px-5 backdrop-blur-md md:px-10">
      <div className="flex flex-1 items-center gap-4">
        <button
          type="button"
          onClick={toggleSidebar}
          aria-label="Open sidebar"
          className="rounded-lg border border-zinc-800 p-2 text-gray-400 lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        <label className="relative hidden w-full max-w-[448px] md:block">
          <span className="sr-only">Search anything</span>
          <input
            type="search"
            placeholder="Search anything here..."
            className="h-12 w-full rounded-full border border-zinc-800 bg-stone-900 py-2.5 pl-11 pr-4 text-sm text-white outline-none placeholder:text-gray-500 focus:ring-1 focus:ring-rose-700"
          />
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
        </label>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label="Notifications"
          className="relative flex size-10 items-center justify-center rounded-full border border-zinc-800 text-gray-400"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute right-2 top-2 size-2 rounded-full bg-rose-700 shadow-[0_0_15px_rgba(200,16,46,0.3)]" />
        </button>

        <div className="hidden h-8 w-px bg-[#2D2D2D] sm:block" />

        <button type="button" className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/80?img=12"
            alt="Mike Smith"
            className="size-10 rounded-full border border-[#2D2D2D] object-cover"
          />
          <span className="hidden flex-col items-start sm:flex">
            <span className="text-sm font-medium leading-5 tracking-tight text-white">
              Mike Smith
            </span>
            <span className="text-xs font-normal leading-4 text-gray-500">
              Super Admin
            </span>
          </span>
          <ChevronDown className="hidden h-4 w-4 text-gray-500 sm:block" />
        </button>
      </div>
    </header>
  );
};

export default Header;
