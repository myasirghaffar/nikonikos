import { ChevronUp, Search } from "lucide-react";
import { useMemo, useState } from "react";
import ProductCard from "../../../../components/website/ProductCard";
import { toProductCard } from "../../../../components/website/productPresenter";
import { getCategories, getProducts } from "../../../../lib/adminStore";

const sizes = ["1 KG", "5 KG", "20 KG", "100 KG", "200 KG"];

const ShopProductsSection = () => {
  const [products] = useState(() => getProducts());
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [maxPrice, setMaxPrice] = useState(500);
  const [appliedFilters, setAppliedFilters] = useState({
    search: "",
    categories: [],
    size: "",
    inStockOnly: false,
    maxPrice: 500,
  });
  const [openSections, setOpenSections] = useState({
    size: true,
    availability: true,
    price: true,
  });

  const categories = getCategories().map((category) => ({
    label: category.name,
    count: products.filter((product) => product.category === category.name).length,
  }));

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(appliedFilters.search.toLowerCase());
      const matchesCategory =
        appliedFilters.categories.length === 0 ||
        appliedFilters.categories.includes(product.category);
      const matchesSize =
        !appliedFilters.size ||
        product.size?.toLowerCase() === appliedFilters.size.toLowerCase();
      const matchesStock = !appliedFilters.inStockOnly || product.stock > 0;
      const matchesPrice = Number(product.price) <= appliedFilters.maxPrice;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesSize &&
        matchesStock &&
        matchesPrice
      );
    });
  }, [appliedFilters, products]);

  const cardProducts = filteredProducts
    .filter((product) => product.active !== false && product.status !== "inactive")
    .map(toProductCard);

  const toggleCategory = (label) => {
    setSelectedCategories((previous) =>
      previous.includes(label)
        ? previous.filter((item) => item !== label)
        : [...previous, label],
    );
  };

  const applyFilters = () => {
    setAppliedFilters({
      search,
      categories: selectedCategories,
      size: selectedSize,
      inStockOnly,
      maxPrice,
    });
  };

  const clearFilters = () => {
    setSearch("");
    setSelectedCategories([]);
    setSelectedSize("");
    setInStockOnly(false);
    setMaxPrice(500);
    setAppliedFilters({
      search: "",
      categories: [],
      size: "",
      inStockOnly: false,
      maxPrice: 500,
    });
  };

  return (
    <section className="bg-black px-5 py-20 text-white md:px-10">
      <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[320px_1fr]">
        <aside className="rounded-lg bg-zinc-900 p-[18px] text-white lg:min-h-[924px]">
          <label className="relative block">
            <span className="sr-only">Search in Waterproofing</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search in Waterproofing..."
              className="h-12 w-full rounded-xl border border-white bg-black py-3.5 pl-11 pr-4 text-sm text-white outline-none placeholder:text-white focus:ring-1 focus:ring-red-600"
            />
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white" />
          </label>

          <div className="mt-8 h-px bg-white/70" />

          <div className="mt-8">
            <h2 className="pb-2 text-xl font-semibold capitalize leading-5 text-white">
              Sub Categories
            </h2>
            <div className="mt-4 space-y-3">
              {categories.map((category) => {
                const active = selectedCategories.includes(category.label);

                return (
                  <button
                    type="button"
                    key={category.label}
                    onClick={() => toggleCategory(category.label)}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`size-[17px] rounded-[3px] ${
                          active ? "bg-red-600" : "bg-white"
                        }`}
                      />
                      <span
                        className={`text-sm font-normal leading-5 tracking-tight ${
                          active ? "text-red-600" : "text-white"
                        }`}
                      >
                        {category.label}
                      </span>
                    </span>
                    <span className={`text-xs ${active ? "text-red-600" : "text-white"}`}>
                      {category.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <FilterDivider />

          <FilterSection
            label="Size"
            open={openSections.size}
            onToggle={() => setOpenSections((prev) => ({ ...prev, size: !prev.size }))}
          >
            <div className="mt-5 flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`rounded-full px-5 py-2.5 text-sm ${
                    selectedSize === size
                      ? "bg-red-600 font-medium text-white"
                      : "bg-white font-normal text-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </FilterSection>

          <FilterDivider />

          <FilterSection
            label="Availability"
            open={openSections.availability}
            onToggle={() =>
              setOpenSections((prev) => ({
                ...prev,
                availability: !prev.availability,
              }))
            }
          >
            <div className="mt-5 flex items-center justify-between gap-6">
              <p className="text-lg font-medium text-white">In Stock Only</p>
              <button
                type="button"
                onClick={() => setInStockOnly((previous) => !previous)}
                aria-label="Toggle in stock only"
                className={`relative h-[18px] w-8 rounded-full ${inStockOnly ? "bg-red-600" : "bg-white"}`}
              >
                <span
                  className={`absolute top-0.5 size-3.5 rounded-full bg-zinc-900 transition ${
                    inStockOnly ? "left-[17px] bg-white" : "left-0.5"
                  }`}
                />
              </button>
            </div>
          </FilterSection>

          <FilterDivider />

          <FilterSection
            label="Price"
            open={openSections.price}
            onToggle={() => setOpenSections((prev) => ({ ...prev, price: !prev.price }))}
          >
            <input
              type="range"
              min="10"
              max="600"
              value={maxPrice}
              onChange={(event) => setMaxPrice(Number(event.target.value))}
              className="mt-7 w-full accent-red-600"
            />
            <div className="mt-5 flex items-center justify-between">
              <span className="flex h-11 w-20 items-center rounded-xl border border-neutral-200 px-2.5 text-sm leading-8 text-white">
                $10
              </span>
              <span className="flex h-11 w-20 items-center rounded-xl border border-neutral-200 px-2.5 text-sm leading-8 text-white">
                ${maxPrice}+
              </span>
            </div>
          </FilterSection>

          <FilterDivider />

          <div className="flex items-start gap-2">
            <button
              type="button"
              onClick={applyFilters}
              className="h-10 w-28 rounded-[10px] bg-red-600 text-sm font-bold leading-5 text-white"
            >
              Apply
            </button>
            <button
              type="button"
              onClick={clearFilters}
              className="h-10 w-20 rounded-xl border border-neutral-200 text-sm font-normal leading-8 text-white"
            >
              Clear
            </button>
          </div>
        </aside>

        <div>
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {cardProducts.map((product, index) => (
              <ProductCard key={`${product.id}-${index}`} {...product} />
            ))}
          </div>
          {cardProducts.length === 0 ? (
            <p className="rounded-xl border border-white/10 bg-white/5 p-8 text-center text-gray-400">
              No products match these filters.
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
};

const FilterSection = ({ label, open, onToggle, children }) => (
  <div>
    <button type="button" onClick={onToggle} className="flex w-full items-center justify-between">
      <h3 className="text-xl font-medium text-white">{label}</h3>
      <ChevronUp className={`h-4 w-4 text-white transition ${open ? "" : "rotate-180"}`} />
    </button>
    {open ? children : null}
  </div>
);

const FilterDivider = () => <div className="my-8 h-px bg-neutral-200" />;

export default ShopProductsSection;
