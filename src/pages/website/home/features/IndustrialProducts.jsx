import { Building2, CheckCircle2, PaintRoller, Shield, Waves } from "lucide-react";
import {
  productAquaShield,
  productBituShield,
  productHydroShield,
  productWallShield,
} from "../../../../assets/images";

const products = [
  {
    title: "Aqua Shield Liquid Membrane",
    image: productAquaShield,
    icon: Shield,
    iconColor: "text-white",
    features: ["UV Resistant", "Flexible Coating", "Long Lasting Protection"],
  },
  {
    title: "Bitu Shield Foundation Coating",
    image: productBituShield,
    icon: Building2,
    iconColor: "text-white",
    features: ["Damp Proof", "Strong Adhesion", "Weather Resistant"],
  },
  {
    title: "Wall Shield Exterior Paint",
    image: productWallShield,
    icon: PaintRoller,
    iconColor: "text-white",
    features: ["Smooth Finish", "Fade Resistant", "Long Lasting Color"],
  },
  {
    title: "Hydro Shield Waterproof System",
    image: productHydroShield,
    icon: Waves,
    iconColor: "text-red-600",
    features: ["Anti-Microbial", "Heavy Duty", "Waterproof Protection"],
  },
];

const IndustrialProducts = () => {
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
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ title, image, icon: Icon, iconColor, features }) => {
  return (
    <article className="overflow-hidden rounded-xl border border-white/20 bg-neutral-800 shadow-[0px_10px_24px_-8px_rgba(0,0,0,0.45)]">
      <div className="relative h-56 overflow-hidden rounded-t-xl bg-gray-900">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover opacity-90"
        />
        <div className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-gray-900/80 backdrop-blur-sm">
          <Icon className={`h-5 w-5 ${iconColor}`} strokeWidth={2.5} />
        </div>
      </div>

      <div className="px-[22px] pb-7 pt-7">
        <h3 className="min-h-14 text-xl font-bold leading-7 text-white">
          {title}
        </h3>

        <ul className="mt-4 space-y-3 pb-8">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <CheckCircle2 className="mt-1 h-3.5 w-3.5 shrink-0 fill-red-600 text-red-600" />
              <span className="text-sm font-normal leading-5 text-gray-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <div className="border-t border-gray-700 pt-4">
          <p className="flex items-baseline gap-2">
            <span className="text-sm font-normal leading-5 tracking-tight text-gray-400">
              From
            </span>
            <span className="text-2xl font-bold leading-6 tracking-tight text-white">
              €340
            </span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default IndustrialProducts;
