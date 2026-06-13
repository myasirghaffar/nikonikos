import { ArrowRight, Droplet, Layers, PaintRoller, Thermometer } from "lucide-react";
import {
  solutionDecorativeFinishes,
  solutionPaint,
  solutionThermalInsulation,
  solutionWaterproofing,
} from "../../../../assets/images";

const solutions = [
  {
    title: "Waterproofing Systems",
    description:
      "Advanced membranes and coatings for absolute moisture protection in extreme conditions.",
    image: solutionWaterproofing,
    icon: Droplet,
  },
  {
    title: "Decorative Finishes",
    description:
      "Architectural textures and microcements for premium interior and exterior aesthetics.",
    image: solutionDecorativeFinishes,
    icon: Layers,
  },
  {
    title: "Paint Solutions",
    description:
      "High-performance industrial and commercial paints engineered for durability.",
    image: solutionPaint,
    icon: PaintRoller,
  },
  {
    title: "Thermal Insulation",
    description:
      "Energy-efficient cladding and insulation systems for modern climate control.",
    image: solutionThermalInsulation,
    icon: Thermometer,
  },
];

const Solutions = () => {
  return (
    <section className="border-y border-white/5 bg-neutral-900 px-5 pb-32 pt-16">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-16 px-0 md:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold uppercase leading-4 tracking-wider text-red-600">
              Core Capabilities
            </p>
            <h2 className="max-w-[640px] text-4xl font-black leading-tight text-white md:text-5xl md:leading-[48px]">
              Solutions For Every Surface
            </h2>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 self-start text-sm font-bold uppercase leading-5 tracking-wide text-gray-400 transition hover:text-white md:self-auto"
          >
            <span>View All Solutions</span>
            <ArrowRight className="h-4 w-4 text-red-600" strokeWidth={2.5} />
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {solutions.map((solution) => (
            <SolutionCard key={solution.title} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SolutionCard = ({ title, description, image, icon: Icon }) => {
  return (
    <article className="group relative min-h-96 overflow-hidden rounded-xl border border-white/5 bg-zinc-900/70 shadow-2xl">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-500 group-hover:scale-105 group-hover:opacity-75"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-black/0" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-2 px-8 pb-12">
        <div className="mb-2 flex size-12 items-center justify-center rounded-lg border border-white/10 bg-black/50 backdrop-blur-md">
          <Icon className="h-6 w-6 fill-white text-white" strokeWidth={2.5} />
        </div>
        <h3 className="pt-4 text-2xl font-bold leading-8 text-white">
          {title}
        </h3>
        <p className="max-w-96 text-sm font-normal leading-5 text-gray-400">
          {description}
        </p>
        <button
          type="button"
          className="mt-6 inline-flex translate-y-2 items-center gap-2 text-sm font-bold leading-5 tracking-tight text-red-600 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"
        >
          <span>Explore</span>
          <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
        </button>
      </div>
    </article>
  );
};

export default Solutions;
