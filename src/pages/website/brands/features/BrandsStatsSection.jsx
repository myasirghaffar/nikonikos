const stats = [
  { value: "50+", label: "Global Partners" },
  { value: "1,000+", label: "Premium Products" },
  { value: "45+", label: "Years Of Expertise" },
  { value: "15,000+", label: "Loyal Customers" },
];

const BrandsStatsSection = () => {
  return (
    <section className="border-y border-white/5 bg-neutral-950 px-6 py-16 md:px-28">
      <div className="mx-auto grid max-w-[1216px] gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-2">
            <div className="text-center text-5xl font-black leading-[48px] text-red-600">
              {stat.value}
            </div>
            <div className="text-center text-sm font-bold uppercase leading-5 tracking-wider text-gray-500">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandsStatsSection;
