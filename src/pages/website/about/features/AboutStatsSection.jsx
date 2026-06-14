const stats = [
  ["45+", "Years of Experience"],
  ["5,000+", "Satisfied Customers"],
  ["1,000+", "Professional Products"],
  ["100+", "Brand Partners"],
];

const AboutStatsSection = () => {
  return (
    <section className="border-y border-white/5 bg-neutral-950 py-24">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 md:grid-cols-2 md:px-12 lg:grid-cols-4">
        {stats.map(([value, label]) => (
          <div key={label} className="flex flex-col gap-2">
            <p className="text-5xl font-black leading-[48px] text-red-700">
              {value}
            </p>
            <p className="text-sm font-bold uppercase leading-5 tracking-wider text-white/40">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutStatsSection;
