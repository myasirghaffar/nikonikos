import {
  BadgeDollarSign,
  Box,
  CircleDollarSign,
  Ellipsis,
  Layers3,
  Package,
  Plus,
  ShoppingCart,
  Tag,
  UserPlus,
} from "lucide-react";
import { Link } from "react-router-dom";
import { getBrands, getOrders } from "../../../../lib/adminCommerceStore";
import { getCategories, getProducts } from "../../../../lib/adminStore";

const actions = [
  { label: "Add Product", icon: Plus, primary: true, to: "/admin/products/new" },
  { label: "Add Category", icon: Box, to: "/admin/categories/new" },
  { label: "Add Brand", icon: Tag, to: "/admin/brands/new" },
];

const activities = [
  {
    title: "New Order #4829",
    time: "2 minutes ago",
    icon: ShoppingCart,
    tone: "red",
    detail: (
      <p>
        <span className="text-gray-400">John Doe purchased</span>
        <span className="font-medium text-white">Nikon Z9 Camera</span>
      </p>
    ),
  },
  {
    title: "New Customer Registered",
    time: "1 hour ago",
    icon: UserPlus,
  },
  {
    title: "Product Stock Alert",
    time: "3 hours ago",
    icon: Box,
    detail: (
      <p className="text-xs font-normal leading-4 text-rose-700">
        Sony A7IV is running low on stock (Only 2
        <br />
        left)
      </p>
    ),
  },
];

const DashboardContent = () => {
  const products = getProducts();
  const categories = getCategories();
  const brands = getBrands();
  const orders = getOrders();
  const revenue = orders.reduce((sum, order) => sum + Number(order.amount || 0), 0);
  const metrics = [
    {
      label: "Total Products",
      value: products.length.toLocaleString(),
      change: "12.5%",
      icon: Package,
      accent: true,
    },
    {
      label: "Total Categories",
      value: categories.length.toLocaleString(),
      change: "3.2%",
      icon: Layers3,
    },
    {
      label: "Total Brands",
      value: brands.length.toLocaleString(),
      change: "8.1%",
      icon: CircleDollarSign,
    },
    {
      label: "Total Revenue",
      value: `$${revenue.toLocaleString()}`,
      change: "24.8%",
      icon: BadgeDollarSign,
      accent: true,
    },
  ];

  return (
    <div className="flex flex-col items-start gap-8 overflow-hidden">
      <section>
        <h1 className="text-2xl font-bold leading-8 text-white">
          Overview Dashboard
        </h1>
        <p className="mt-1 text-sm font-normal leading-5 text-gray-400">
          Here&apos;s what&apos;s happening with your store today.
        </p>
      </section>

      <section className="flex flex-wrap items-start gap-3">
        {actions.map(({ label, icon: Icon, primary, to }) => (
          <Link
            key={label}
            to={to}
            className={`inline-flex items-center rounded-xl px-5 py-2.5 text-sm font-medium leading-5 tracking-tight ${
              primary
                ? "bg-rose-700 text-white shadow-[0px_0px_15px_rgba(200,16,46,0.2)]"
                : "border border-zinc-800 bg-stone-900/70 text-white backdrop-blur-[6px]"
            }`}
          >
            <Icon
              className={`h-4 w-4 ${primary ? "text-white" : "text-gray-500"}`}
              strokeWidth={2.6}
            />
            <span className="pl-2">{label}</span>
          </Link>
        ))}
      </section>

      <section className="grid w-full gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </section>

      <section className="w-full rounded-2xl border border-zinc-800 bg-stone-900/70 p-6 backdrop-blur-[6px]">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-bold leading-7 tracking-tight text-white">
            Recent Activity
          </h2>
          <button type="button" aria-label="More activity options">
            <Ellipsis className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="flex flex-col gap-7 overflow-hidden pb-12 pr-2">
          {activities.map((activity, index) => (
            <ActivityItem
              key={activity.title}
              {...activity}
              hasLine={index < activities.length - 1}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

const MetricCard = ({ label, value, change, icon: Icon, accent }) => {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-stone-900/70 p-6 backdrop-blur-[6px]">
      {accent ? (
        <span className="absolute -right-8 -top-10 size-32 rounded-full bg-rose-700/5 blur-[20px]" />
      ) : null}

      <div className="relative flex items-start justify-between">
        <div className="flex size-12 items-center justify-center rounded-xl border border-zinc-800 bg-stone-900">
          <Icon
            className={`h-6 w-6 ${accent && label === "Total Products" ? "fill-rose-700 text-rose-700" : "text-white"}`}
            strokeWidth={2.4}
          />
        </div>
        <div className="rounded-md bg-emerald-400/10 px-2 py-1 text-xs font-medium leading-4 text-emerald-400">
          {change}
        </div>
      </div>

      <div className="relative mt-4">
        <h3 className="text-sm font-medium leading-5 text-gray-500">
          {label}
        </h3>
        <p className="mt-1 text-3xl font-bold leading-9 text-white">{value}</p>
      </div>
    </article>
  );
};

const ActivityItem = ({ title, time, icon: Icon, detail, tone, hasLine }) => {
  return (
    <div className="relative flex min-h-16 items-start">
      {hasLine ? (
        <span className="absolute left-4 top-10 h-[84px] w-px bg-zinc-800" />
      ) : null}

      <div
        className={`z-10 flex size-8 shrink-0 items-center justify-center rounded-full border ${
          tone === "red"
            ? "border-rose-700/20 bg-rose-700/10 text-rose-700"
            : "border-zinc-800 bg-stone-900 text-gray-400"
        }`}
      >
        <Icon className="h-4 w-4" strokeWidth={2.5} />
      </div>

      <div className="pl-4">
        <h3 className="text-sm font-medium leading-5 tracking-tight text-white">
          {title}
        </h3>
        <p className="text-xs font-normal leading-4 tracking-tight text-gray-500">
          {time}
        </p>
        {detail ? (
          <div className="mt-2 max-w-56 rounded-lg border border-zinc-800 bg-stone-900 px-3 py-3 text-sm leading-5">
            {detail}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DashboardContent;
