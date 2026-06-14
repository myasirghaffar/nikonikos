import {
  Banknote,
  Bell,
  Box,
  Check,
  ClipboardList,
  Home,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  Printer,
  RotateCcw,
  Settings,
  ShoppingCart,
  Trash2,
  Truck,
} from "lucide-react";
import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getOrderById,
  updateOrderStatus,
} from "../../../../lib/adminCommerceStore";
import { OrderStatusBadge } from "./orderUi";

const steps = [
  { key: "placed", label: "Order Placed", icon: Check },
  { key: "paid", label: "Payment Confirmed", icon: Check },
  { key: "processing", label: "Processing", icon: Settings },
  { key: "shipped", label: "Shipped", icon: Truck },
  { key: "delivered", label: "Delivered", icon: Home },
];

const statusIndex = {
  pending: 1,
  processing: 2,
  shipped: 3,
  delivered: 4,
  cancelled: 1,
};

const OrderDetailContent = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(() => getOrderById(orderId));
  const [newStatus, setNewStatus] = useState(order.status);
  const [tracking, setTracking] = useState(order.tracking || "");

  const totals = useMemo(() => {
    const subtotal =
      order.products?.reduce((sum, product) => sum + product.price * product.qty, 0) ||
      order.amount;
    const shipping = order.shipping || 500;
    const discount = order.discount || 1000;

    return {
      subtotal,
      shipping,
      discount,
      grandTotal: subtotal + shipping - discount,
    };
  }, [order]);

  const handleStatusUpdate = (event) => {
    event.preventDefault();
    setOrder(updateOrderStatus(order.id, newStatus, tracking));
  };

  return (
    <div className="grid gap-8 xl:grid-cols-[1fr_330px]">
      <main className="space-y-8">
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">
              Order {order.orderId || "#ORD-2026-1058"}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span>{order.date}</span>
              <span>Updated: {order.updatedAt || "13 June 2026"}</span>
              <OrderStatusBadge status={order.status} />
            </div>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex h-11 items-center gap-2 rounded-xl border border-zinc-800 bg-white/5 px-5 text-sm font-bold text-white"
            >
              <Printer className="h-4 w-4" /> Print Invoice
            </button>
            <button
              type="button"
              onClick={() =>
                document.getElementById("update-order-status")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              className="h-11 rounded-xl bg-rose-700 px-7 text-sm font-bold text-white"
            >
              Update Status
            </button>
          </div>
        </header>

        <section className="rounded-2xl border border-zinc-800 bg-stone-900/70 p-6">
          <div className="grid grid-cols-5 items-center gap-3">
            {steps.map((step, index) => {
              const complete = index <= (statusIndex[order.status] || 2);
              const active = index === (statusIndex[order.status] || 2);
              const Icon = step.icon;

              return (
                <div key={step.key} className="flex flex-col items-center gap-3 text-center">
                  <div
                    className={`flex size-12 items-center justify-center rounded-full ${
                      complete
                        ? active
                          ? "bg-amber-500 text-white ring-4 ring-amber-500/20"
                          : "bg-emerald-400 text-black"
                        : "bg-white/10 text-gray-500"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className={`text-xs ${complete ? "text-emerald-400" : "text-gray-500"}`}>
                    {step.label}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <div className="grid gap-7 lg:grid-cols-2">
          <InfoCard title="Customer Information">
            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-xl bg-white/10 text-xl font-bold text-rose-700">
                {order.avatar?.startsWith?.("http") ? "AR" : order.avatar || "AR"}
              </div>
              <div>
                <p className="font-bold text-white">{order.customer}</p>
                <p className="text-sm text-gray-400">{order.email || "ahmed.raza@example.com"}</p>
                <p className="text-sm text-gray-400">{order.phone || "+92 300 1234567"}</p>
              </div>
            </div>
            <div className="my-6 h-px bg-zinc-800" />
            <div className="grid grid-cols-2 gap-6 text-sm">
              <InfoLine label="Customer Since" value="May 2024" />
              <InfoLine label="Total Orders" value="12 Orders" />
            </div>
            <InfoLine label="Billing Address" value={order.billingAddress} className="mt-5" />
          </InfoCard>

          <InfoCard title="Shipping Details">
            <div className="space-y-5">
              <IconLine icon={MapPin} label="Recipient Address" value={order.shippingAddress} />
              <IconLine icon={Truck} label="Carrier Service" value={order.carrier} />
            </div>
            <div className="my-6 h-px bg-zinc-800" />
            <div className="grid grid-cols-2 gap-6 text-sm">
              <InfoLine label="Tracking Number" value={order.tracking} valueClass="text-rose-700" />
              <InfoLine label="Estimated Delivery" value={order.delivery} />
            </div>
          </InfoCard>
        </div>

        <InfoCard title="Ordered Products" className="p-0">
          <div className="grid grid-cols-[1.7fr_80px_130px_120px] bg-white/5 px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
            <span>Product</span>
            <span>Qty</span>
            <span>Unit Price</span>
            <span>Total</span>
          </div>
          {(order.products || []).map((product) => (
            <div
              key={product.name}
              className="grid grid-cols-[1.7fr_80px_130px_120px] items-center border-t border-zinc-800 px-6 py-5"
            >
              <div className="flex items-center gap-4">
                <img src={product.image} alt="" className="size-10 rounded bg-white object-cover" />
                <div>
                  <p className="font-bold text-white">{product.name}</p>
                  <p className="text-xs text-gray-500">Variant: {product.variant}</p>
                </div>
              </div>
              <p className="text-white">{String(product.qty).padStart(2, "0")}</p>
              <p className="text-white">Rs. {product.price.toLocaleString()}</p>
              <p className="font-bold text-white">
                Rs. {(product.qty * product.price).toLocaleString()}
              </p>
            </div>
          ))}
        </InfoCard>

        <div className="grid gap-7 lg:grid-cols-2">
          <InfoCard title="Payment Information">
            <IconLine icon={Banknote} label={order.payment} value="Standard checkout" />
            <div className="my-6 h-px bg-zinc-800" />
            <SummaryLine label="Subtotal" value={`Rs. ${totals.subtotal.toLocaleString()}`} />
            <SummaryLine label="Shipping Cost" value={`Rs. ${totals.shipping.toLocaleString()}`} />
            <SummaryLine label="Coupon Discount" value={`- Rs. ${totals.discount.toLocaleString()}`} tone="text-emerald-400" />
            <div className="mt-5 border-t border-zinc-800 pt-5">
              <SummaryLine label="Grand Total" value={`Rs. ${totals.grandTotal.toLocaleString()}`} strong />
            </div>
          </InfoCard>

          <div className="space-y-7">
            <InfoCard title="Order Notes">
              <p className="mb-2 text-xs uppercase tracking-wider text-gray-500">Customer Message</p>
              <div className="rounded-xl border border-zinc-800 bg-black/40 p-4 text-sm italic text-white">
                Please call before delivery to ensure someone is home.
              </div>
              <p className="mb-2 mt-5 text-xs uppercase tracking-wider text-gray-500">Internal Admin Note</p>
              <textarea className="min-h-20 w-full rounded-xl border border-zinc-800 bg-black/40 p-4 text-sm text-white outline-none" placeholder="Write internal notes here..." />
            </InfoCard>

            <InfoCard title="Customer Support">
              <div className="grid grid-cols-3 gap-3">
                <SupportButton icon={Phone} label="Call" color="blue" />
                <SupportButton icon={Mail} label="Email" color="rose" />
                <SupportButton icon={ShoppingCart} label="Chat" color="emerald" />
              </div>
            </InfoCard>
          </div>
        </div>

        <InfoCard title="Update Order Status" id="update-order-status">
          <form onSubmit={handleStatusUpdate} className="space-y-6">
            <div className="grid gap-5 md:grid-cols-[220px_220px_1fr] md:items-end">
              <label>
                <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
                  New Status
                </span>
                <select
                  value={newStatus}
                  onChange={(event) => setNewStatus(event.target.value)}
                  className="h-12 w-full rounded-xl border border-zinc-800 bg-black px-4 text-white outline-none"
                >
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </label>
              <label>
                <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
                  Carrier Tracking ID
                </span>
                <input
                  value={tracking}
                  onChange={(event) => setTracking(event.target.value)}
                  className="h-12 w-full rounded-xl border border-zinc-800 bg-black px-4 text-white outline-none"
                />
              </label>
              <label className="flex items-center gap-3 text-sm text-white">
                <input type="checkbox" defaultChecked className="size-4 accent-blue-500" />
                Notify Customer via Email
              </label>
            </div>
            <label>
              <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
                Status Update Message
              </span>
              <textarea className="min-h-24 w-full rounded-xl border border-zinc-800 bg-black p-4 text-sm text-white outline-none" placeholder="Message to be sent to the customer..." />
            </label>
            <div className="flex justify-end">
              <button className="h-12 rounded-xl bg-rose-700 px-9 text-sm font-bold text-white shadow-[0_0_18px_rgba(200,16,46,0.25)]">
                Save & Notify Customer
              </button>
            </div>
          </form>
        </InfoCard>
      </main>

      <aside className="space-y-7">
        <InfoCard title="Summary">
          <SummaryLine label="Total Items" value="04 Items" />
          <SummaryLine label="Weight" value={order.weight || "24.5 kg"} />
          <SummaryLine label="Discount Code" value="SALE10 (10%)" tone="text-emerald-400" />
          <div className="my-6 h-px bg-zinc-800" />
          <SummaryLine label="Order Value" value={`Rs. ${totals.grandTotal.toLocaleString()}`} strong />
          <button className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white text-sm font-bold text-black">
            <ClipboardList className="h-4 w-4" /> View Invoice Detail
          </button>
        </InfoCard>

        <InfoCard title="Admin Quick Actions">
          <QuickAction icon={Box} label="Edit Order Details" tone="text-blue-400" />
          <QuickAction icon={RotateCcw} label="Initiate Refund" tone="text-rose-700" />
          <QuickAction icon={Trash2} label="Cancel Order" tone="text-gray-500" />
        </InfoCard>

        <InfoCard title="Order History">
          <HistoryItem active title="Order Status Updated" text="Status changed to Processing" date="13 June, 10:45 AM" />
          <HistoryItem active title="Payment Confirmed" text="Via Cash on Delivery mechanism" date="12 June, 03:20 PM" />
          <HistoryItem title="Order Placed" text="By Ahmed Raza" date="12 June, 02:15 PM" />
        </InfoCard>
      </aside>
    </div>
  );
};

const InfoCard = ({ title, children, className = "", id }) => (
  <section id={id} className={`rounded-2xl border border-zinc-800 bg-stone-900/70 p-6 ${className}`}>
    <h2 className="mb-5 text-lg font-bold text-white">{title}</h2>
    {children}
  </section>
);

const InfoLine = ({ label, value, valueClass = "text-white", className = "" }) => (
  <div className={className}>
    <p className="text-xs uppercase tracking-wider text-gray-500">{label}</p>
    <p className={`mt-1 text-sm ${valueClass}`}>{value}</p>
  </div>
);

const IconLine = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-4">
    <div className="flex size-9 items-center justify-center rounded-lg bg-white/5 text-rose-700">
      <Icon className="h-4 w-4" />
    </div>
    <InfoLine label={label} value={value} />
  </div>
);

const SummaryLine = ({ label, value, tone = "text-white", strong = false }) => (
  <div className="mb-4 flex justify-between gap-4 text-sm">
    <span className={strong ? "font-bold text-white" : "text-gray-500"}>{label}</span>
    <span className={`${strong ? "text-2xl font-bold text-rose-700" : tone}`}>{value}</span>
  </div>
);

const QuickAction = ({ icon: Icon, label, tone }) => (
  <button className="mb-3 flex h-12 w-full items-center gap-3 rounded-xl border border-zinc-800 bg-black/40 px-4 text-sm font-medium text-white last:mb-0">
    <Icon className={`h-5 w-5 ${tone}`} />
    {label}
  </button>
);

const HistoryItem = ({ active = false, title, text, date }) => (
  <div className="relative border-l border-zinc-800 pb-6 pl-6 last:pb-0">
    <span
      className={`absolute -left-2 top-0 size-4 rounded-full ${
        active ? "bg-emerald-400" : "bg-zinc-700"
      }`}
    />
    <p className="text-sm font-bold text-white">{title}</p>
    <p className="text-xs text-gray-500">{text}</p>
    <p className="mt-1 text-xs text-gray-500">{date}</p>
  </div>
);

const SupportButton = ({ icon: Icon, label, color }) => {
  const colors = {
    blue: "border-blue-500/25 bg-blue-500/10 text-blue-400",
    rose: "border-rose-700/25 bg-rose-700/10 text-rose-700",
    emerald: "border-emerald-500/25 bg-emerald-500/10 text-emerald-400",
  };

  return (
    <button className={`inline-flex h-10 items-center justify-center gap-2 rounded-lg border text-sm font-bold ${colors[color]}`}>
      <Icon className="h-4 w-4" />
      {label}
    </button>
  );
};

export default OrderDetailContent;
