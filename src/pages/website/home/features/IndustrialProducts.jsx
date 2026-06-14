import ProductCard from "../../../../components/website/ProductCard";
import { getStorefrontProducts } from "../../../../components/website/productPresenter";
import { getProducts } from "../../../../lib/adminStore";

const IndustrialProducts = () => {
  const products = getStorefrontProducts(getProducts(), 4);

  return (
    <section className="bg-black px-5 py-20 text-white md:py-24">
      <div className="mx-auto max-w-[1360px]">
        <div className="mx-auto flex max-w-[720px] flex-col items-center text-center">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-12 bg-red-600" />
            <p className="text-sm font-bold uppercase leading-5 tracking-wider text-red-600">
              Premium Industrial Solutions
            </p>
          </div>
          <h2 className="mt-8 text-4xl font-bold leading-tight text-white md:text-5xl md:leading-[48px]">
            Shield Your Construction
          </h2>
          <p className="mt-4 text-lg font-normal leading-7 text-white/90">
            Advanced chemical solutions designed for maximum durability,
            protection, and performance in harsh industrial environments.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id || product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrialProducts;
