import { ArrowRight } from "lucide-react";
import {
  solutionDecorativeFinishes,
  solutionPaint,
  solutionThermalInsulation,
  solutionWaterproofing,
} from "../../../../assets/images";

const categories = [
  {
    title: "Decorative",
    count: "240+ Products",
    image: solutionDecorativeFinishes,
  },
  {
    title: "Waterproofing",
    count: "180+ Products",
    image: solutionWaterproofing,
  },
  {
    title: "Industrial",
    count: "320+ Products",
    image: solutionPaint,
  },
  {
    title: "Flooring",
    count: "110+ Products",
    image: solutionThermalInsulation,
  },
];

const SpecializedCategoriesSection = () => {
  return (
    <section className="bg-black px-6 py-32">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-16">
        <h2 className="text-center text-4xl font-black leading-10 text-white">
          Specialized <span className="text-red-600">Categories</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <article
              key={category.title}
              className="group relative h-96 overflow-hidden border border-white/5"
            >
              <img
                src={category.image}
                alt={category.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <p className="pb-2 text-xs font-bold uppercase leading-4 tracking-wider text-red-600">
                  {category.count}
                </p>
                <h3 className="pb-4 text-2xl font-bold leading-8 text-white">
                  {category.title}
                </h3>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 text-sm font-bold leading-5 tracking-tight text-white transition hover:text-red-600"
                >
                  Explore Collection
                  <ArrowRight className="h-3.5 w-3.5 text-red-600" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializedCategoriesSection;
