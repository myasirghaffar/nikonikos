import { getBrands } from "../../../../lib/adminCommerceStore";

const BrandPartners = () => {
  const brands = getBrands()
    .filter((brand) => brand.status === "active")
    .slice(0, 6);

  return (
    <section className="overflow-hidden bg-black px-5 py-16 md:px-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start gap-10 px-0 md:px-10">
        <div className="flex w-full flex-col items-center">
          <h2 className="text-center text-xl font-bold uppercase leading-4 tracking-wider text-white">
            Working with the World&apos;s Finest
          </h2>
        </div>

        <div className="flex w-full flex-wrap items-center justify-center gap-x-16 gap-y-8 md:justify-between">
          {brands.map((brand) => (
            <img
              key={brand.id}
              src={brand.logo}
              alt={`${brand.name} logo`}
              className="h-12 w-12 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPartners;
