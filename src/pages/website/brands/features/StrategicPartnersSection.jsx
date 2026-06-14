import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import {
  bergerPaintsImage,
  jotunPaintsImage,
  nationalPaintsImage,
  sikaConstructionImage,
} from "../../../../assets/images";

const partners = [
  {
    brand: "JOTUN",
    title: "Jotun Paints",
    description:
      "Pioneers in marine and protective coatings, offering superior durability for iconic structures.",
    image: jotunPaintsImage,
    badgeClass: "bg-white text-black",
    features: [
      "Weatherproof Formulas",
      "Eco-Friendly Solutions",
      "Advanced Tinting",
    ],
  },
  {
    brand: "NATIONAL",
    title: "National Paints",
    description:
      "The region's leading manufacturer specializing in decorative and industrial paint systems.",
    image: nationalPaintsImage,
    badgeClass: "bg-white text-black",
    features: [
      "ISO Certified Quality",
      "High Scuff Resistance",
      "Rapid Curing Tech",
    ],
  },
  {
    brand: "SIKA",
    title: "Sika Solutions",
    description:
      "Global benchmark for waterproofing, bonding, and structural reinforcement chemicals.",
    image: sikaConstructionImage,
    badgeClass: "bg-red-600 text-white",
    features: ["Seamless Protection", "Chemical Resistance", "Long-life Warranty"],
  },
  {
    brand: "BERGER",
    title: "Berger Paints",
    description:
      "Excellence in specialized architectural finishes and protective coatings for over 250 years.",
    image: bergerPaintsImage,
    badgeClass: "bg-white text-black",
    features: ["Anti-Bacterial Tech", "Low VOC Content", "Superior Opacity"],
  },
];

const StrategicPartnersSection = () => {
  return (
    <section id="strategic-partners" className="bg-black px-6 py-32">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold leading-10 text-white">
              Our Strategic{" "}
              <span className="text-red-600 underline decoration-red-600 underline-offset-4">
                Partners
              </span>
            </h2>
            <p className="max-w-[576px] text-base font-normal leading-6 tracking-tight text-gray-400">
              We curate only the highest performing brands, ensuring that every
              drop and every layer meets international performance benchmarks.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              aria-label="Previous partners"
              className="flex size-12 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-red-600 hover:text-red-600"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next partners"
              className="flex size-12 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-red-600 hover:text-red-600"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {partners.map((partner) => (
            <PartnerCard key={partner.title} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PartnerCard = ({ partner }) => {
  return (
    <article className="flex min-h-[540px] flex-col border border-white/10 bg-neutral-900/40 p-1">
      <div className="relative h-48 overflow-hidden">
        <img
          src={partner.image}
          alt={partner.title}
          className="h-full w-full object-cover"
        />
        <div
          className={`absolute left-4 top-4 rounded-sm px-4 py-1.5 text-lg font-black leading-7 ${partner.badgeClass}`}
        >
          {partner.brand}
        </div>
      </div>

      <div className="flex flex-1 flex-col items-start gap-2.5 p-6">
        <h3 className="text-xl font-bold leading-7 text-white">{partner.title}</h3>
        <p className="min-h-[72px] text-sm font-normal leading-6 text-gray-400">
          {partner.description}
        </p>

        <ul className="flex flex-col gap-3 pb-5 pt-3.5">
          {partner.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <Check className="h-3 w-3 text-red-600" strokeWidth={3} />
              <span className="text-sm font-medium leading-5 text-white">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="mt-auto inline-flex w-full justify-center border border-white/10 py-3 text-xs font-bold uppercase leading-4 tracking-wider text-white transition hover:border-red-600 hover:text-red-600"
        >
          View Collection
        </button>
      </div>
    </article>
  );
};

export default StrategicPartnersSection;
