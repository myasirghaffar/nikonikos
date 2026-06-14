import { Award, Headphones, Layers3, Truck } from "lucide-react";
import { shopHeroBackground } from "../../../../assets/images";

const heroFeatures = [
  { label: "Premium\nQuality", icon: Award },
  { label: "Wide\nRange", icon: Layers3 },
  { label: "Expert\nSupport", icon: Headphones },
  { label: "Fast\nDelivery", icon: Truck },
];

const ShopHeroSection = () => {
  return (
    <section className="relative min-h-[667px] overflow-hidden bg-black">
      <img
        src={shopHeroBackground}
        alt="Nikonikkos product systems"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/45 to-transparent" />
      <div className="absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-black to-transparent blur-2xl" />

      <div className="relative z-10 mx-auto flex min-h-[667px] max-w-[1440px] items-center px-6 py-20 md:px-20">
        <div className="max-w-[440px]">
          <div>
            <p className="text-sm font-bold uppercase leading-5 tracking-wide text-red-600">
              Explore Our Categories
            </p>
            <span className="mt-5 block h-0.5 w-28 bg-red-600" />
          </div>

          <h1 className="mt-6 text-5xl font-extrabold leading-[56px] text-white md:text-6xl md:leading-[68px]">
            Solutions For
            <br />
            <span className="text-red-600">Every Surface.</span>
          </h1>

          <p className="mt-8 max-w-[388px] text-lg font-normal leading-8 text-white/80">
            High performance products engineered for protection, durability and
            beautiful finishes.
          </p>

          <div className="mt-12 grid max-w-[405px] grid-cols-2 gap-8 sm:grid-cols-4">
            {heroFeatures.map(({ label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center text-center">
                <Icon className="h-9 w-9 text-red-600" strokeWidth={1.8} />
                <p className="mt-3 whitespace-pre-line text-sm font-medium leading-5 text-white">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopHeroSection;
