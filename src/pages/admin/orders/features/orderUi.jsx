import { statusStyles } from "./orderUtils";

export const OrderStatusBadge = ({ status }) => (
  <span
    className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase ${
      statusStyles[status] || statusStyles.pending
    }`}
  >
    {status}
  </span>
);

export const Avatar = ({ value, name }) => {
  const isImage = typeof value === "string" && value.startsWith("http");

  return (
    <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/10 text-sm font-bold text-rose-700">
      {isImage ? (
        <img src={value} alt={name} className="h-full w-full object-cover" />
      ) : (
        value || name?.slice(0, 2)
      )}
    </div>
  );
};
