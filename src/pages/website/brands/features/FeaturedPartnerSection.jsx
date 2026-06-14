import { ArrowRight, ShieldCheck, Wrench } from "lucide-react";
import { sikaConstructionImage } from "../../../../assets/images";

const features = [
  {
    title: "Authentic Guarantee",
    description:
      "100% genuine Sika products sourced directly from global manufacturing hubs.",
    icon: ShieldCheck,
  },
  {
    title: "Technical Consultation",
    description:
      "Expert guidance on Sika waterproofing and structural bonding systems.",
    icon: Wrench,
  },
];

const FeaturedPartnerSection = () => {
  return (
    <section className="bg-neutral-950 px-6 py-32 md:px-20">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-0 md:px-8 lg:grid-cols-2 lg:items-stretch">
        <div className="relative flex min-h-[600px] flex-col justify-center">
          <div className="absolute -left-10 -top-10 size-40 bg-red-600/20 blur-[32px]" />
          <div className="relative border-l-4 border-red-600 pl-10">
            <p className="text-sm font-bold uppercase leading-5 tracking-wider text-red-600">
              Featured Strategic Partner
            </p>
            <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl md:leading-[48px]">
              Sika: Certified
              <br />
              <span className="text-red-600">Solutions Provider</span>
            </h2>
            <p className="mt-8 max-w-[520px] text-lg font-normal leading-7 text-gray-400">
              As a primary distributor of Sika technologies, Nikonikkos provides
              unparalleled technical support and product availability for the
              most demanding engineering tasks.
            </p>

            <div className="flex flex-col gap-6 py-10">
              {features.map(({ title, description, icon: Icon }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-red-600/10">
                    <Icon className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold leading-6 text-white">
                      {title}
                    </h3>
                    <p className="max-w-96 text-sm font-normal leading-5 text-gray-500">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-3 rounded-sm bg-red-600 px-10 py-4 text-base font-bold leading-6 text-white transition hover:bg-red-700"
            >
              Explore Sika Solutions
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <div className="relative min-h-[600px] overflow-hidden rounded-2xl border border-white/10">
          <img
            src={sikaConstructionImage}
            alt="Sika waterproofing application"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/0 to-black/0" />
          <div className="absolute bottom-8 left-8 right-8 max-w-[494px] rounded-sm border border-white/10 bg-black/80 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-black uppercase leading-4 tracking-wider text-red-600">
                Project Highlight
              </span>
              <span className="text-xs font-normal leading-4 tracking-tight text-gray-400">
                Dubai Metro Extension
              </span>
            </div>
            <p className="mt-3.5 text-sm font-normal leading-6 text-white">
              Utilizing Sika ViscoCrete technology for high-performance concrete
              foundations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPartnerSection;
