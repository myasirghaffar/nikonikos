import {
  ArrowRight,
  Award,
  Camera,
  CheckCircle2,
  ChevronRight,
  Grid3X3,
  Layers3,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Wrench,
} from "lucide-react";
import {
  galleryHeroBackground,
  productHydroShield,
  productWallShield,
  solutionDecorativeFinishes,
  solutionPaint,
  solutionThermalInsulation,
  solutionWaterproofing,
  standardLivingRoom,
  standardPaintMixer,
  standardStoreWarehouse,
} from "../../../assets/images";

const filterPills = [
  "All Projects",
  "Showroom Experience",
  "Product Displays",
  "Residential Projects",
  "Commercial Projects",
  "Waterproofing Solutions",
  "Decorative Finishes",
  "Insulation Systems",
  "Industrial Applications",
];

const projects = [
  {
    tag: "Waterproofing Excellence",
    title: "Rooftop Protection System",
    description:
      "High-performance waterproofing application ensuring structural longevity for multi-level commercial complexes.",
    image: solutionWaterproofing,
    action: "View Project",
  },
  {
    tag: "Premium Retail Experience",
    title: "Nikonikkos Experience Center",
    description:
      "A modern showroom environment showcasing integrated architectural finishes and smart material systems.",
    image: standardPaintMixer,
    action: "View Gallery",
  },
  {
    tag: "Luxury Interior Finishes",
    title: "Residential Paint Transformation",
    description:
      "Premium decorative paint systems applied to high-end residential estates for an uncompromising aesthetic.",
    image: standardLivingRoom,
    action: "View Project",
  },
  {
    tag: "Industrial Floor Protection",
    title: "Heavy-Duty Coating Application",
    description:
      "Industrial-grade floor coating system designed for extreme durability in high-traffic logistics centers.",
    image: standardStoreWarehouse,
    action: "View Project",
  },
  {
    tag: "Thermal Insulation Installation",
    title: "Energy Efficient Building System",
    description:
      "Advanced insulation solutions integrated into commercial skyscrapers for optimized climate control.",
    image: solutionThermalInsulation,
    action: "View Project",
  },
  {
    tag: "Warehouse Product Inventory",
    title: "Ready Stock Availability",
    description:
      "Extensive inventory management ensuring immediate fulfillment for large-scale infrastructure projects.",
    image: productHydroShield,
    action: "View Gallery",
  },
];

const stories = [
  {
    image: solutionDecorativeFinishes,
    quote:
      "The commercial basement waterproofing system provided by Nikonikkos solved a persistent leak issue that had haunted our project for months. Their technical support was unparalleled.",
    name: "Marcus Chen",
    role: "Principal Architect, Horizon Dev",
  },
  {
    image: productWallShield,
    quote:
      "We achieved an incredible finish for the Luxury Residential project using their decorative paint range. The depth of color and resistance to staining exceeded client expectations.",
    name: "Sarah Jenkins",
    role: "Interior Designer, Atelier S",
  },
  {
    image: solutionPaint,
    quote:
      "Protecting a coastal building requires systems that can withstand extreme humidity and salt air. Nikonikkos provided the exact thermal and protective specs needed.",
    name: "Robert Henderson",
    role: "Site Engineer, Coastal Build",
  },
];

const proofItems = [
  { label: "Professional Applications", icon: CheckCircle2 },
  { label: "Verified Projects", icon: ShieldCheck },
  { label: "Premium Materials", icon: Award },
  { label: "Technical Expertise", icon: Wrench },
];

const GalleryPage = () => {
  return (
    <main className="bg-black text-white">
      <GalleryHero />
      <ProofRibbon />
      <ProjectCollection />
      <SuccessStories />
      <WhyChoose />
      <ConsultationCTA />
    </main>
  );
};

