import { ArrowRight, Award, Globe2, ShieldCheck, Timer } from "lucide-react";
import { Link } from "react-router-dom";
import { aboutHeroBackground } from "../../../../assets/images";

const proofItems = [
  { label: "Legacy of Excellence", icon: Award },
  { label: "Proven Performance", icon: ShieldCheck },
  { label: "Global Standards", icon: Globe2 },
  { label: "45+ Years Expertise", icon: Timer },
];

const AboutHeroSection = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-black">
        <img
          src={aboutHeroBackground}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.98)_0%,rgba(0,0,0,0.84)_36%,rgba(0,0,0,0.18)_72%,rgba(0,0,0,0.10)_100%)]" />

        <div className="relative mx-auto flex min-h-[877px] max-w-[1440px] items-center px-6 py-20 md:px-16">
          <div className="max-w-[650px]">
            <p className="text-lg font-bold uppercase leading-6 tracking-wide text-red-600">
              Built To Protect. Designed To Inspire.
            </p>
            <span className="mt-6 block h-px w-96 max-w-full bg-red-600/70" />

            <h1 className="mt-10 text-6xl font-extrabold leading-[1.08] text-white md:text-7xl">
              Quality That
              <span className="block text-red-600">Stands the Test.</span>
            </h1>

            <p className="mt-9 max-w-[520px] text-xl leading-9 text-white/65">
              High-performance paints, waterproofing solutions, and construction
              systems for lasting protection and beauty.
            </p>

            <div className="mt-12 flex flex-wrap gap-8">
              <Link
                to="/shop"
                className="inline-flex h-16 min-w-[234px] items-center justify-center gap-8 rounded-lg bg-red-600 px-8 text-lg font-bold text-white"
              >
                Explore Products <ArrowRight className="h-7 w-7" />
              </Link>
              <Link
                to="/shop"
                className="inline-flex h-16 min-w-[234px] items-center justify-center gap-8 rounded-lg border border-red-600 bg-black/35 px-8 text-lg font-bold text-white"
              >
                View Categories <ArrowRight className="h-7 w-7" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-red-700">
        <div className="mx-auto grid max-w-[1344px] gap-6 px-6 py-9 md:grid-cols-2 md:px-12 lg:grid-cols-4">
          {proofItems.map(({ label, icon: Icon }) => (
            <div key={label} className="flex items-center gap-4">
              <Icon className="h-7 w-7 fill-white text-white" />
              <p className="text-lg font-semibold uppercase leading-6 tracking-widest text-white">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutHeroSection;
