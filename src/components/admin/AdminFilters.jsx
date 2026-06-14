import { Search } from "lucide-react";

const AdminFilters = ({ search, onSearchChange, children }) => {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-stone-900/70 p-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <label className="relative flex-1">
          <span className="sr-only">Search</span>
          <input
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search by name or SKU..."
            className="h-10 w-full rounded-xl border border-zinc-800 bg-black/40 py-2 pl-11 pr-4 text-sm text-white outline-none placeholder:text-gray-500 focus:ring-1 focus:ring-rose-700"
          />
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
        </label>
        {children}
      </div>
    </div>
  );
};

export const AdminSelect = ({ value, onChange, children, label }) => (
  <label className="min-w-[160px]">
    <span className="sr-only">{label}</span>
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="h-10 w-full rounded-xl border border-zinc-800 bg-black/40 px-4 text-sm text-white outline-none focus:ring-1 focus:ring-rose-700"
    >
      {children}
    </select>
  </label>
);

export default AdminFilters;