const GalleryHero = () => (
  <section className="relative overflow-hidden bg-black">
    <img
      src={galleryHeroBackground}
      alt=""
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.82)_36%,rgba(0,0,0,0.18)_70%,rgba(0,0,0,0.15)_100%)]" />
    <div className="relative mx-auto grid min-h-[680px] max-w-[1440px] items-center gap-10 px-6 py-16 md:px-20 lg:grid-cols-[0.92fr_1.08fr]">
      <div className="max-w-[520px]">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">
          Projects - Showroom - Success Stories
        </p>
        <h1 className="mt-7 text-5xl font-extrabold leading-[1.05] md:text-6xl">
          Every Project
          <span className="block text-red-600">Tells Our Story.</span>
        </h1>
        <p className="mt-7 max-w-[410px] text-sm leading-6 text-white/70">
          Explore real projects, product applications and our showroom experience
          that reflect quality, craftsmanship and trust.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#project-collection"
            className="inline-flex h-12 items-center gap-3 rounded bg-red-600 px-7 text-sm font-bold text-white"
          >
            Explore Gallery <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#project-collection"
            className="inline-flex h-12 items-center gap-3 rounded border border-white/20 bg-neutral-900 px-7 text-sm font-bold text-white"
          >
            View Projects <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-12 grid max-w-[430px] grid-cols-3 gap-8">
          {[
            ["500+", "Project Photos", Camera],
            ["25+", "Categories", Grid3X3],
            ["100%", "Quality Assured", ShieldCheck],
          ].map(([value, label, Icon]) => (
            <div key={label}>
              <Icon className="mb-3 h-6 w-6 text-red-600" />
              <p className="text-xl font-extrabold">{value}</p>
              <p className="text-[11px] leading-4 text-white/65">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden min-h-[520px] lg:block" />
    </div>
  </section>
);

const ProofRibbon = () => (
  <section className="border-y border-white/10 bg-neutral-800/60 backdrop-blur-md">
    <div className="mx-auto grid max-w-[1440px] gap-5 px-6 py-7 md:grid-cols-2 md:px-20 lg:grid-cols-4">
      {proofItems.map(({ label, icon: Icon }) => (
        <div key={label} className="flex items-center justify-center gap-3">
          <Icon className="h-5 w-5 fill-red-700 text-red-700" />
          <p className="text-sm font-semibold capitalize tracking-wider text-white">
            {label}
          </p>
        </div>
      ))}
    </div>
  </section>
);

const ProjectCollection = () => (
  <section id="project-collection" className="bg-black px-6 py-24 md:px-12">
    <div className="mx-auto max-w-[1280px]">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold leading-9 text-white">
          Browse Our Project Collection
        </h2>
        <span className="mt-4 h-1 w-20 bg-red-700" />
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {filterPills.map((pill, index) => (
          <button
            key={pill}
            type="button"
            className={`rounded-full px-6 py-3 text-xs font-bold uppercase tracking-wide ${
              index === 0
                ? "bg-red-700 text-white"
                : "border border-white bg-neutral-900 text-white"
            }`}
          >
            {pill}
          </button>
        ))}
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button className="h-11 rounded border border-white px-8 text-xs font-bold uppercase tracking-widest text-white">
          Load More Updates
        </button>
      </div>
    </div>
  </section>
);

const ProjectCard = ({ image, tag, title, description, action }) => (
  <article className="overflow-hidden rounded-[10px] border border-white/10 bg-neutral-900">
    <div className="relative h-80 overflow-hidden">
      <img src={image} alt={title} className="h-full w-full object-cover" />
      <span className="absolute left-4 top-4 rounded-3xl bg-red-700 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
        {tag}
      </span>
    </div>
    <div className="p-8">
      <h3 className="text-xl font-bold leading-7 text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/70">{description}</p>
      <button className="mt-6 inline-flex items-center gap-2 text-base font-bold capitalize tracking-wider text-white">
        {action} <span className="text-lg leading-none">+</span>
      </button>
    </div>
  </article>
);

const SuccessStories = () => (
  <section className="bg-neutral-900 px-6 py-24 md:px-12">
    <div className="mx-auto max-w-[1280px]">
      <h2 className="text-center text-3xl font-bold text-white">
        Client Success Stories
      </h2>
      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {stories.map((story) => (
          <article key={story.name}>
            <div className="relative rounded border border-white/10 bg-black p-8 pt-12">
              <img
                src={story.image}
                alt=""
                className="absolute right-0 top-0 h-24 w-40 rounded-bl object-cover"
              />
              <p className="text-4xl font-bold text-red-600">“</p>
              <p className="mt-3 max-w-[330px] text-sm leading-6 text-white">
                {story.quote}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex size-10 items-center justify-center rounded-full bg-white text-xs font-bold text-black">
                {story.name.slice(0, 2)}
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-white">{story.name}</p>
                <p className="text-[10px] uppercase tracking-wider text-white/50">
                  {story.role}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const WhyChoose = () => (
  <section className="bg-black px-6 py-24 md:px-12">
    <div className="mx-auto grid max-w-[1280px] items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <h2 className="max-w-[520px] text-4xl font-extrabold leading-tight text-white md:text-5xl">
          Why Professionals Choose Nikonikkos
        </h2>
        <p className="mt-7 max-w-[520px] text-sm leading-6 text-white/70">
          Building on a legacy of excellence, we provide the technical foundation
          for the nation&apos;s most ambitious projects.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {[
            ["45+", "Years Experience", Star],
            ["Proven Performance", "Projects completed according to exacting standards.", Target],
            ["Expert Support", "On-site technical guidance and access material specification.", Sparkles],
            ["Nationwide Availability", "Efficient logistics network supporting projects across all regions.", Layers3],
          ].map(([title, text, Icon]) => (
            <div key={title}>
              <Icon className="mb-3 h-6 w-6 text-red-600" />
              <p className="text-xl font-extrabold text-red-600">{title}</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-white">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <img
        src={solutionThermalInsulation}
        alt="Modern architectural project"
        className="h-[520px] w-full rounded-lg object-cover"
      />
    </div>
  </section>
);

const ConsultationCTA = () => (
  <section className="bg-neutral-950 px-6 py-16 md:px-12">
    <div className="mx-auto flex max-w-[1280px] flex-col gap-8 rounded-2xl border border-white/10 bg-neutral-900 p-8 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-600">
          Request Project Consultation
        </p>
        <h2 className="mt-4 text-3xl font-extrabold text-white">
          Planning a demanding project?
        </h2>
        <p className="mt-3 max-w-[620px] text-sm leading-6 text-white/70">
          Partner with our technical team for product selection, project
          specifications and material planning from foundation to finish.
        </p>
      </div>
      <a
        href="/contact"
        className="inline-flex h-12 shrink-0 items-center justify-center gap-3 rounded bg-red-600 px-7 text-sm font-bold text-white"
      >
        <Phone className="h-4 w-4" />
        Contact Team
        <ChevronRight className="h-4 w-4" />
      </a>
    </div>
  </section>
);

export default GalleryPage;
