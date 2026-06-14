const AdminStatusBadge = ({ status }) => {
  const isActive = status === "active";

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-bold uppercase leading-3 ${
        isActive
          ? "border-emerald-500/25 bg-emerald-400/10 text-emerald-400"
          : "border-rose-700/25 bg-rose-700/10 text-rose-700"
      }`}
    >
      {status}
    </span>
  );
};

export default AdminStatusBadge;
