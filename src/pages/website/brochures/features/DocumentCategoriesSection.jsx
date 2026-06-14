import { ArrowRight } from "lucide-react";
import {
  solutionDecorativeFinishes,
  solutionThermalInsulation,
  solutionWaterproofing,
  standardLivingRoom,
} from "../../../../assets/images";

const filters = [
  "All Resources",
  "Paint Systems",
  "Waterproofing Solutions",
  "Insulation Systems",
  "Decorative Finishes",
  "Construction Chemicals",
  "Tools & Accessories",
];

const documents = [
  {
    title: "Premium Paint Collection 2026",
    description:
      "Comprehensive guide to residential and commercial architectural coatings.",
    meta: "PDF • 12.4 MB",
    updated: "Updated: Jan 2026",
    badge: "New 2026 Edition",
    image: standardLivingRoom,
  },
  {
    title: "Waterproofing Systems Manual",
    description:
      "Professional sub-surface and rooftop waterproofing application techniques.",
    meta: "PDF • 8.7 MB",
    updated: "Updated: Dec 2025",
    badge: "Technical Guide",
    image: solutionWaterproofing,
  },
  {
    title: "Decorative Color Collection",
    description:
      "Curated interior and exterior color palettes with architectural finishes.",
    meta: "PDF • 24.1 MB",
    updated: "Updated: Jan 2026",
    badge: "Design Palette",
    image: solutionDecorativeFinishes,
  },
  {
    title: "Thermal Insulation Handbook",
    description:
      "Energy-efficient building envelope solutions for extreme climates.",
    meta: "PDF • 15.5 MB",
    updated: "Updated: Feb 2026",
    badge: "Infrastructure",
    image: solutionThermalInsulation,
  },
];

const DocumentCategoriesSection = () => {
  return (
    <section id="brochure-library" className="bg-black px-6 py-28">
      <div className="mx-auto flex max-w-[1344px] flex-col items-center">
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-10 text-white">
            Browse Document Categories
          </h2>
          <span className="h-1 w-20 bg-red-600" />
        </div>

        <div className="mb-16 flex max-w-[1152px] flex-wrap justify-center gap-4">
          {filters.map((filter, index) => (
            <button
              key={filter}
              type="button"
              className={`rounded-full px-6 py-2 text-xs font-bold leading-4 tracking-wide text-white transition ${
                index === 0
                  ? "bg-red-600"
                  : "border border-white bg-white/10 hover:border-red-600"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid w-full gap-6 md:grid-cols-2 xl:grid-cols-4">
          {documents.map((document) => (
            <DocumentCard key={document.title} document={document} />
          ))}
        </div>
      </div>
    </section>
  );
};

const DocumentCard = ({ document }) => {
  return (
    <article className="overflow-hidden rounded-lg border border-white/10 bg-neutral-900">
      <div className="relative h-60 overflow-hidden">
        <img
          src={document.image}
          alt={document.title}
          className="h-full w-full object-cover opacity-80 transition duration-500 hover:scale-105"
        />
        <span className="absolute left-0 top-0 bg-red-600 px-3 py-1 text-[10px] font-bold uppercase leading-4 tracking-wide text-white">
          {document.badge}
        </span>
      </div>

      <div className="flex min-h-[272px] flex-col gap-4 p-8">
        <h3 className="whitespace-pre-line text-xl font-bold leading-6 text-white">
          {document.title}
        </h3>
        <p className="text-sm font-normal leading-5 text-white/50">
          {document.description}
        </p>
        <div className="mt-auto flex flex-wrap items-center gap-4">
          <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white/40">
            {document.meta}
          </span>
          <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white/40">
            {document.updated}
          </span>
        </div>
        <button
          type="button"
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-red-600 py-3 text-xs font-bold uppercase leading-4 tracking-wider text-white transition hover:bg-red-700"
        >
          Preview <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </article>
  );
};

export default DocumentCategoriesSection;
