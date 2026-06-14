import {
  ChevronRight,
  Download,
  Heart,
  ShoppingCart,
  Star,
  Truck,
  ShieldCheck,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../../../../components/website/ProductCard";
import { getStorefrontProducts } from "../../../../components/website/productPresenter";
import { getProducts } from "../../../../lib/adminStore";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const products = getProducts();
  const product = products.find((item) => item.id === productId) || products[0];
  const gallery = useMemo(
    () => [product.image, ...(product.gallery || [])].filter(Boolean),
    [product],
  );
  const [activeImage, setActiveImage] = useState(gallery[0]);
  const [saved, setSaved] = useState(() =>
    window.localStorage.getItem(`saved-product-${product.id}`) === "true",
  );

  const relatedProducts = getStorefrontProducts(
    products.filter((item) => item.id !== product.id),
    4,
  );

  const saveProduct = () => {
    const next = !saved;
    setSaved(next);
    window.localStorage.setItem(`saved-product-${product.id}`, String(next));
  };

  return (
    <main className="bg-black px-5 pb-28 pt-10 text-white md:px-8">
      <div className="mx-auto max-w-[1280px]">
        <nav className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
          <Link to="/" className="hover:text-white">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/shop" className="hover:text-white">Shop</Link>
          <ChevronRight className="h-3 w-3" />
          <span>{product.category}</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-white">{product.name}</span>
        </nav>

        <section className="mt-8 grid gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="flex min-h-[460px] items-center justify-center rounded-lg border border-white/10 bg-neutral-900 p-8">
              <img
                src={activeImage}
                alt={product.name}
                className="max-h-[390px] w-full object-contain"
              />
            </div>
            <div className="mt-4 flex gap-4 overflow-x-auto pb-2">
              {gallery.slice(0, 4).map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setActiveImage(image)}
                  className={`flex size-24 shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-neutral-900 ${
                    activeImage === image ? "border-red-600" : "border-white/10"
                  }`}
                >
                  <img src={image} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:pt-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded bg-red-600/20 px-3 py-1 text-xs font-bold uppercase text-red-600">
                {product.featured ? "New Release" : product.status}
              </span>
              <span className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </span>
              <span className="text-xs text-gray-400">(128 Reviews)</span>
            </div>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white md:text-5xl">
              {product.name}
            </h1>
            <p className="text-3xl font-light leading-tight text-gray-400">
              {product.brand}
            </p>
            <p className="mt-6 text-3xl font-extrabold text-white">
              ${Number(product.price || 0).toLocaleString()}.00
            </p>
            <p className="mt-8 max-w-[520px] text-sm leading-6 text-gray-400">
              {product.description ||
                "Premium construction material designed for durability, protection, and consistent professional performance."}
            </p>

            <div className="my-10 h-px bg-white/10" />

            <div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-sm font-bold text-white">Configuration</h2>
                <button type="button" className="text-xs text-gray-400 underline">
                  Compare Specs
                </button>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <button className="rounded-lg border border-red-600 bg-neutral-900 p-4 text-left">
                  <span className="block text-sm font-bold text-white">{product.size || "Body Only"}</span>
                  <span className="mt-1 block text-xs text-gray-500">Current selection</span>
                </button>
                <button className="rounded-lg border border-white/10 bg-neutral-900 p-4 text-left">
                  <span className="block text-sm font-bold text-white">Professional Kit</span>
                  <span className="mt-1 block text-xs text-gray-500">+ accessories package</span>
                </button>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-sm font-bold text-white">Color Finish</h2>
              <div className="mt-3 flex gap-3">
                <span className="size-7 rounded-full border-2 border-red-600 bg-black" />
                <span className="size-7 rounded-full border border-white/20 bg-white" />
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <Link
                to="/contact"
                className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-red-600 text-sm font-bold text-white"
              >
                <ShoppingCart className="h-4 w-4" />
                Contact Us
              </Link>
              <button
                type="button"
                onClick={saveProduct}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-neutral-900 text-sm font-medium text-white"
              >
                <Heart className={`h-4 w-4 ${saved ? "fill-red-600 text-red-600" : ""}`} />
                {saved ? "Saved" : "Save"}
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-8 border-t border-white/10 pt-6 text-xs text-gray-500">
              <span className="inline-flex items-center gap-2">
                <Truck className="h-4 w-4 text-red-600" />
                Free Overnight Shipping
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-red-600" />
                3-Year Warranty
              </span>
            </div>
          </div>
        </section>

        <section className="mt-28">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <h2 className="text-2xl font-bold text-white">Technical Specifications</h2>
            <button className="inline-flex items-center gap-2 text-sm text-gray-400">
              Download PDF <Download className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-8 grid overflow-hidden rounded-lg border border-white/10 bg-neutral-900 md:grid-cols-2">
            <SpecGroup
              title="Product"
              rows={[
                ["Brand", product.brand],
                ["Category", product.category],
                ["SKU", product.sku || "NK-PRODUCT"],
                ["Size", product.size || "Standard"],
              ]}
            />
            <SpecGroup
              title="Performance"
              rows={[
                ["Stock", `${product.stock ?? 0} units`],
                ["Status", product.status],
                ["Finish", "Professional Grade"],
                ["Application", product.features?.[0] || "Premium Protection"],
              ]}
            />
          </div>
        </section>

        <section className="mt-24">
          <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
            <h2 className="text-xl font-medium text-white">Looking for more?</h2>
            <Link to="/shop" className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase text-gray-400">
              More
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

const SpecGroup = ({ title, rows }) => (
  <div className="border-white/10 p-6 md:border-r md:last:border-r-0">
    <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-gray-500">
      {title}
    </h3>
    <div className="space-y-0">
      {rows.map(([label, value]) => (
        <div key={label} className="flex justify-between gap-6 border-b border-white/10 py-4 text-sm last:border-b-0">
          <span className="text-gray-500">{label}</span>
          <span className="max-w-[260px] text-right text-white">{value}</span>
        </div>
      ))}
    </div>
  </div>
);

export default ProductDetailPage;
