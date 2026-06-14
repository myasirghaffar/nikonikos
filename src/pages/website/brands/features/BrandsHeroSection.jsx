import { ArrowRight } from "lucide-react";
import { brandsHeroBackground } from "../../../../assets/images";

const BrandsHeroSection = () => {
  return (
    <section className="relative flex min-h-[800px] items-center justify-center overflow-hidden bg-black pt-32">
      <img
        src={brandsHeroBackground}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-black/0 to-black" />

      <div className="relative z-10 mx-auto flex w-full max-w-[896px] flex-col items-center gap-8 px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-red-600/30 bg-red-600/10 px-4 py-1.5">
          <span className="size-2 rounded-full bg-red-600" />
          <span className="text-xs font-bold uppercase leading-4 tracking-wider text-red-600">
            Global Partners &bull; Trusted Manufacturers
          </span>
        </div>

        <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl md:leading-[72px]">
          Powered By The
          <br />
          Industry&apos;s
          <br />
          <span className="text-red-600">Most Trusted Brands</span>
        </h1>

        <p className="max-w-[672px] text-lg font-normal leading-8 text-gray-400 md:text-xl">
          Nikonikkos partners with global leaders in chemicals, coatings, and
          construction materials to deliver uncompromising quality for every
          infrastructure project.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row sm:gap-6">
          <a
            href="#strategic-partners"
            className="inline-flex items-center gap-3 rounded-sm bg-red-600 px-10 py-4 text-base font-bold leading-6 tracking-tight text-white transition hover:bg-red-700"
          >
            Explore Brands
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm border border-white/20 bg-white/5 px-10 py-4 text-base font-bold leading-6 tracking-tight text-white transition hover:border-red-600 hover:text-red-600"
          >
            Become A Partner
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrandsHeroSection;
