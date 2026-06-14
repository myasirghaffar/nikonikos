import { ArrowRight } from "lucide-react";
import { brochuresHeroBackground } from "../../../../assets/images";

const BrochuresHeroSection = () => {
  return (
    <section className="relative flex min-h-[780px] items-center overflow-hidden bg-black">
      <img
        src={brochuresHeroBackground}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.78)_38%,rgba(0,0,0,0.18)_72%,rgba(0,0,0,0)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-black/0 to-black" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] px-6 py-24 md:px-16">
        <div className="max-w-[650px]">
          <p className="text-sm font-bold uppercase leading-5 tracking-[0.18em] text-red-600">
            Resources &bull; Guides &bull; Catalogs
          </p>
          <span className="mt-5 block h-px w-36 bg-red-600" />
          <h1 className="mt-10 text-5xl font-extrabold leading-[1.08] text-white md:text-7xl">
            Knowledge
            <span className="block text-red-600">That Builds Better.</span>
          </h1>
          <p className="mt-8 max-w-[480px] text-xl leading-9 text-white/70">
            Download professional brochures, guides and technical resources.
          </p>

          <div className="mt-12 flex flex-wrap gap-8">
            <a
              href="#brochure-library"
              className="inline-flex h-16 min-w-[230px] items-center justify-center gap-10 rounded-md bg-red-600 px-8 text-xl font-bold text-white shadow-[0px_20px_50px_rgba(227,30,36,0.16)] transition hover:bg-red-700"
            >
              Explore Brochures <ArrowRight className="h-7 w-7" />
            </a>
            <a
              href="#resource-center"
              className="inline-flex h-16 min-w-[250px] items-center justify-center gap-10 rounded-md border border-red-600 bg-black/35 px-8 text-xl font-bold text-white transition hover:bg-red-600"
            >
              View All Resources <ArrowRight className="h-7 w-7" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrochuresHeroSection;
