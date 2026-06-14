const AdminFormSection = ({ title, children, className = "" }) => {
  return (
    <section className={`overflow-hidden rounded-2xl border border-zinc-800 bg-stone-900/70 ${className}`}>
      <div className="bg-white/5 px-6 py-5">
        <h2 className="text-base font-bold leading-6 text-white">{title}</h2>
      </div>
      <div className="p-6">{children}</div>
    </section>
  );
};

export const AdminField = ({ label, children }) => (
  <label className="block">
    <span className="mb-2 block text-sm font-normal leading-5 text-gray-400">
      {label}
    </span>
    {children}
  </label>
);

export const inputClass =
  "h-11 w-full rounded-xl border border-zinc-800 bg-black/50 px-4 text-sm text-white outline-none placeholder:text-gray-500 focus:ring-1 focus:ring-rose-700";

export const textareaClass =
  "min-h-24 w-full resize-none rounded-xl border border-zinc-800 bg-black/50 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:ring-1 focus:ring-rose-700";

export default AdminFormSection;
