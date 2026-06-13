import {
  basfLogo,
  duluxLogo,
  jotunLogo,
  nipponPaintLogo,
  sherwinWilliamsLogo,
  sikaLogo,
} from "../../../../assets/images";

const brandLogos = [
  { src: duluxLogo, alt: "Dulux" },
  { src: sherwinWilliamsLogo, alt: "Sherwin Williams" },
  { src: sikaLogo, alt: "Sika" },
  { src: jotunLogo, alt: "Jotun" },
  { src: nipponPaintLogo, alt: "Nippon Paint" },
  { src: basfLogo, alt: "BASF" },
];

const BrandPartners = () => {
  return (
    <section className="overflow-hidden bg-black px-5 py-16 md:px-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start gap-10 px-0 md:px-10">
        <div className="flex w-full flex-col items-center">
          <h2 className="text-center text-xl font-bold uppercase leading-4 tracking-wider text-white">
            Working with the World&apos;s Finest
          </h2>
        </div>

        <div className="flex w-full flex-wrap items-center justify-center gap-x-16 gap-y-8 md:justify-between">
          {brandLogos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={`${logo.alt} logo`}
              className="h-12 w-12 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPartners;
