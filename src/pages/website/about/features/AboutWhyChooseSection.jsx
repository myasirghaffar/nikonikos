import { CheckCircle2 } from "lucide-react";

const reasons = [
  ["Decades of Expertise", "45+ years of specialized chemical engineering knowledge."],
  ["Diverse Portfolio", "From luxury finishes to heavy industrial shielding solutions."],
  ["Technical Excellence", "Lab-tested formulations exceeding international ASTM/BS standards."],
  ["Project Success", "A proven track record of zero failures in critical applications."],
  ["Global Distribution", "Reliable logistics network ensuring timely delivery worldwide."],
  ["True Partnership", "Dedicated support teams for design, specs, and site training."],
];

const AboutWhyChooseSection = () => {
  return (
    <section className="bg-black px-5 pb-32 md:px-12">
      <div className="mx-auto max-w-[1344px]">
        <h2 className="text-center text-4xl font-extrabold leading-10 text-white">
          Why Leading Firms Choose Nikonikkos
        </h2>

        <div className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map(([title, description]) => (
            <article
              key={title}
              className="min-h-32 rounded-md border-l-4 border-red-600 bg-neutral-900 p-8"
            >
              <div className="flex gap-6">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 fill-white text-white" />
                <div>
                  <h3 className="text-lg font-bold leading-7 text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-5 text-white/40">
                    {description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutWhyChooseSection;
