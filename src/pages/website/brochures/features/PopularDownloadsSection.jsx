import { FileText, Layers, PaintRoller, Plus, Shield } from "lucide-react";

const popularDownloads = [
  {
    title: "Design Trends 2026",
    description: "Annual architectural trend report.",
    downloads: "4.2k Downloads",
    icon: FileText,
  },
  {
    title: "Finish Selection Guide",
    description: "Choosing sheens for various lighting.",
    downloads: "3.8k Downloads",
    icon: Layers,
  },
  {
    title: "Membrane Method Sheet",
    description: "Step-by-step waterproofing workflow.",
    downloads: "3.4k Downloads",
    icon: Shield,
  },
  {
    title: "Paint Application Basics",
    description: "Surface prep and coating sequence.",
    downloads: "2.9k Downloads",
    icon: PaintRoller,
  },
];

const PopularDownloadsSection = () => {
  return (
    <section className="bg-black px-6 py-28">
      <div className="mx-auto flex max-w-[1262px] flex-col items-center gap-14">
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-sm font-bold uppercase leading-5 tracking-wider text-red-600">
            Most Requested
          </p>
          <h2 className="text-5xl font-extrabold leading-[72px] text-white">
            Popular Downloads
          </h2>
        </div>

        <div className="grid w-full gap-6 md:grid-cols-2 xl:grid-cols-4">
          {popularDownloads.map(({ title, description, downloads, icon: Icon }) => (
            <article
              key={title}
              className="flex min-h-56 flex-col gap-6 rounded-[10px] border-l-2 border-white bg-neutral-900 p-8"
            >
              <Icon className="h-8 w-8 text-red-600" />
              <div>
                <h3 className="text-base font-bold leading-6 text-white">
                  {title}
                </h3>
                <p className="mt-2 text-xs font-normal leading-4 text-white/40">
                  {description}
                </p>
              </div>
              <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-6">
                <span className="text-[10px] font-bold uppercase leading-4 tracking-wide text-red-600">
                  {downloads}
                </span>
                <Plus className="h-3 w-3 text-red-600" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDownloadsSection;
