import { Download, FileText, House, Palette } from "lucide-react";

const brochures = [
  {
    title: "Waterproofing Guide",
    description: "Complete technical specifications.",
    icon: FileText,
  },
  {
    title: "Paint Shade Catalog",
    description: "Explore our latest color trends.",
    icon: Palette,
  },
  {
    title: "Insulation Systems",
    description: "Thermal efficiency solutions.",
    icon: House,
  },
];

const BrochureDownloads = () => {
  return (
    <section className="flex flex-col items-start gap-14 bg-neutral-800 px-5 pb-16 pt-24 text-white md:px-10">
      <div className="flex w-full flex-col items-start gap-4">
        <div className="flex w-full flex-col items-center">
          <h2 className="text-center text-4xl font-extrabold uppercase leading-10 text-white">
            Download Brochures
          </h2>
        </div>

        <div className="flex w-full flex-col items-center">
          <p className="max-w-[489px] text-center text-base font-normal leading-6 text-white">
            Get detailed guides and catalogs for your specific project needs.
          </p>
        </div>
      </div>

      <div className="grid w-full gap-8 lg:grid-cols-3">
        {brochures.map((brochure) => (
          <BrochureCard key={brochure.title} {...brochure} />
        ))}
      </div>
    </section>
  );
};

const BrochureCard = ({ title, description, icon: Icon }) => {
  return (
    <article className="flex min-h-36 items-center gap-6 rounded-2xl border border-white/30 bg-zinc-900 p-8 shadow-sm">
      <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-white">
        <Icon className="h-6 w-6 text-red-600" strokeWidth={3} />
      </div>

      <div className="flex min-w-0 flex-col items-start gap-1">
        <h3 className="text-lg font-bold leading-7 text-white">{title}</h3>
        <p className="text-xs font-normal leading-4 text-gray-200">
          {description}
        </p>
        <a
          href="#"
          className="mt-2 inline-flex items-center gap-2 text-xs font-bold uppercase leading-4 tracking-wide text-white"
        >
          Download
          <Download className="h-3 w-3" strokeWidth={3} />
        </a>
      </div>
    </article>
  );
};

export default BrochureDownloads;
