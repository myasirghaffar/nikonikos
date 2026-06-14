const AboutMissionVisionSection = () => {
  return (
    <section className="bg-black px-5 py-24 md:px-12">
      <div className="mx-auto grid max-w-[1344px] gap-7 lg:grid-cols-2">
        <article className="min-h-80 rounded-2xl border border-white/20 bg-[linear-gradient(74deg,rgba(204,0,0,0.2)_0%,rgba(204,0,0,0)_100%)] p-10 md:p-16">
          <h2 className="text-3xl font-bold uppercase leading-6 tracking-widest text-red-700">
            Our Mission
          </h2>
          <p className="mt-14 max-w-[520px] text-2xl font-medium leading-10 text-white">
            To empower the builders of tomorrow with the technical data and
            material excellence they need today.
          </p>
        </article>

        <article className="min-h-80 rounded-2xl border border-white/20 bg-neutral-900 p-10 md:p-16">
          <h2 className="text-3xl font-bold uppercase leading-6 tracking-widest text-white">
            Our Vision
          </h2>
          <p className="mt-14 max-w-[512px] text-2xl font-normal leading-10 text-white">
            To be the global benchmark for architectural protection and
            industrial beauty.
          </p>
        </article>
      </div>
    </section>
  );
};

export default AboutMissionVisionSection;
