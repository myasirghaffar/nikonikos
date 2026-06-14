import { Eye, Mail, Trash2, UserCheck, UserMinus, Users } from "lucide-react";
import { useMemo, useState } from "react";
import AdminDataTable from "../../../../components/admin/AdminDataTable";
import AdminFilters, { AdminSelect } from "../../../../components/admin/AdminFilters";
import AdminPageHeader from "../../../../components/admin/AdminPageHeader";
import AdminPagination from "../../../../components/admin/AdminPagination";
import {
  deleteCustomer,
  getCustomers,
} from "../../../../lib/adminCommerceStore";
import { Avatar } from "../../orders/features/orderUi";

const statusClass = {
  active: "border-emerald-500/25 bg-emerald-400/10 text-emerald-400",
  inactive: "border-gray-500/25 bg-white/5 text-gray-400",
  blocked: "border-rose-700/25 bg-rose-700/10 text-rose-700",
};

const CustomersContent = () => {
  const [customers, setCustomers] = useState(getCustomers);
  const [selectedIds, setSelectedIds] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [page, setPage] = useState(1);
  const pageSize = 8;

  const filteredCustomers = useMemo(() => {
    return customers.filter((customer) => {
      const searchText = `${customer.name} ${customer.email} ${customer.phone} ${customer.location}`.toLowerCase();
      const matchesSearch = searchText.includes(search.toLowerCase());
      const matchesStatus = status === "all" || customer.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [customers, search, status]);

  const totalPages = Math.max(1, Math.ceil(filteredCustomers.length / pageSize));
  const visibleCustomers = filteredCustomers.slice(
    (page - 1) * pageSize,
    page * pageSize,
  );

  const stats = useMemo(() => {
    const active = customers.filter((customer) => customer.status === "active").length;
    const inactive = customers.filter((customer) => customer.status !== "active").length;
    const totalSpent = customers.reduce((sum, customer) => sum + customer.spent, 0);

    return [
      { label: "Total Customers", value: customers.length, icon: Users, trend: "+12.5%" },
      { label: "Active Customers", value: active, icon: UserCheck, trend: "+8.1%" },
      { label: "Inactive / Blocked", value: inactive, icon: UserMinus, trend: "-2.4%" },
      {
        label: "Customer Revenue",
        value: `$${totalSpent.toLocaleString()}`,
        icon: Users,
        trend: "+18%",
      },
    ];
  }, [customers]);

  const handleDelete = (id) => {
    deleteCustomer(id);
    setCustomers(getCustomers());
  };

  const columns = [
    {
      key: "customer",
      label: "Customer",
      render: (customer) => (
        <div className="flex items-center gap-4">
          <Avatar value={customer.avatar} name={customer.name} />
          <div>
            <p className="text-sm font-bold text-white">{customer.name}</p>
            <p className="text-xs text-gray-500">{customer.email}</p>
          </div>
        </div>
      ),
    },
    {
      key: "phone",
      label: "Phone",
      render: (customer) => <span className="text-sm text-gray-400">{customer.phone}</span>,
    },
    {
      key: "location",
      label: "Location",
      render: (customer) => <span className="text-sm text-gray-400">{customer.location}</span>,
    },
    {
      key: "orders",
      label: "Orders",
      render: (customer) => <span className="text-sm font-bold text-white">{customer.orders}</span>,
    },
    {
      key: "spent",
      label: "Total Spent",
      render: (customer) => (
        <span className="text-sm font-bold text-white">
          ${customer.spent.toLocaleString()}
        </span>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (customer) => (
        <span className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-bold uppercase ${statusClass[customer.status]}`}>
          {customer.status}
        </span>
      ),
    },
    {
      key: "joined",
      label: "Joined",
      render: (customer) => <span className="text-sm text-gray-400">{customer.joined}</span>,
    },
  ];

  return (
    <div className="space-y-8">
      <AdminPageHeader
        title="Customer Management"
        description="View, search, and manage all storefront customers."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, icon: Icon, trend }) => (
          <article
            key={label}
            className="rounded-2xl border border-zinc-800 bg-stone-900/70 p-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex size-12 items-center justify-center rounded-xl border border-zinc-800 bg-black/20">
                <Icon className="h-5 w-5 text-gray-500" />
              </div>
              <span
                className={`rounded-lg px-3 py-1 text-sm font-bold ${
                  trend.startsWith("-")
                    ? "bg-rose-700/10 text-rose-700"
                    : "bg-emerald-400/10 text-emerald-400"
                }`}
              >
                {trend}
              </span>
            </div>
            <p className="mt-5 text-sm font-semibold text-gray-500">{label}</p>
            <p className="mt-2 text-3xl font-bold text-white">{value}</p>
          </article>
        ))}
      </div>

      <AdminFilters search={search} onSearchChange={setSearch}>
        <AdminSelect label="Status" value={status} onChange={setStatus}>
          <option value="all">All Customers</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="blocked">Blocked</option>
        </AdminSelect>
      </AdminFilters>

      <AdminDataTable
        columns={columns}
        data={visibleCustomers}
        selectedIds={selectedIds}
        onSelect={setSelectedIds}
        actions={(customer) => (
          <div className="inline-flex gap-2">
            <button
              type="button"
              className="rounded-lg bg-white/5 p-2 text-gray-400 hover:text-white"
              aria-label={`View ${customer.name}`}
            >
              <Eye className="h-4 w-4" />
            </button>
            <a
              href={`mailto:${customer.email}`}
              className="rounded-lg bg-white/5 p-2 text-gray-400 hover:text-white"
              aria-label={`Email ${customer.name}`}
            >
              <Mail className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => handleDelete(customer.id)}
              className="rounded-lg bg-white/5 p-2 text-gray-400 hover:text-rose-700"
              aria-label={`Delete ${customer.name}`}
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        )}
      />

      <AdminPagination
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
        summary={`Showing ${(page - 1) * pageSize + 1} to ${Math.min(
          page * pageSize,
          filteredCustomers.length,
        )} of ${filteredCustomers.length} customers`}
      />
    </div>
  );
};

export default CustomersContent;
