import { ArrowRight } from "lucide-react";
import { homeHeroPainter } from "../../../../assets/images";

const HomeHeroSection = () => {
  return (
    <section className="relative isolate min-h-[calc(100vh-100px)] overflow-hidden bg-black">
      <img
        src={homeHeroPainter}
        alt="Painter holding tools in front of colorful paint splashes"
        className="absolute inset-0 -z-20 h-full w-full object-contain object-right"
      />

      <div className="mx-auto flex min-h-[calc(100vh-100px)] max-w-[1440px] items-center px-6 py-20 md:px-10 lg:px-24 xl:px-28">
        <div className="w-full max-w-[620px]">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-12 bg-red-600" />
            <p className="text-sm font-bold uppercase leading-5 tracking-[0.22em] text-red-600">
              Industrial Excellence
            </p>
          </div>

          <h1 className="mt-8 max-w-[620px] text-5xl font-extrabold leading-[1.08] text-white sm:text-6xl lg:text-[64px] lg:leading-[74px]">
            Protect. Beautify. Build With Confidence.
          </h1>

          <p className="mt-8 max-w-[520px] text-base font-normal leading-7 text-white/90">
            Discover premium paints, waterproofing systems, insulation
            materials, decorative finishes and industrial solutions trusted by
            contractors, architects and homeowners for over four decades.
          </p>

          <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <HeroButton variant="primary">Shop Now</HeroButton>
            <HeroButton variant="outline">Explore Category</HeroButton>
          </div>
        </div>
      </div>
    </section>
  );
};

const HeroButton = ({ children, variant }) => {
  const isPrimary = variant === "primary";

  return (
    <button
      type="button"
      className={[
        "inline-flex h-16 w-52 items-center justify-center gap-2 rounded-[33px] text-lg font-medium leading-6 text-white transition",
        isPrimary
          ? "bg-red-600 hover:bg-red-700"
          : "border border-white bg-transparent hover:border-red-600 hover:bg-red-600",
      ].join(" ")}
    >
      <span>{children}</span>
      <ArrowRight className="h-8 w-8" strokeWidth={2} />
    </button>
  );
};

export default HomeHeroSection;
