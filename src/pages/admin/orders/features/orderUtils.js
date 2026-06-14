export const formatCurrency = (value, currency = "$") =>
  `${currency}${Number(value || 0).toLocaleString(undefined, {
    minimumFractionDigits: currency === "Rs." ? 0 : 2,
    maximumFractionDigits: 2,
  })}`;

export const statusStyles = {
  processing: "border-blue-500/25 bg-blue-500/10 text-blue-400",
  pending: "border-amber-500/25 bg-amber-500/10 text-amber-400",
  delivered: "border-emerald-500/25 bg-emerald-500/10 text-emerald-400",
  shipped: "border-purple-500/25 bg-purple-500/10 text-purple-400",
  cancelled: "border-red-500/25 bg-red-500/10 text-red-400",
};
