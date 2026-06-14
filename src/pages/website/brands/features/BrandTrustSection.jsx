import { Award, Globe2, Microscope, TrendingUp } from "lucide-react";

const reasons = [
  {
    title: "Quality Assurance",
    description:
      "Rigorous multi-stage testing to ensure every product exceeds industry standards.",
    icon: Award,
  },
  {
    title: "Proven Performance",
    description:
      "Battle-tested in the world's harshest climates, from desert heat to coastal humidity.",
    icon: TrendingUp,
  },
  {
    title: "International Standards",
    description: "Compliance with ASTM, ISO, and BS standards for total peace of mind.",
    icon: Globe2,
  },
  {
    title: "Technical Expertise",
    description:
      "Backing from global R&D centers to solve the most complex application challenges.",
    icon: Microscope,
  },
];

const BrandTrustSection = () => {
  return (
    <section className="bg-neutral-950 px-6 py-32 md:px-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-20 px-0 md:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-4xl font-black leading-10 text-white">
            Why We Partner With <span className="text-red-600">The Best</span>
          </h2>
          <div className="h-1 w-24 bg-red-600" />
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ title, description, icon: Icon }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="flex size-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <Icon className="h-7 w-7 text-red-600" strokeWidth={2.5} />
              </div>
              <h3 className="pt-6 text-lg font-bold leading-7 text-white">
                {title}
              </h3>
              <p className="mt-2 max-w-60 text-sm font-normal leading-6 text-gray-500">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandTrustSection;
