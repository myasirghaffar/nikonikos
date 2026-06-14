import { Award, Handshake, Leaf, Microchip } from "lucide-react";

const values = [
  {
    title: "Quality First",
    description:
      "Uncompromising standards in every batch, tested against the world's most rigorous certifications.",
    icon: Award,
    offset: "lg:-translate-y-4",
  },
  {
    title: "Innovation Driven",
    description:
      "Dedicated R&D laboratory constantly exploring new chemical frontiers for superior performance.",
    icon: Microchip,
    offset: "lg:translate-y-9",
  },
  {
    title: "Customer Commitment",
    description:
      "Building long-term partnerships through technical support, training, and on-site expertise.",
    icon: Handshake,
    offset: "lg:-translate-y-4",
  },
  {
    title: "Sustainable Future",
    description:
      "Pioneering eco-friendly formulations and low-VOC coatings for a greener construction era.",
    icon: Leaf,
    offset: "lg:translate-y-9",
  },
];

const AboutValuesSection = () => {
  return (
    <section className="bg-black px-5 py-24 md:px-12">
      <div className="mx-auto max-w-[1344px]">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-center text-4xl font-extrabold leading-10 text-white">
            Our Core Values
          </h2>
          <span className="h-1 w-20 bg-red-700" />
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map(({ title, description, icon: Icon, offset }) => (
            <article
              key={title}
              className={`min-h-72 rounded-[10px] border border-white/30 bg-neutral-950 p-10 ${offset}`}
            >
              <Icon className="h-8 w-8 text-red-700" />
              <h3 className="mt-6 text-xl font-bold leading-7 text-white">
                {title}
              </h3>
              <p className="mt-4 text-base leading-6 text-white/40">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValuesSection;
