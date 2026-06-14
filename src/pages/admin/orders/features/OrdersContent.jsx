import { Download, MoreVertical } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminPagination from "../../../../components/admin/AdminPagination";
import { getOrders } from "../../../../lib/adminCommerceStore";
import { Avatar, OrderStatusBadge } from "./orderUi";
import { formatCurrency } from "./orderUtils";

const OrdersContent = () => {
  const navigate = useNavigate();
  const [orders] = useState(getOrders);
  const [status, setStatus] = useState("all");
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const filteredOrders = useMemo(
    () =>
      status === "all"
        ? orders
        : orders.filter((order) => order.status === status),
    [orders, status],
  );

  const totalPages = Math.max(1, Math.ceil(filteredOrders.length / pageSize));
  const visibleOrders = filteredOrders.slice((page - 1) * pageSize, page * pageSize);

  const statCards = [
    { label: "Pending Orders", value: 42, trend: "+12%", tone: "text-amber-400 bg-amber-500/10" },
    { label: "Out for Delivery", value: 128, trend: "+5.2%", tone: "text-blue-400 bg-blue-500/10" },
    { label: "Completed Today", value: 85, trend: "+18%", tone: "text-emerald-400 bg-emerald-500/10" },
    { label: "Revenue (24h)", value: "$12,490", trend: "-2.4%", tone: "text-rose-700 bg-rose-700/10" },
  ];

  const exportOrders = () => {
    const rows = [
      ["Order ID", "Customer", "Date", "Amount", "Status"],
      ...filteredOrders.map((order) => [
        order.orderId,
        order.customer,
        order.date,
        order.amount,
        order.status,
      ]),
    ];
    const csv = rows.map((row) => row.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "orders.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-10">
      <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
        {statCards.map((card) => (
          <article
            key={card.label}
            className="rounded-2xl border border-blue-500/10 bg-stone-900/70 p-7"
          >
            <p className="text-base font-medium text-gray-500">{card.label}</p>
            <div className="mt-4 flex items-center justify-between gap-4">
              <p className="text-3xl font-bold text-white">{card.value}</p>
              <span className={`rounded px-3 py-1 text-sm font-bold ${card.tone}`}>
                {card.trend}
              </span>
            </div>
          </article>
        ))}
      </div>

      <section className="overflow-hidden rounded-2xl border border-blue-500/10 bg-stone-900/70">
        <div className="flex flex-col gap-4 border-b border-blue-500/10 px-7 py-6 md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl font-bold text-white">Recent Orders</h1>
          <div className="flex gap-3">
            <select
              value={status}
              onChange={(event) => {
                setStatus(event.target.value);
                setPage(1);
              }}
              className="h-10 rounded-xl border border-blue-500/20 bg-white/5 px-4 text-sm text-gray-300 outline-none"
            >
              <option value="all">All Status</option>
              <option value="processing">Processing</option>
              <option value="pending">Pending</option>
              <option value="delivered">Delivered</option>
              <option value="shipped">Shipped</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <button
              type="button"
              onClick={exportOrders}
              className="inline-flex h-10 items-center gap-2 rounded-xl border border-blue-500/20 bg-white/5 px-4 text-sm text-gray-300"
            >
              Export <Download className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] border-collapse">
            <thead className="bg-black/10">
              <tr>
                {["Order ID", "Customer", "Date", "Amount", "Status", "Action"].map(
                  (heading) => (
                    <th
                      key={heading}
                      className="px-10 py-5 text-left text-xs font-bold uppercase tracking-wider text-gray-500"
                    >
                      {heading}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {visibleOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-t border-blue-500/10 odd:bg-white/[0.015] even:bg-rose-700/[0.04]"
                >
                  <td className="px-10 py-7 text-base font-medium text-rose-700">
                    {order.orderId}
                  </td>
                  <td className="px-10 py-7">
                    <div className="flex items-center gap-4">
                      <Avatar value={order.avatar} name={order.customer} />
                      <span className="max-w-32 text-base font-medium text-white">
                        {order.customer}
                      </span>
                    </div>
                  </td>
                  <td className="px-10 py-7 text-base text-gray-400">{order.date}</td>
                  <td className="px-10 py-7 text-base font-bold text-white">
                    {formatCurrency(order.amount)}
                  </td>
                  <td className="px-10 py-7">
                    <OrderStatusBadge status={order.status} />
                  </td>
                  <td className="px-10 py-7">
                    <button
                      type="button"
                      onClick={() => navigate(`/admin/orders/${order.id}`)}
                      className="rounded-lg p-2 text-gray-500 hover:bg-white/5 hover:text-white"
                      aria-label={`Open ${order.orderId}`}
                    >
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="border-t border-blue-500/10 px-7 py-5">
          <AdminPagination
            page={page}
            totalPages={totalPages}
            onPageChange={setPage}
            summary={`Showing ${(page - 1) * pageSize + 1}-${Math.min(
              page * pageSize,
              filteredOrders.length,
            )} of ${filteredOrders.length} orders`}
          />
        </div>
      </section>
    </div>
  );
};

export default OrdersContent;
