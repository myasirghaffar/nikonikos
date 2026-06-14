import { aboutJourneyImage } from "../../../../assets/images";

const milestones = [
  {
    year: "1978",
    title: "Foundation & The First Formulation",
    description:
      "Established as a specialized coating laboratory focused on industrial-grade architectural paints for heavy infrastructure.",
  },
  {
    year: "1995",
    title: "Industrial Expansion",
    description:
      "Scaled production facilities and entered the heavy industrial sector with corrosion-resistant epoxy systems.",
  },
  {
    year: "2008",
    title: "Waterproofing & Insulation Hub",
    description:
      "Launched the comprehensive ShieldSeries waterproofing and thermal insulation range for building envelopes.",
  },
  {
    year: "2026",
    title: "Digital Transformation",
    description:
      "Integration of BIM-ready assets and AI-driven specification tools for architects and global project teams.",
  },
];

const AboutJourneySection = () => {
  return (
    <section className="relative overflow-hidden bg-neutral-900 px-5 py-32 md:px-12">
      <div className="absolute right-0 top-16 h-[877px] w-[770px] rounded-full bg-red-600/10 blur-[53px]" />
      <div className="relative mx-auto max-w-[1344px]">
        <h2 className="text-center text-4xl font-extrabold leading-10 text-white">
          Our Journey
        </h2>

        <div className="mt-20 grid gap-16 lg:grid-cols-[1fr_632px]">
          <div className="border-l-2 border-red-700 pl-12">
            <div className="flex flex-col gap-24">
              {milestones.map((item, index) => (
                <div key={item.year} className="relative">
                  <span
                    className={`absolute -left-[59px] top-1 size-4 rounded-full bg-red-700 ${
                      index === 0 ? "shadow-[0_0_30px_12px_rgba(204,0,0,0.6)]" : ""
                    }`}
                  />
                  <p className="text-2xl font-black leading-8 text-red-700">
                    {item.year}
                  </p>
                  <h3 className="mt-2 text-xl font-bold leading-7 text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[576px] text-base leading-6 text-white/40">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <img
            src={aboutJourneyImage}
            alt="Nikonikkos finished architectural project"
            className="h-[692px] w-full rounded-xl object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutJourneySection;
