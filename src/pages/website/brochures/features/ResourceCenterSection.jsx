import { Download, Plus } from "lucide-react";

const resourceColumns = [
  {
    title: "Waterproofing Center",
    action: "View All Resources",
    items: [
      "Basement Tanking Systems",
      "Liquid Membrane Guide",
      "Rooftop Protection Detail",
      "Bridge Deck Solutions",
      "Joint Sealing Manual",
      "Testing & Certification",
    ],
  },
  {
    title: "Paint System Library",
    action: "Explore Catalogs",
    items: [
      "Luxury Interior Finishes",
      "External Facade Coatings",
      "Wood Care Systems",
      "Metal Primers & Topcoats",
      "Decorative Textures",
      "Sustainable Eco-Range",
    ],
  },
  {
    title: "Technical Hub",
    action: "Download Documentation",
    items: [
      "Technical Data Sheets (TDS)",
      "Safety Data Sheets (MSDS)",
      "LEED / Green Certifications",
      "Method Statements",
      "BIM Objects & CAD Files",
      "Warranty Guidelines",
    ],
  },
];

const ResourceCenterSection = () => {
  return (
    <section
      id="resource-center"
      className="border-y border-white/10 bg-gradient-to-br from-neutral-900 to-stone-950 px-6 py-20"
    >
      <div className="mx-auto grid max-w-[1344px] gap-10 lg:grid-cols-3">
        {resourceColumns.map((column) => (
          <article
            key={column.title}
            className="min-h-[608px] rounded-xl border border-white bg-neutral-900 p-8"
          >
            <span className="block h-0.5 w-12 bg-red-600" />
            <h2 className="mt-2 text-2xl font-extrabold uppercase leading-9 text-white">
              {column.title}
            </h2>

            <div className="mt-8 flex flex-col gap-6">
              {column.items.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="flex items-center justify-between border-b border-white/10 pb-4 text-left text-base font-normal leading-6 text-white/70 transition hover:text-white"
                >
                  {item}
                  <Plus className="h-3 w-3 text-red-600" />
                </button>
              ))}
            </div>

            <button
              type="button"
              className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white py-3 text-xs font-bold uppercase leading-4 tracking-wider text-white transition hover:border-red-600 hover:text-red-600"
            >
              {column.action}
              <Download className="h-3.5 w-3.5" />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ResourceCenterSection;
