import { Edit, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminDataTable from "../../../../components/admin/AdminDataTable";
import AdminFilters, { AdminSelect } from "../../../../components/admin/AdminFilters";
import AdminPageHeader from "../../../../components/admin/AdminPageHeader";
import AdminPagination from "../../../../components/admin/AdminPagination";
import AdminStatusBadge from "../../../../components/admin/AdminStatusBadge";
import { deleteCategory, getCategories, getProducts } from "../../../../lib/adminStore";

const CategoriesContent = () => {
  const navigate = useNavigate();
  const [categories, setCategoriesState] = useState(() =>
    hydrateCategoryCounts(getCategories()),
  );
  const [selectedIds, setSelectedIds] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [page, setPage] = useState(1);

  const filteredCategories = useMemo(() => {
    return categories.filter((category) => {
      const matchesSearch = category.name.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = status === "all" || category.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [categories, search, status]);

  const pageSize = 10;
  const totalPages = Math.max(1, Math.ceil(filteredCategories.length / pageSize));
  const visibleCategories = filteredCategories.slice((page - 1) * pageSize, page * pageSize);

  const handleDelete = (id) => {
    deleteCategory(id);
    setCategoriesState(hydrateCategoryCounts(getCategories()));
  };

  const handleBulkAction = (action) => {
    if (action !== "delete") return;

    selectedIds.forEach((id) => deleteCategory(id));
    setSelectedIds([]);
    setCategoriesState(hydrateCategoryCounts(getCategories()));
  };

  const columns = [
    {
      key: "banner",
      label: "Banner",
      render: (category) => (
        <img src={category.image} alt={category.name} className="h-12 w-20 rounded-lg object-cover" />
      ),
    },
    {
      key: "name",
      label: "Category Name",
      render: (category) => (
        <div>
          <p className="text-sm font-bold leading-5 text-white">{category.name}</p>
          <p className="text-xs leading-4 text-gray-500">{category.description}</p>
        </div>
      ),
    },
    {
      key: "productCount",
      label: "Products Count",
      render: (category) => <span className="text-sm text-gray-400">{category.productCount} Products</span>,
    },
    { key: "status", label: "Status", render: (category) => <AdminStatusBadge status={category.status} /> },
  ];

  return (
    <div className="space-y-8">
      <AdminPageHeader
        title="Category Management"
        description="Manage and organize your product categories."
        actionLabel="Add Category"
        actionTo="/admin/categories/new"
      />

      <AdminFilters search={search} onSearchChange={setSearch}>
        <AdminSelect label="Status" value={status} onChange={setStatus}>
          <option value="all">Status: All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </AdminSelect>
        <AdminSelect label="Bulk Actions" value="" onChange={handleBulkAction}>
          <option value="">Bulk Actions</option>
          <option value="delete">Delete Selected</option>
        </AdminSelect>
      </AdminFilters>

      <AdminDataTable
        columns={columns}
        data={visibleCategories}
        selectedIds={selectedIds}
        onSelect={setSelectedIds}
        actions={(category) => (
          <div className="inline-flex gap-2">
            <button
              type="button"
              onClick={() => navigate(`/admin/categories/new?copy=${category.id}`)}
              className="rounded-lg bg-white/5 p-2 text-gray-400 hover:text-white"
            >
              <Edit className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => handleDelete(category.id)}
              className="rounded-lg bg-white/5 p-2 text-gray-400 hover:text-rose-700"
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
        summary={`Showing 1 to ${visibleCategories.length} of ${filteredCategories.length} categories`}
      />
    </div>
  );
};

const hydrateCategoryCounts = (categories) => {
  const products = getProducts();

  return categories.map((category) => ({
    ...category,
    productCount: products.filter((product) => product.category === category.name).length,
  }));
};

export default CategoriesContent;
