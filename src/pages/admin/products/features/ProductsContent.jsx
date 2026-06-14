import { Edit, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminDataTable from "../../../../components/admin/AdminDataTable";
import AdminFilters, { AdminSelect } from "../../../../components/admin/AdminFilters";
import AdminPageHeader from "../../../../components/admin/AdminPageHeader";
import AdminPagination from "../../../../components/admin/AdminPagination";
import AdminStatusBadge from "../../../../components/admin/AdminStatusBadge";
import { deleteProduct, getCategories, getProducts } from "../../../../lib/adminStore";
import { getBrands } from "../../../../lib/adminCommerceStore";

const ProductsContent = () => {
  const navigate = useNavigate();
  const [products, setProductsState] = useState(getProducts);
  const [selectedIds, setSelectedIds] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [brand, setBrand] = useState("all");
  const [status, setStatus] = useState("all");
  const [page, setPage] = useState(1);

  const categories = getCategories().map((item) => item.name);
  const brandOptions = [
    ...new Set([
      ...getBrands().map((item) => item.name),
      ...products.map((product) => product.brand),
    ]),
  ].filter(Boolean);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const searchText = `${product.name} ${product.sku}`.toLowerCase();
      const matchesSearch = searchText.includes(search.toLowerCase());
      const matchesCategory = category === "all" || product.category === category;
      const matchesBrand = brand === "all" || product.brand === brand;
      const matchesStatus = status === "all" || product.status === status;

      return matchesSearch && matchesCategory && matchesBrand && matchesStatus;
    });
  }, [brand, category, products, search, status]);

  const pageSize = 10;
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / pageSize));
  const visibleProducts = filteredProducts.slice((page - 1) * pageSize, page * pageSize);

  const handleDelete = (id) => {
    deleteProduct(id);
    setProductsState(getProducts());
  };

  const handleBulkAction = (action) => {
    if (action !== "delete") return;

    selectedIds.forEach((id) => deleteProduct(id));
    setSelectedIds([]);
    setProductsState(getProducts());
  };

  const columns = [
    {
      key: "product",
      label: "Product",
      render: (product) => (
        <div className="flex items-center gap-4">
          <img
            src={product.image}
            alt={product.name}
            className="size-12 rounded-lg object-cover"
          />
          <div>
            <p className="max-w-[180px] text-sm font-bold leading-5 text-white">
              {product.name}
            </p>
            <p className="text-xs leading-4 text-gray-500">{product.subtitle}</p>
          </div>
        </div>
      ),
    },
    { key: "category", label: "Category", render: (product) => <span className="text-sm text-gray-400">{product.category}</span> },
    { key: "brand", label: "Brand", render: (product) => <span className="text-sm text-gray-400">{product.brand}</span> },
    {
      key: "price",
      label: "Price",
      render: (product) => <span className="text-sm font-bold text-white">${Number(product.price).toLocaleString()}.00</span>,
    },
    {
      key: "stock",
      label: "Stock",
      render: (product) => (
        <div>
          <p className="text-sm text-white">{product.stock} units</p>
          <div className="mt-2 h-1.5 w-20 rounded-full bg-white/10">
            <div
              className={`h-full rounded-full ${product.stock <= 5 ? "bg-rose-700" : "bg-emerald-400"}`}
              style={{ width: `${Math.min(100, Math.max(8, product.stock * 2))}%` }}
            />
          </div>
        </div>
      ),
    },
    { key: "status", label: "Status", render: (product) => <AdminStatusBadge status={product.status} /> },
  ];

  return (
    <div className="space-y-8">
      <AdminPageHeader
        title="Product Management"
        description="Manage and update your product inventory."
        actionLabel="Add New Product"
        actionTo="/admin/products/new"
      />

      <AdminFilters search={search} onSearchChange={setSearch}>
        <AdminSelect label="Category" value={category} onChange={setCategory}>
          <option value="all">All Categories</option>
          {categories.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </AdminSelect>
        <AdminSelect label="Brand" value={brand} onChange={setBrand}>
          <option value="all">All Brands</option>
          {brandOptions.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </AdminSelect>
        <AdminSelect label="Status" value={status} onChange={setStatus}>
          <option value="all">Status</option>
          <option value="active">Active</option>
          <option value="low stock">Low Stock</option>
        </AdminSelect>
        <AdminSelect label="Bulk Actions" value="" onChange={handleBulkAction}>
          <option value="">Bulk Actions</option>
          <option value="delete">Delete Selected</option>
        </AdminSelect>
      </AdminFilters>

      <AdminDataTable
        columns={columns}
        data={visibleProducts}
        selectedIds={selectedIds}
        onSelect={setSelectedIds}
        actions={(product) => (
          <div className="inline-flex gap-2">
            <button
              type="button"
              onClick={() => navigate(`/admin/products/new?copy=${product.id}`)}
              className="rounded-lg bg-white/5 p-2 text-gray-400 hover:text-white"
            >
              <Edit className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => handleDelete(product.id)}
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
        summary={`Showing 1 to ${visibleProducts.length} of ${filteredProducts.length} products`}
      />
    </div>
  );
};

export default ProductsContent;
