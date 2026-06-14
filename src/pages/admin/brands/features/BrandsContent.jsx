import { Edit, PackageCheck, Trash2, TrendingUp } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminPageHeader from "../../../../components/admin/AdminPageHeader";
import AdminPagination from "../../../../components/admin/AdminPagination";
import AdminStatusBadge from "../../../../components/admin/AdminStatusBadge";
import { deleteBrand, getBrands } from "../../../../lib/adminCommerceStore";
import { getProducts } from "../../../../lib/adminStore";

const BrandsContent = () => {
  const navigate = useNavigate();
  const [brands, setBrands] = useState(() => hydrateBrandCounts(getBrands()));
  const [page, setPage] = useState(1);

  const pageSize = 5;
  const totalPages = Math.max(1, Math.ceil(brands.length / pageSize));
  const visibleBrands = brands.slice((page - 1) * pageSize, page * pageSize);

  const stats = useMemo(() => {
    const activeBrands = brands.filter((brand) => brand.status === "active");
    const topBrand = [...brands].sort(
      (a, b) => b.productsCount - a.productsCount,
    )[0];

    return [
      {
        label: "Total Active Brands",
        value: activeBrands.length,
        trend: "8.1%",
        icon: PackageCheck,
      },
      {
        label: "Avg. Products per Brand",
        value: Math.round(
          brands.reduce((sum, brand) => sum + brand.productsCount, 0) /
            Math.max(1, brands.length),
        ),
        icon: TrendingUp,
      },
      {
        label: "Top Performing Brand",
        value: topBrand?.name || "Sony",
        icon: PackageCheck,
      },
    ];
  }, [brands]);

  const handleDelete = (id) => {
    deleteBrand(id);
    setBrands(hydrateBrandCounts(getBrands()));
  };

  return (
    <div className="space-y-9">
      <AdminPageHeader
        title="Brands List"
        description="Manage and monitor all your product brands in one place."
        actionLabel="Add Brand"
        actionTo="/admin/brands/new"
      />

      <section className="overflow-hidden rounded-2xl border border-zinc-800 bg-stone-900/70">
        <div className="grid min-w-[900px] grid-cols-[180px_1.4fr_1fr_1fr_120px] border-b border-zinc-800 bg-white/5 px-8 py-5 text-xs font-bold uppercase tracking-wider text-gray-500">
          <span>Logo</span>
          <span>Brand Name</span>
          <span>Products Count</span>
          <span>Status</span>
          <span className="text-right">Actions</span>
        </div>
        <div className="overflow-x-auto">
          <div className="min-w-[900px]">
            {visibleBrands.map((brand) => (
              <div
                key={brand.id}
                className="grid grid-cols-[180px_1.4fr_1fr_1fr_120px] items-center border-b border-zinc-800 px-8 py-6 last:border-b-0"
              >
                <div className="flex size-14 items-center justify-center overflow-hidden rounded-xl border border-zinc-800 bg-black/40 p-2">
                  <img src={brand.logo} alt={brand.name} className="max-h-full max-w-full object-contain" />
                </div>
                <div>
                  <p className="text-base font-medium text-white">{brand.name}</p>
                  <p className="text-sm text-gray-500">{brand.description}</p>
                </div>
                <p className="text-lg font-bold text-white">{brand.productsCount}</p>
                <AdminStatusBadge status={brand.status} />
                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => navigate(`/admin/brands/new?copy=${brand.id}`)}
                    className="text-gray-500 hover:text-white"
                    aria-label={`Edit ${brand.name}`}
                  >
                    <Edit className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(brand.id)}
                    className="text-gray-500 hover:text-rose-700"
                    aria-label={`Delete ${brand.name}`}
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-zinc-800 px-8 py-4">
          <AdminPagination
            page={page}
            totalPages={totalPages}
            onPageChange={setPage}
            summary={`Showing ${(page - 1) * pageSize + 1}-${Math.min(
              page * pageSize,
              brands.length,
            )} of ${brands.length} brands`}
          />
        </div>
      </section>

      <div className="grid gap-7 lg:grid-cols-3">
        {stats.map(({ label, value, trend, icon: Icon }) => (
          <article
            key={label}
            className="rounded-2xl border border-zinc-800 bg-stone-900/70 p-7"
          >
            <div className="flex items-center justify-between">
              <div className="flex size-14 items-center justify-center rounded-xl border border-zinc-800 bg-black/20">
                <Icon className="h-5 w-5 text-gray-500" />
              </div>
              {trend ? (
                <span className="rounded-lg bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-400">
                  {trend}
                </span>
              ) : null}
            </div>
            <p className="mt-6 text-base font-semibold text-gray-500">{label}</p>
            <p className="mt-2 text-3xl font-bold text-white">{value}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

const hydrateBrandCounts = (brands) => {
  const products = getProducts();

  return brands.map((brand) => ({
    ...brand,
    productsCount: products.filter((product) => product.brand === brand.name).length,
  }));
};

export default BrandsContent;
